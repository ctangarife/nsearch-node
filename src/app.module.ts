import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoriesModule } from './categories/categories.module';
import { ModulesModule } from './modules/modules.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import typeOrmConfig from './helpers/typeorm.config';

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig),CategoriesModule, ModulesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
