import { PrismaService } from 'src/prisma.service';
import { Tarefa } from '@prisma/client';

export class TarefaService {
  constructor(private prisma: PrismaService) {}

  async getALlTarefas(): Promise<Tarefa[]> {
    return this.prisma.tarefa.findMany();
  }

  async getTarefa(id: string): Promise<Tarefa> {
    return this.prisma.tarefa.findUnique({ where: { id: String(id) } });
  }

  async createTarefa(data: Tarefa): Promise<Tarefa> {
    return this.prisma.tarefa.create({ data });
  }

  async updateTarefa(id: string, data: Tarefa): Promise<Tarefa> {
    return this.prisma.tarefa.update({
      where: { id: String(id) },
      data,
    });
  }
  async deleteTarefa(id: string): Promise<Tarefa> {
    return this.prisma.tarefa.delete({ where: { id: String(id) } });
  }
}
