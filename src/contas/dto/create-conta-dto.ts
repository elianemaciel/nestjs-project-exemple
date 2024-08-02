import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateContaDto {
  @IsNotEmpty()
  @ApiProperty({
    type: Number,
    description: 'Numero da conta',
  })
  numero: number;

  @IsNotEmpty()
  @ApiProperty({
      type: String,
      description: 'Titular da conta',
    })
  titular: string;

  @IsNotEmpty()
  @ApiProperty({
      type: Number,
      description: 'Saldo da conta',
    })
  saldo: number;

  @IsNotEmpty()
  @ApiProperty({
      type: Number,
      description: 'Limite da conta',
    })
  limite: number;
}