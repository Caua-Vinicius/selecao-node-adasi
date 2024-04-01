import { IsNotEmpty, IsString } from 'class-validator';

export class EstudanteCreateDto {
  @IsNotEmpty()
  @IsString()
  nome: string;

  @IsNotEmpty()
  @IsString()
  cpf: string;

  @IsNotEmpty()
  @IsString()
  matricula: string;

  @IsNotEmpty()
  @IsString()
  cursoId: string;
}
