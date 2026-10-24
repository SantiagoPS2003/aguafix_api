import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Report } from './entities/report.entity';
import { CreateReportDto } from './dtos/create-report.dto';
import { EmailService } from '../email/email.service';
import { StorageService } from '../storage/storage.service'; // <-- 1. Importar el StorageService
import { generateReportTemplate } from './templates/report.template';
import { envs } from '../config/env';

@Injectable()
export class ReportsService {
  constructor(
    @InjectRepository(Report)
    private readonly reportRepository: Repository<Report>,
    private readonly emailService: EmailService,
    private readonly storageService: StorageService, // <-- 2. Inyectar el StorageService
  ) {}

  async create(createReportDto: CreateReportDto, file: Express.Multer.File): Promise<Report> {
    // 3. Validar que la foto sea obligatoria
    if (!file) {
      throw new BadRequestException('La foto de la fuga es obligatoria.');
    }

    // 4. Subir la foto a AWS S3
    const photoUrl = await this.storageService.uploadFile(file, 'reports/');

    // 5. Crear y guardar el reporte incluyendo la photoUrl
    const report = this.reportRepository.create({
      ...createReportDto,
      photoUrl,
    });
    const savedReport = await this.reportRepository.save(report);

    // 6. Enviar correo de aviso a la cuadrilla usando la plantilla HTML y la URL de la foto
    const htmlTemplate = generateReportTemplate(createReportDto, photoUrl);
    await this.emailService.sendEmail(
      envs.MAIL_USER,
      'Nuevo Reporte de Fuga de Agua Asignado',
      htmlTemplate,
    );

    return savedReport;
  }

  async findAll(): Promise<Report[]> {
    return await this.reportRepository.find({
      order: { createdAt: 'DESC' },
    });
  }
}