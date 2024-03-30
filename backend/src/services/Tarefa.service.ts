import { PrismaService } from 'src/prisma.service';
import { Prisma, Tarefa } from '@prisma/client';
import { Injectable } from '@nestjs/common';

@Injectable()
export class TarefaService {
  constructor(private prisma: PrismaService) {}

  async getAllTarefas(): Promise<Tarefa[]> {
    return this.prisma.tarefa.findMany();
  }

  async getTarefa(id: string): Promise<Tarefa> {
    return this.prisma.tarefa.findUnique({ where: { id: String(id) } });
  }

  async createTarefa(data: Prisma.TarefaCreateInput): Promise<Tarefa> {
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
