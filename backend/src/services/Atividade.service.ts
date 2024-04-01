import { PrismaService } from 'src/prisma.service';
import { Atividade, Prisma } from '@prisma/client';
import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { AtividadeUpdateDto } from 'src/Dtos/Atividade-Update.dto';

@Injectable()
export class AtividadeService {
  constructor(private prisma: PrismaService) {}

  //BASIC ROUTES API

  async getAllAtividades(): Promise<Atividade[]> {
    return this.prisma.atividade.findMany();
  }

  async getAtividade(id: string): Promise<Atividade> {
    return this.prisma.atividade.findUnique({ where: { id: String(id) } });
  }

  async createAtividade(data: Prisma.AtividadeCreateInput): Promise<Atividade> {
    //Apenas podem ser definidas nas suas proprias rotas
    data.horaInicio = null;
    data.horaTermino = null;
    return this.prisma.atividade.create({ data });
  }

  async updateAtividade(
    id: string,
    data: AtividadeUpdateDto,
  ): Promise<Atividade> {
    //Apenas podem ser definidas nas suas proprias rotas
    data.horaInicio = null;
    data.horaTermino = null;
    return this.prisma.atividade.update({
      where: { id: String(id) },
      data,
    });
  }

  async deleteAtividade(id: string): Promise<Atividade> {
    return this.prisma.atividade.delete({ where: { id: String(id) } });
  }

  //REGRAS DE AGENDAMENTO E ROTAS DE START E FINISH ATIVIDADE

  //      START

  async startAtividade(id: string, horaInicio: string): Promise<Atividade> {
    // Verificar a tolerância de 15 minutos para mais ou para menos
    const toleranciaMinutos = 15;
    const horaInicioAtividade = new Date(horaInicio);
    const Atividade = await this.prisma.atividade.findUnique({
      where: { id: String(id) },
    });

    //Verifica se a Atividade já foi iniciada e se existe

    if (!Atividade) {
      throw new NotFoundException('Atividade não encontrada');
    }
    if (Atividade.horaInicio) {
      throw new BadRequestException('Você já começou a atividade!');
    }

    const diferencaMinutos =
      (horaInicioAtividade.getTime() -
        Atividade.horaAgendamentoInicio.getTime()) /
      (1000 * 60);

    if (Math.abs(diferencaMinutos) > toleranciaMinutos) {
      throw new BadRequestException(
        'A atividade só pode ser iniciada com uma tolerância de 15 minutos para mais ou para menos.',
      );
    }

    return this.prisma.atividade.update({
      where: { id },
      data: { horaInicio: horaInicioAtividade },
    });
  }

  //      FINISH

  async finishAtividade(id: string, horaTermino: string): Promise<Atividade> {
    const Atividade = await this.prisma.atividade.findUnique({
      where: { id },
    });

    //Checagem da existencia de atividade, se já foi finalizada, e se ja foi inicializada

    if (!Atividade) {
      throw new NotFoundException('Atividade não encontrada');
    }
    if (Atividade.horaTermino) {
      throw new BadRequestException('Atividade já finalizada');
    }
    if (!Atividade.horaInicio) {
      throw new BadRequestException(
        'Não é possivel finalizar uma atividade que não foi começada',
      );
    }

    const horaInicio = Atividade.horaInicio;
    const horaTerminoAtividade = new Date(horaTermino);
    const SeisHorasMilisegundos = 6 * 60 * 60 * 1000;

    //Validação do horario de termino

    if (horaTerminoAtividade < horaInicio) {
      throw new BadRequestException(
        'A data e hora de término não podem ser anteriores à data e hora de início.',
      );
    }

    const duracaoAtividade =
      horaTerminoAtividade.getTime() - horaInicio.getTime();

    if (duracaoAtividade > SeisHorasMilisegundos) {
      // 6 horas em milissegundos
      throw new BadRequestException(
        'A duração da atividade não pode ultrapassar 6 horas.',
      );
    }

    return this.prisma.atividade.update({
      where: { id },
      data: { horaTermino: new Date(horaTermino) },
    });
  }
}
