import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ModulesService } from './modules.service';
import { CreateModuleDto } from './dto/create-module.dto';
import { UpdateModuleDto } from './dto/update-module.dto';

@Controller('api/modules')
export class ModulesController {
  constructor(private readonly modulesService: ModulesService) {}

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.modulesService.findOne(+id);
  }

}
