import {
  BeforeApplicationShutdown,
  Injectable,
  OnApplicationBootstrap,
  OnModuleDestroy,
  OnModuleInit,
} from '@nestjs/common';
import { CreateDddDto } from './dto/create-ddd.dto';
import { UpdateDddDto } from './dto/update-ddd.dto';

@Injectable()
export class DddService
  implements
    OnModuleInit,
    OnApplicationBootstrap,
    OnModuleDestroy,
    BeforeApplicationShutdown
{
  create(createDddDto: CreateDddDto) {
    return 'This action adds a new ddd';
  }

  findAll() {
    return `This action returns all ddd`;
  }

  findOne(id: number) {
    return `This action returns a #${id} ddd`;
  }

  update(id: number, updateDddDto: UpdateDddDto) {
    return `This action updates a #${id} ddd`;
  }

  remove(id: number) {
    return `This action removes a #${id} ddd`;
  }

  onModuleInit() {
    console.log('DddService OnModuleInit');
  }
  onApplicationBootstrap() {
    console.log('DddService onApplicationBootstrap');
  }
  onModuleDestroy() {
    console.log('DddService OnModuleDestroy');
  }
  beforeApplicationShutdown(signal: string) {
    console.log('DddService BeforeApplicationShutdown', signal);
  }
}
