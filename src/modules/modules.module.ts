import { Module } from '@nestjs/common';
import { ModulesService } from './modules.service';
import { ModulesController } from './modules.controller';
import { Module as Script} from './entities/module.entity'
import { Author } from './entities/author.entity';
import { Category } from '../categories/entities/category.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Script,Author,Category])],
  controllers: [ModulesController],
  providers: [ModulesService]
})
export class ModulesModule {}
