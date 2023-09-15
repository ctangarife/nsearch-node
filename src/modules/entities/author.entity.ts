import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Module } from './module.entity';

@Entity('author',{schema:'nmodules'})
export class Author {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column({name: 'created_at'})
  createdAt: Date
  @Column({name: 'updated_at'})
  updatedAt: Date
  @OneToMany(type => Module, module => module.author)
  modules: Module[];
}
