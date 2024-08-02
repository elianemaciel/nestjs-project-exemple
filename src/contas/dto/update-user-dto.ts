import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class UpdateContaDto {
  @IsOptional()
  @ApiProperty({
    type: Number,
    description: 'Numero da conta',
  })
  numero: number;

  @IsOptional()
  @ApiProperty({
    type: String,
    description: 'Titular da conta',
  })
  titular: string;

  @IsOptional()
  @ApiProperty({
    type: Number,
    description: 'Saldo da conta',
  })
  saldo: number;

  @IsOptional()
  @ApiProperty({
    type: Number,
    description: 'Limite da conta',
  })
  limite: number;
}