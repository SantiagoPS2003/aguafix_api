import { 
  Controller, 
  Get, 
  Post, 
  Body, 
  UploadedFile, 
  UseInterceptors, 
  BadRequestException 
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ReportsService } from './reports.service';
import { CreateReportDto } from './dtos/create-report.dto';
import { Report } from './entities/report.entity';

@Controller('reports')
export class ReportsController {
  constructor(private readonly reportsService: ReportsService) {}

  @Post()
  @UseInterceptors(FileInterceptor('photo')) // Intercepta el campo "photo" enviado desde el cliente (Postman / Frontend)
  async create(
    @Body() createReportDto: CreateReportDto,
    @UploadedFile() file: Express.Multer.File,
  ): Promise<Report> {
    // Validar obligatoriedad de la foto en el controlador antes de llegar al servicio
    if (!file) {
      throw new BadRequestException('La foto de la fuga es obligatoria.');
    }

    return await this.reportsService.create(createReportDto, file);
  }

  @Get()
  async findAll(): Promise<Report[]> {
    return await this.reportsService.findAll();
  }
}