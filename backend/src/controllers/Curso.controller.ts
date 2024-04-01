import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
  ValidationPipe,
  UsePipes,
} from '@nestjs/common';
import { CursoService } from 'src/services/Curso.service';
import { Curso as cursoModel } from '@prisma/client';
import { CursoCreateDto } from 'src/Dtos/Curso-Create.dto';
import { CursoUpdateDto } from 'src/Dtos/Curso-Update.dto';

@Controller('api')
export class CursoController {
  constructor(private readonly cursoService: CursoService) {}

  @Get('/cursos')
  async getAllCursos(): Promise<cursoModel[]> {
    return this.cursoService.getAllCursos();
  }

  @UsePipes(new ValidationPipe({ transform: true }))
  @Get('/curso/:id')
  async getCurso(@Param('id') id: string): Promise<cursoModel> {
    return this.cursoService.getCurso(id);
  }

  @Post('/curso')
  async createCurso(@Body() cursoData: CursoCreateDto): Promise<cursoModel> {
    return this.cursoService.createCurso(cursoData);
  }

  @UsePipes(new ValidationPipe({ transform: true }))
  @Delete('/curso/:id')
  async deleteCurso(@Param('id') id: string): Promise<cursoModel> {
    return this.cursoService.deleteCurso(id);
  }

  @Put('/curso/:id')
  async updateCurso(
    @Param('id') id: string,
    @Body() cursoUpdateDto: CursoUpdateDto,
  ): Promise<cursoModel> {
    return this.cursoService.updateCurso(id, cursoUpdateDto.nome);
  }
}
