import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Estudante } from '@prisma/client';
import { EstudanteService } from 'src/services/Estudante.service';

@Controller('api')
export class EstudanteController {
  constructor(private readonly estudanteService: EstudanteService) {}

  @Get('/estudantes')
  async getAllEstudantes(): Promise<Estudante[]> {
    return this.estudanteService.getAllEstudantes();
  }

  @Get('/estudante/:id')
  async getEstudante(@Param('id') id: string): Promise<Estudante> {
    return this.estudanteService.getEstudante(id);
  }

  @Post('/estudante')
  async postEstudante(@Body() postData): Promise<Estudante> {
    return this.estudanteService.createEstudante(postData);
  }

  @Delete('/estudante/:id')
  async deleteEstudante(@Param('id') id: string): Promise<Estudante> {
    return this.estudanteService.deleteEstudante(id);
  }

  @Put('/estudante/:id')
  async updateEstudante(
    @Param('id') id: string,
    @Body() putData,
  ): Promise<Estudante> {
    return this.estudanteService.updateEstudante(id, putData);
  }
}
