import { IsOptional, IsString } from 'class-validator';

export class EstudanteUpdateDto {
  @IsOptional()
  @IsString()
  nome?: string;

  @IsOptional()
  @IsString()
  cpf?: string;

  @IsOptional()
  @IsString()
  matricula?: string;

  @IsOptional()
  @IsString()
  cursoId?: string;
}
