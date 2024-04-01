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
import { Tarefa } from '@prisma/client';
import { TarefaCreateDto } from 'src/Dtos/Tarefa-Create.dto';
import { TarefaUpdateDto } from 'src/Dtos/Tarefa-Update.dto';
import { TarefaService } from 'src/services/Tarefa.service';

@Controller('api')
export class TarefaController {
  constructor(private readonly tarefaService: TarefaService) {}

  //GET ALL TAREFAS

  @Get('/tarefas')
  async getAllTarefas(): Promise<Tarefa[]> {
    return this.tarefaService.getAllTarefas();
  }

  //GET TAREFA BY ID

  @UsePipes(new ValidationPipe({ transform: true }))
  @Get('/tarefa/:id')
  async getTarefa(@Param('id') id: string): Promise<Tarefa> {
    return this.tarefaService.getTarefa(id);
  }

  //CREATE TAREFA

  @Post('/tarefa')
  async postTarefa(@Body() postData: TarefaCreateDto): Promise<Tarefa> {
    return this.tarefaService.createTarefa(postData);
  }

  //DELETE TAREFA BY ID

  @UsePipes(new ValidationPipe({ transform: true }))
  @Delete('/tarefa/:id')
  async deleteTarefa(@Param('id') id: string): Promise<Tarefa> {
    return this.tarefaService.deleteTarefa(id);
  }

  //UPDATE TAREFA BY ID

  @UsePipes(new ValidationPipe({ transform: true }))
  @Put('/tarefa/:id')
  async updateTarefa(
    @Param('id') id: string,
    @Body() putData: TarefaUpdateDto,
  ): Promise<Tarefa> {
    return this.tarefaService.updateTarefa(id, putData);
  }
}
