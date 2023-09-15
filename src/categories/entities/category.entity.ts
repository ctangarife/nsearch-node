import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Module } from 'src/modules/entities/module.entity';

@Entity('category',{schema:'nmodules'})
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  url: string;
 
  @Column({name: 'created_at'})
  createdAt: Date
  @Column({name: 'updated_at'})
  updatedAt: Date
  @ManyToMany(() => Module)
  @JoinTable({
    name: 'script_x_category',
    schema: 'nmodules',
    joinColumn: {
      name: 'id_script',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'id_category',
      referencedColumnName: 'id',
    },
  })
  modules: Module[];
}
