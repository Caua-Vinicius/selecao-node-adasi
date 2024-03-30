import { Module } from '@nestjs/common';
import { EstudanteController } from 'src/controllers/Estudante.controller';
import { PrismaService } from 'src/prisma.service';
import { EstudanteService } from 'src/services/Estudante.service';

@Module({
  controllers: [EstudanteController],
  providers: [EstudanteService, PrismaService],
})
export class EstudanteModule {}
