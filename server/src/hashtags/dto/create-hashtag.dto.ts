import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateHashtagDto {
  @IsString()
  @ApiProperty({ description: '해시태그' })
  readonly tag: string;
}
