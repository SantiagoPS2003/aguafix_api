import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReportsController } from './reports.controller';
import { ReportsService } from './reports.service';
import { Report } from './entities/report.entity';
import { EmailModule } from '../email/email.module';
import { StorageModule } from '../storage/storage.module'; // <-- 1. Importar el StorageModule

@Module({
  imports: [
    TypeOrmModule.forFeature([Report]),
    EmailModule, // Necesario para que el ReportsService pueda usar el EmailService
    StorageModule, // <-- 2. Añadirlo a los imports para que funcione el StorageService
  ],
  controllers: [ReportsController],
  providers: [ReportsService],
})
export class ReportsModule {}