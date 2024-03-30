import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { CursoService } from 'src/services/Curso.service';
import { Curso, Prisma, Curso as cursoModel } from '@prisma/client';

@Controller('api')
export class CursoController {
  constructor(private readonly cursoService: CursoService) {}

  @Get('/cursos')
  async getAllCursos(): Promise<cursoModel[]> {
    return this.cursoService.getAllCursos();
  }

  @Get('/curso/:id')
  async getCurso(@Param('id') id: string): Promise<cursoModel> {
    return this.cursoService.getCurso(id);
  }

  @Post('/curso')
  async createCurso(
    @Body() cursoData: Prisma.CursoCreateInput,
  ): Promise<cursoModel> {
    return this.cursoService.createCurso(cursoData);
  }

  @Delete('/curso/:id')
  async deleteCurso(@Param('id') id: string): Promise<cursoModel> {
    return this.cursoService.deleteCurso(id);
  }

  @Put('/curso/:id')
  async updateCurso(
    @Param('id') id: string,
    @Body() data: Curso,
  ): Promise<cursoModel> {
    return this.cursoService.updateCurso(id, data);
  }
}
