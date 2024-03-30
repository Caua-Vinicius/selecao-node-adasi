import { Module } from '@nestjs/common';
import { AtividadeController } from 'src/controllers/Atividade.controller';
import { PrismaService } from 'src/prisma.service';
import { AtividadeService } from 'src/services/Atividade.service';

@Module({
  controllers: [AtividadeController],
  providers: [AtividadeService, PrismaService],
})
export class AtividadeModule {}
