import { Injectable } from '@nestjs/common';
import { Module } from './entities/module.entity';
import { Author } from './entities/author.entity';
import { Category } from '../categories/entities/category.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ModulesService {
  constructor(
    @InjectRepository(Module)
    private readonly moduleRepository: Repository<Module>,
    @InjectRepository(Author)
    private readonly authorRepository: Repository<Author>,
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>,
  ) {}

  async findOne(id: number) {
    const module = await this.moduleRepository.findOne({
      where: { id },
      relations: ['categories', 'author'],
      loadRelationIds: true,
    });    
    module.author = await this.findAuthor(module.author.id);
    module.categories = await this.findManyCategory(module.categories);
    return module
  }
  async findMany(id: Module[]) {
    const modules = await this.moduleRepository
      .createQueryBuilder('script')
      .select('id,name')
      .where(`id IN (${id})`)
      .getRawMany();
    return modules;
  }

  async findAuthor(id: number) {
    return this.authorRepository.findOne({
      where: { id },
    });
  }

  async findManyCategory(id: Category[]) {
    const categories = await this.categoryRepository
      .createQueryBuilder('category')
      .select('id,name')
      .where(`id IN (${id})`)
      .getRawMany();
    return categories;
  }
}
