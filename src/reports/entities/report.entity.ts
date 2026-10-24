import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('WATER_REPORT')
export class Report {
  @PrimaryGeneratedColumn('increment')
  id!: number;

  @Column({ type: 'varchar', length: 255 })
  address!: string;

  @Column({ type: 'text' })
  description!: string;

  @Column({ type: 'varchar', length: 50 })
  severity!: string; 

  @Column({ type: 'varchar', length: 50 })
  reporterPhone!: string;

  @Column({ type: 'varchar', length: 500, name: 'photo_url' }) // <-- Agregamos esta línea
  photoUrl!: string;
  
  @Column({ type: 'boolean', default: false })
  isResolved!: boolean;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt!: Date;
}