import { PrismaService } from 'src/prisma.service';
import { Atividade } from '@prisma/client';

export class AtividadeService {
  constructor(private prisma: PrismaService) {}

  async getAllAtividades(): Promise<Atividade[]> {
    return this.prisma.atividade.findMany();
  }

  async getAtividade(id: string): Promise<Atividade> {
    return this.prisma.atividade.findUnique({ where: { id: String(id) } });
  }

  async createAtividade(data: Atividade): Promise<Atividade> {
    return this.prisma.atividade.create({ data });
  }

  async updateAtividade(id: string, data: Atividade): Promise<Atividade> {
    return this.prisma.atividade.update({
      where: { id: String(id) },
      data,
    });
  }

  async deleteAtvidade(id: string): Promise<Atividade> {
    return this.prisma.atividade.delete({ where: { id: String(id) } });
  }
}
