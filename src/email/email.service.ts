import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';
import { envs } from '../config/env';

@Injectable()
export class EmailService {
  private transporter = nodemailer.createTransport({
    host: envs.MAIL_HOST,
    port: envs.MAIL_PORT,
    secure: envs.MAIL_PORT === 465,
    auth: {
      user: envs.MAIL_USER,
      pass: envs.MAIL_PASS,
    },
  });


  // prueba para el video.
  async sendEmail(to: string, subject: string, html: string): Promise<void> {
    await this.transporter.sendMail({
      from: envs.MAIL_FROM,
      to,
      subject,
      html,
    });
  }
}