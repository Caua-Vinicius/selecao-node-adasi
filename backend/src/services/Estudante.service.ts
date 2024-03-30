import { Injectable } from '@nestjs/common';
import { Estudante, Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class EstudanteService {
  constructor(private prisma: PrismaService) {}

  async getAllEstudantes(): Promise<Estudante[]> {
    return this.prisma.estudante.findMany({ include: { curso: true } });
  }

  async getEstudante(id: string): Promise<Estudante | null> {
    return this.prisma.estudante.findUnique({
      where: { id: String(id) },
    });
  }

  async createEstudante(data: Prisma.EstudanteCreateInput): Promise<Estudante> {
    return this.prisma.estudante.create({ data });
  }

  async updateEstudante(id: string, data: Estudante): Promise<Estudante> {
    return this.prisma.estudante.update({
      where: { id: String(id) },
      data,
    });
  }

  async deleteEstudante(id: string): Promise<Estudante> {
    return this.prisma.estudante.delete({
      where: { id: String(id) },
    });
  }
}
