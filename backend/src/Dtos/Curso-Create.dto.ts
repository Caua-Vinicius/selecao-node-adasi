import { IsNotEmpty, IsString } from 'class-validator';

export class CursoCreateDto {
  @IsString()
  @IsNotEmpty()
  nome: string;
}
