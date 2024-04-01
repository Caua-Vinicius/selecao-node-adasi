import { IsOptional, IsString } from 'class-validator';

export class AtividadeUpdateDto {
  @IsOptional()
  @IsString()
  tarefaId?: string;

  @IsOptional()
  @IsString()
  estudanteId?: string;

  @IsOptional()
  @IsString()
  data?: string;

  @IsOptional()
  @IsString()
  horaAgendamentoInicio?: string;

  @IsOptional()
  @IsString()
  horaAgendamentoTermino?: string;

  horaInicio;
  horaTermino;
}
