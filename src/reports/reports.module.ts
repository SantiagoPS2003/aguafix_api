import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReportsController } from './reports.controller';
import { ReportsService } from './reports.service';
import { Report } from './entities/report.entity';
import { EmailModule } from '../email/email.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Report]),
    EmailModule, // Necesario para que el ReportsService pueda usar el EmailService
  ],
  controllers: [ReportsController],
  providers: [ReportsService],
})
export class ReportsModule {}