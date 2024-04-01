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
import { Atividade } from '@prisma/client';
import { AtividadeCreateDto } from 'src/Dtos/Atividade-Create.dto';
import { AtividadeFinishDto } from 'src/Dtos/Atividade-Finish.dto';
import { AtividadeStartDto } from 'src/Dtos/Atividade-Start.dto';
import { AtividadeUpdateDto } from 'src/Dtos/Atividade-Update.dto';
import { AtividadeService } from 'src/services/Atividade.service';

@Controller('api')
export class AtividadeController {
  constructor(private readonly atividadeService: AtividadeService) {}

  //GETALL

  @Get('/atividades')
  async getAllAtividades(): Promise<Atividade[]> {
    return this.atividadeService.getAllAtividades();
  }

  //GET ATIVIDADE BY ID

  @UsePipes(new ValidationPipe({ transform: true }))
  @Get('/atividade/:id')
  async getAtividade(@Param('id') id: string): Promise<Atividade> {
    return this.atividadeService.getAtividade(id);
  }

  //CREATE ATIVIDADE

  @Post('/atividade')
  async postAtividade(
    @Body() postData: AtividadeCreateDto,
  ): Promise<Atividade> {
    return this.atividadeService.createAtividade(postData);
  }

  //DELETE ATIVIDADE BY ID

  @UsePipes(new ValidationPipe({ transform: true }))
  @Delete('/atividade/:id')
  async deleteAtividade(@Param('id') id: string): Promise<Atividade> {
    return this.atividadeService.deleteAtividade(id);
  }

  //UPDATE ATIVIDADE BY ID

  @UsePipes(new ValidationPipe({ transform: true }))
  @Put('/atividade/:id')
  async updateAtividade(
    @Param('id') id: string,
    @Body() putData: AtividadeUpdateDto,
  ): Promise<Atividade> {
    return this.atividadeService.updateAtividade(id, putData);
  }

  //INICIAR ATIVIDADE

  @UsePipes(new ValidationPipe({ transform: true }))
  @Put('/atividade/:id/start')
  startAtividade(
    @Param('id') id: string,
    @Body() atividadeDto: AtividadeStartDto,
  ): Promise<Atividade> {
    return this.atividadeService.startAtividade(id, atividadeDto.horaInicio);
  }

  //TERMINAR ATIVIDADE

  @UsePipes(new ValidationPipe({ transform: true }))
  @Put('/atividade/:id/end')
  finishAtividade(
    @Param('id') id: string,
    @Body() atividadeDto: AtividadeFinishDto,
  ): Promise<Atividade> {
    return this.atividadeService.finishAtividade(id, atividadeDto.horaTermino);
  }
}
