import { Module } from '@nestjs/common';
import { CursoModule } from './modules/Curso.module';
import { AtividadeModule } from './modules/Atividade.module';
import { EstudanteModule } from './modules/Estudante.module';
import { TarefaModule } from './modules/Tarefa.module';

@Module({
  imports: [CursoModule, AtividadeModule, EstudanteModule, TarefaModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
