import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({})
export class Todo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar') 
  title: string;

  @Column('text')
  comment: string;

  @Column({default: false})
  isCompleted: boolean;

}