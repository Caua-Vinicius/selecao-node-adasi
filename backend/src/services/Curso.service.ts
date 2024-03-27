import { Curso } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

export class CursoService {
  constructor(private prisma: PrismaService) {}

  async getAllCursos(): Promise<Curso[]> {
    return this.prisma.curso.findMany();
  }

  async getCurso(id: string): Promise<Curso | null> {
    return this.prisma.curso.findUnique({
      where: { id: String(id) },
    });
  }

  async createCurso(data: Curso): Promise<Curso> {
    return this.prisma.curso.create({ data });
  }

  async updateCurso(id: string, data: Curso): Promise<Curso> {
    return this.prisma.curso.update({
      where: { id: String(id) },
      data: { nome: data.nome },
    });
  }

  async deleteCurso(id: string): Promise<Curso> {
    return this.prisma.curso.delete({
      where: { id: String(id) },
    });
  }
}
