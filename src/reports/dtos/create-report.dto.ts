import { IsString, IsNotEmpty, IsIn, MaxLength } from 'class-validator';

export class CreateReportDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(255)
  address!: string;

  @IsString()
  @IsNotEmpty()
  description!: string;

  @IsString()
  @IsNotEmpty()
  @IsIn(['low', 'medium', 'high'], { message: 'Severity must be low, medium, or high' })
  severity!: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  reporterPhone!: string;
}