import 'dotenv/config';
import * as env from 'env-var';

export const envs = {
  PORT: env.get('PORT').required().asPortNumber(),
  DATABASE_HOST: env.get('DATABASE_HOST').required().asString(),
  DATABASE_PORT: env.get('DATABASE_PORT').required().asPortNumber(),
  DATABASE_USER: env.get('DATABASE_USER').required().asString(),
  DATABASE_PASSWORD: env.get('DATABASE_PASSWORD').required().asString(),
  DATABASE_NAME: env.get('DATABASE_NAME').required().asString(),
  MAIL_HOST: env.get('MAIL_HOST').required().asString(),
  MAIL_PORT: env.get('MAIL_PORT').required().asPortNumber(),
  MAIL_USER: env.get('MAIL_USER').required().asString(),
  MAIL_PASS: env.get('MAIL_PASS').required().asString(),
  MAIL_FROM: env.get('MAIL_FROM').required().asString(),
};