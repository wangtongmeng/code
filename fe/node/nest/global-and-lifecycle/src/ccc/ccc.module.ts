import {
  BeforeApplicationShutdown,
  Module,
  OnApplicationBootstrap,
  OnModuleDestroy,
  OnModuleInit,
} from '@nestjs/common';
import { CccService } from './ccc.service';
import { CccController } from './ccc.controller';

@Module({
  controllers: [CccController],
  providers: [CccService],
})
export class CccModule
  implements
    OnModuleInit,
    OnApplicationBootstrap,
    OnModuleDestroy,
    BeforeApplicationShutdown
{
  onModuleInit() {
    console.log('CccModule OnModuleInit');
  }
  onApplicationBootstrap() {
    console.log('CccModule OnApplicationBootstrap');
  }
  onModuleDestroy() {
    console.log('CccModule OnModuleDestroy');
  }
  beforeApplicationShutdown(signal: string) {
    console.log('CccModule BeforeApplicationShutdown', signal);
  }
}
