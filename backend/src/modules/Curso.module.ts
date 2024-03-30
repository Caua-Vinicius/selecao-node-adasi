import { Module } from '@nestjs/common';
import { CursoController } from 'src/controllers/Curso.controller';
import { PrismaService } from 'src/prisma.service';
import { CursoService } from 'src/services/Curso.service';

@Module({
  controllers: [CursoController],
  providers: [CursoService, PrismaService],
})
export class CursoModule {}
