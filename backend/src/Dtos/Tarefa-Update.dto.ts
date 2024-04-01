import { IsString } from 'class-validator';

export class TarefaUpdateDto {
  @IsString()
  nome: string;
}
