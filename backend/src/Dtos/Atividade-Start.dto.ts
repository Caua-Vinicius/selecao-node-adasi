import { IsNotEmpty, IsString } from 'class-validator';

export class AtividadeStartDto {
  @IsNotEmpty()
  @IsString()
  horaInicio: string;
}
