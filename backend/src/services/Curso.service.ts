import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { Curso, Prisma } from '@prisma/client';

@Injectable()
export class CursoService {
  constructor(private prisma: PrismaService) {}

  //BASIC ROUTES API

  async createCurso(data: Prisma.CursoCreateInput): Promise<Curso> {
    return this.prisma.curso.create({
      data,
    });
  }

  async getAllCursos(): Promise<Curso[]> {
    return this.prisma.curso.findMany();
  }

  async getCurso(id: string): Promise<Curso | null> {
    return this.prisma.curso.findUnique({
      where: { id: String(id) },
    });
  }

  async deleteCurso(id: string): Promise<Curso> {
    return this.prisma.curso.delete({
      where: { id: String(id) },
    });
  }

  async updateCurso(id: string, nome: string): Promise<Curso> {
    return this.prisma.curso.update({
      where: { id: String(id) },
      data: { nome: nome },
    });
  }
}
