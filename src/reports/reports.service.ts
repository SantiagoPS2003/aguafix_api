import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Report } from './entities/report.entity';
import { CreateReportDto } from './dtos/create-report.dto';
import { EmailService } from '../email/email.service';
import { generateReportTemplate } from './templates/report.template';
import { envs } from '../config/env';

@Injectable()
export class ReportsService {
  constructor(
    @InjectRepository(Report)
    private readonly reportRepository: Repository<Report>,
    private readonly emailService: EmailService,
  ) {}

  async create(createReportDto: CreateReportDto): Promise<Report> {
    const report = this.reportRepository.create(createReportDto);
    const savedReport = await this.reportRepository.save(report);

    // Enviar correo de aviso a la cuadrilla usando la plantilla HTML
    const htmlTemplate = generateReportTemplate(createReportDto);
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