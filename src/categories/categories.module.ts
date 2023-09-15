import { Module } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CategoriesController } from './categories.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Category } from './entities/category.entity';
import { Module as Script} from '../modules/entities/module.entity'
import { Author } from '../modules/entities/author.entity'
import { ModulesService } from '../modules/modules.service'

@Module({
  imports: [TypeOrmModule.forFeature([Category,Script, Author])],
  controllers: [CategoriesController],
  providers: [CategoriesService,ModulesService],
})
export class CategoriesModule {}
