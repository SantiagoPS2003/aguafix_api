import 'dotenv/config';
import { DataSource } from 'typeorm';
import { envs } from './src/config/env';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: envs.DATABASE_HOST,
  port: envs.DATABASE_PORT,
  username: envs.DATABASE_USER,
  password: envs.DATABASE_PASSWORD,
  database: envs.DATABASE_NAME,
  entities: ['src/**/*.entity.ts'],
  migrations: ['src/db/migrations/*.ts'],
  synchronize: false,
  logging: true,
});