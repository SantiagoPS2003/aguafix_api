import { CreateReportDto } from '../dtos/create-report.dto';

export function generateReportTemplate(dto: CreateReportDto): string {
  return `
    <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
      <h2 style="color: #0284c7;">Nuevo Reporte de Fuga de Agua Registrado</h2>
      <p>Se ha recibido un nuevo reporte en la vía pública con los siguientes detalles:</p>
      <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
        <tr style="background-color: #f8fafc;">
          <td style="padding: 10px; border: 1px solid #cbd5e1; font-weight: bold;">Dirección:</td>
          <td style="padding: 10px; border: 1px solid #cbd5e1;">${dto.address}</td>
        </tr>
        <tr>
          <td style="padding: 10px; border: 1px solid #cbd5e1; font-weight: bold;">Descripción:</td>
          <td style="padding: 10px; border: 1px solid #cbd5e1;">${dto.description}</td>
        </tr>
        <tr style="background-color: #f8fafc;">
          <td style="padding: 10px; border: 1px solid #cbd5e1; font-weight: bold;">Severidad:</td>
          <td style="padding: 10px; border: 1px solid #cbd5e1; text-transform: uppercase;">${dto.severity}</td>
        </tr>
        <tr>
          <td style="padding: 10px; border: 1px solid #cbd5e1; font-weight: bold;">Teléfono de Contacto:</td>
          <td style="padding: 10px; border: 1px solid #cbd5e1;">${dto.reporterPhone}</td>
        </tr>
      </table>
      <p style="margin-top: 20px; font-size: 12px; color: #64748b;">Este es un mensaje automático generado por AguaFix API.</p>
    </div>
  `;
}