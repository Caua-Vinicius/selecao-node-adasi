import { IsString } from 'class-validator';

export class CursoUpdateDto {
  @IsString()
  nome: string;
}
