import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { Estudante } from '@prisma/client';
import { EstudanteCreateDto } from 'src/Dtos/Estudante-Create.dto';
import { EstudanteUpdateDto } from 'src/Dtos/Estudante-Update.dto';
import { EstudanteService } from 'src/services/Estudante.service';

@Controller('api')
export class EstudanteController {
  constructor(private readonly estudanteService: EstudanteService) {}

  // GET ALL

  @Get('/estudantes')
  async getAllEstudantes(): Promise<Estudante[]> {
    return this.estudanteService.getAllEstudantes();
  }

  // GET UNIQUE BY ID

  @UsePipes(new ValidationPipe({ transform: true }))
  @Get('/estudante/:id')
  async getEstudante(@Param('id') id: string): Promise<Estudante> {
    return this.estudanteService.getEstudante(id);
  }

  // CREATE

  @Post('/estudante')
  async postEstudante(
    @Body() postData: EstudanteCreateDto,
  ): Promise<Estudante> {
    return this.estudanteService.createEstudante(postData);
  }

  // DELETE

  @UsePipes(new ValidationPipe({ transform: true }))
  @Delete('/estudante/:id')
  async deleteEstudante(@Param('id') id: string): Promise<Estudante> {
    return this.estudanteService.deleteEstudante(id);
  }

  // UPDATE

  @UsePipes(new ValidationPipe({ transform: true }))
  @Put('/estudante/:id')
  async updateEstudante(
    @Param('id') id: string,
    @Body() putData: EstudanteUpdateDto,
  ): Promise<Estudante> {
    return this.estudanteService.updateEstudante(id, putData);
  }
}
