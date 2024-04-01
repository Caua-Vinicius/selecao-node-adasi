import { IsNotEmpty, IsString } from 'class-validator';

export class AtividadeCreateDto {
  @IsNotEmpty()
  data: string;

  @IsNotEmpty()
  @IsString()
  estudanteId: string;

  @IsNotEmpty()
  @IsString()
  tarefaId: string;

  @IsNotEmpty()
  horaAgendamentoInicio: string | Date;

  @IsNotEmpty()
  horaAgendamentoTermino: string | Date;

  estudante;
  tarefa;
}
