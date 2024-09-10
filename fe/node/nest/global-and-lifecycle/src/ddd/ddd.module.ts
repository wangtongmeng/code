import {
  BeforeApplicationShutdown,
  Module,
  OnApplicationBootstrap,
  OnModuleDestroy,
  OnModuleInit,
} from '@nestjs/common';
import { DddService } from './ddd.service';
import { DddController } from './ddd.controller';

@Module({
  controllers: [DddController],
  providers: [DddService],
})
export class DddModule
  implements
    OnModuleInit,
    OnApplicationBootstrap,
    OnModuleDestroy,
    BeforeApplicationShutdown
{
  onModuleInit() {
    console.log('DddModule OnModuleInit');
  }
  onApplicationBootstrap() {
    console.log('DddModule onApplicationBoostrap');
  }
  onModuleDestroy() {
    console.log('DddModule OnModuleDestroy');
  }
  beforeApplicationShutdown(signal: string) {
    console.log('DddModule BeforeApplicationShutdown', signal);
  }
}
