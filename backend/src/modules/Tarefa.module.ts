import { Module } from '@nestjs/common';
import { TarefaController } from 'src/controllers/Tarefa.controller';
import { PrismaService } from 'src/prisma.service';
import { TarefaService } from 'src/services/Tarefa.service';

@Module({
  controllers: [TarefaController],
  providers: [TarefaService, PrismaService],
})
export class TarefaModule {}
