import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Item {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string;

  @Column()
  dueDate: Date;

  @Column({ default: false })
  complete: boolean;
}
