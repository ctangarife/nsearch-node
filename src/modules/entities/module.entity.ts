import { Category } from 'src/categories/entities/category.entity';
import { Author } from './author.entity';
import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('script', { schema: 'nmodules' })
export class Module {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  url: string;

  @Column()
  url_download: string;
  @ManyToMany((type) => Category, (category) => category.name, { eager: true })
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
  categories:  Category[];

  @Column({ name: 'created_at' })
  createdAt: Date;
  @Column({ name: 'updated_at' })
  updatedAt: Date;
  @ManyToOne((type) => Author, (author) => author.name, { eager: true })
  @JoinColumn({ name: 'id_author', referencedColumnName: 'id' })
  author: Author;
}
