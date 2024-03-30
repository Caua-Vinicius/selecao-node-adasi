import { PrismaService } from 'src/prisma.service';
import { Atividade, Prisma } from '@prisma/client';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AtividadeService {
  constructor(private prisma: PrismaService) {}

  async getAllAtividades(): Promise<Atividade[]> {
    return this.prisma.atividade.findMany();
  }

  async getAtividade(id: string): Promise<Atividade> {
    return this.prisma.atividade.findUnique({ where: { id: String(id) } });
  }

  async createAtividade(data: Prisma.AtividadeCreateInput): Promise<Atividade> {
    return this.prisma.atividade.create({ data });
  }

  async updateAtividade(id: string, data: Atividade): Promise<Atividade> {
    return this.prisma.atividade.update({
      where: { id: String(id) },
      data,
    });
  }

  async deleteAtividade(id: string): Promise<Atividade> {
    return this.prisma.atividade.delete({ where: { id: String(id) } });
  }

  async startAtividade(id: string, horaInicio: string): Promise<Atividade> {
    return this.prisma.atividade.update({
      where: { id },
      data: { horaInicio: new Date(horaInicio) },
    });
  }
  async endAtividade(id: string, horaTermino: string): Promise<Atividade> {
    return this.prisma.atividade.update({
      where: { id },
      data: { horaTermino: new Date(horaTermino) },
    });
  }
}