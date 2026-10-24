import { Module } from '@nestjs/common';
import { StorageService } from './storage.service';

@Module({
  providers: [StorageService],
  exports: [StorageService], // Vital para que ReportsModule pueda usarlo
})
export class StorageModule {}