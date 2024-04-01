import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class AtividadeCreateDto {
  @IsNotEmpty()
  data: string | Date;

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

  @IsOptional()
  horaInicio?: string | Date;

  @IsOptional()
  horaTermino?: string | Date;

  estudante;
  tarefa;
}
