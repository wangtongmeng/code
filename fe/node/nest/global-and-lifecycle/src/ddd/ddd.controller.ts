import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  OnModuleInit,
  OnApplicationBootstrap,
  OnModuleDestroy,
  BeforeApplicationShutdown,
} from '@nestjs/common';
import { DddService } from './ddd.service';
import { CreateDddDto } from './dto/create-ddd.dto';
import { UpdateDddDto } from './dto/update-ddd.dto';

@Controller('ddd')
export class DddController
  implements
    OnModuleInit,
    OnApplicationBootstrap,
    OnModuleDestroy,
    BeforeApplicationShutdown
{
  constructor(private readonly dddService: DddService) {}

  onModuleInit() {
    console.log('DddController OnModuleInit');
  }
  onApplicationBootstrap() {
    console.log('DddController OnApplicationBootstrap');
  }

  onModuleDestroy() {
    console.log('DddController OnModuleDestroy');
  }
  beforeApplicationShutdown(signal: string) {
    console.log('DddController BeforeApplicationShutdown', signal);
  }

  @Post()
  create(@Body() createDddDto: CreateDddDto) {
    return this.dddService.create(createDddDto);
  }

  @Get()
  findAll() {
    return this.dddService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.dddService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDddDto: UpdateDddDto) {
    return this.dddService.update(+id, updateDddDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.dddService.remove(+id);
  }
}
