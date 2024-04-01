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
import { AtividadeEndDto } from 'src/Dtos/Atividade-End.dto';
import { AtividadeStartDto } from 'src/Dtos/Atividade-Start.dto';
import { AtividadeUpdateDto } from 'src/Dtos/Atividade-Update.dto';
import { AtividadeService } from 'src/services/Atividade.service';

@Controller('api')
export class AtividadeController {
  constructor(private readonly atividadeService: AtividadeService) {}

  @Get('/atividades')
  async getAllAtividades(): Promise<Atividade[]> {
    return this.atividadeService.getAllAtividades();
  }

  @UsePipes(new ValidationPipe({ transform: true }))
  @Get('/atividade/:id')
  async getAtividade(@Param('id') id: string): Promise<Atividade> {
    return this.atividadeService.getAtividade(id);
  }

  @Post('/atividade')
  async postAtividade(
    @Body() postData: AtividadeCreateDto,
  ): Promise<Atividade> {
    return this.atividadeService.createAtividade(postData);
  }

  @UsePipes(new ValidationPipe({ transform: true }))
  @Delete('/atividade/:id')
  async deleteAtividade(@Param('id') id: string): Promise<Atividade> {
    return this.atividadeService.deleteAtividade(id);
  }

  @UsePipes(new ValidationPipe({ transform: true }))
  @Put('/atividade/:id')
  async updateAtividade(
    @Param('id') id: string,
    @Body() putData: AtividadeUpdateDto,
  ): Promise<Atividade> {
    return this.atividadeService.updateAtividade(id, putData);
  }

  @UsePipes(new ValidationPipe({ transform: true }))
  @Put('/atividade/:id/start')
  startAtividade(
    @Param('id') id: string,
    @Body() atividadeDto: AtividadeStartDto,
  ): Promise<Atividade> {
    return this.atividadeService.startAtividade(id, atividadeDto.horaInicio);
  }

  @UsePipes(new ValidationPipe({ transform: true }))
  @Put('/atividade/:id/end')
  endAtividade(
    @Param('id') id: string,
    @Body() atividadeDto: AtividadeEndDto,
  ): Promise<Atividade> {
    return this.atividadeService.endAtividade(id, atividadeDto.horaTermino);
  }
}
