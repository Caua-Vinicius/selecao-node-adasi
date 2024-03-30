import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Atividade, Prisma } from '@prisma/client';
import { AtividadeService } from 'src/services/Atividade.service';

@Controller('api')
export class AtividadeController {
  constructor(private readonly atividadeService: AtividadeService) {}

  @Get('/atividades')
  async getAllAtividades(): Promise<Atividade[]> {
    return this.atividadeService.getAllAtividades();
  }

  @Get('/atividade/:id')
  async getAtividade(@Param('id') id: string): Promise<Atividade> {
    return this.atividadeService.getAtividade(id);
  }

  @Post('/atividade')
  async postAtividade(
    @Body() postData: Prisma.AtividadeCreateInput,
  ): Promise<Atividade> {
    return this.atividadeService.createAtividade(postData);
  }

  @Delete('/atividade/:id')
  async deleteAtividade(@Param('id') id: string): Promise<Atividade> {
    return this.atividadeService.deleteAtividade(id);
  }

  @Put('/atividade/:id')
  async updateAtividade(
    @Param('id') id: string,
    @Body() putData: Atividade,
  ): Promise<Atividade> {
    return this.atividadeService.updateAtividade(id, putData);
  }

  @Put('/atividade/:id/start')
  startAtividade(
    @Param('id') id: string,
    @Body('horaInicio') horaInicio: string,
  ): Promise<Atividade> {
    return this.atividadeService.startAtividade(id, horaInicio);
  }

  @Put('/atividade/:id/end')
  endAtividade(
    @Param('id') id: string,
    @Body('horaTermino') horaTermino: string,
  ): Promise<Atividade> {
    return this.atividadeService.endAtividade(id, horaTermino);
  }
}
