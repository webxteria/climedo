import { IsEmail, IsNotEmpty, IsUUID, IsString, IsOptional, IsArray, ValidateNested } from 'class-validator';

export class TabsRequestDTO {
  @IsOptional()
  @IsUUID()
  _id: string;


  @IsString()
  @IsNotEmpty()
  name: string

  @IsString()
  @IsNotEmpty()
  description: string

  @IsArray()
  @IsNotEmpty()
  @ValidateNested({each: true})
  dataPoints: []

}
