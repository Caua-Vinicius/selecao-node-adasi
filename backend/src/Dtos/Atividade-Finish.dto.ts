import { IsNotEmpty, IsString } from 'class-validator';

export class AtividadeFinishDto {
  @IsNotEmpty()
  @IsString()
  horaTermino: string;
}
