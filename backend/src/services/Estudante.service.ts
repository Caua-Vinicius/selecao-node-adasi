import { Injectable } from '@nestjs/common';
import { Estudante } from '@prisma/client';
import { EstudanteCreateDto } from 'src/Dtos/Estudante-Create.dto';
import { EstudanteUpdateDto } from 'src/Dtos/Estudante-Update.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class EstudanteService {
  constructor(private prisma: PrismaService) {}

  //BASIC ROUTES API

  async getAllEstudantes(): Promise<Estudante[]> {
    return this.prisma.estudante.findMany({ include: { curso: true } });
  }

  async getEstudante(id: string): Promise<Estudante | null> {
    return this.prisma.estudante.findUnique({
      where: { id: String(id) },
    });
  }

  async createEstudante(data: EstudanteCreateDto): Promise<Estudante> {
    return this.prisma.estudante.create({ data });
  }

  async updateEstudante(
    id: string,
    data: EstudanteUpdateDto,
  ): Promise<Estudante> {
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
