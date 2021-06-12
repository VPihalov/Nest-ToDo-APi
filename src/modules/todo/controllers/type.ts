import { ApiProperty } from '@nestjs/swagger';

export class NotFoundResponse {
  @ApiProperty()
  status: number
  @ApiProperty()
  description: string
}