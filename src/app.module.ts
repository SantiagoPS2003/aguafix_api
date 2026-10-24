import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { envs } from './config/env';
import { ReportsModule } from './reports/reports.module';
import { EmailModule } from './email/email.module';
import { AuthModule } from './auth/auth.module';
import { StorageModule } from './storage/storage.module'; 

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: envs.DATABASE_HOST,
      port: envs.DATABASE_PORT,
      username: envs.DATABASE_USER,
      password: envs.DATABASE_PASSWORD,
      database: envs.DATABASE_NAME,
      autoLoadEntities: true,
      synchronize: true,
      logging: true,
    }),
    ReportsModule,
    EmailModule,
    AuthModule,
    StorageModule, // <-- 2. Agrégalo aquí
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}