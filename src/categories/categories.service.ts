import { Injectable } from '@nestjs/common';
import { Category } from './entities/category.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ModulesService } from '../modules/modules.service';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>,
    private readonly modulesService: ModulesService,
  ) {}

  findAll() {
    return this.categoryRepository.find();
  }

  async findOne(id: number) {
    const category = await this.categoryRepository.findOne({
      where: { id },
      loadRelationIds: true,
    });

    category.modules = await this.modulesService.findMany(
      category.modules,
    );

    return category;
  }

  async findMany(id: Category[]) {
    const modules = await this.categoryRepository
     .createQueryBuilder('category')
     .select('id,name')
     .where(`id IN (${id})`)
     .getRawMany();
     return modules
 }
}
