import { IsNotEmpty, IsString } from 'class-validator';

export class AtividadeEndDto {
  @IsNotEmpty()
  @IsString()
  horaTermino: string;
}
