import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Prisma, Tarefa } from '@prisma/client';
import { TarefaService } from 'src/services/Tarefa.service';

@Controller('api')
export class TarefaController {
  constructor(private readonly tarefaService: TarefaService) {}

  @Get('/tarefas')
  async getAllTarefas(): Promise<Tarefa[]> {
    return this.tarefaService.getAllTarefas();
  }

  @Get('/tarefa/:id')
  async getTarefa(@Param('id') id: string): Promise<Tarefa> {
    return this.tarefaService.getTarefa(id);
  }

  @Post('/tarefa')
  async postTarefa(
    @Body() postData: Prisma.TarefaCreateInput,
  ): Promise<Tarefa> {
    return this.tarefaService.createTarefa(postData);
  }

  @Delete('/tarefa/:id')
  async deleteTarefa(@Param('id') id: string): Promise<Tarefa> {
    return this.tarefaService.deleteTarefa(id);
  }

  @Put('/tarefa/:id')
  async updateTarefa(
    @Param('id') id: string,
    @Body() putData,
  ): Promise<Tarefa> {
    return this.tarefaService.updateTarefa(id, putData);
  }
}
