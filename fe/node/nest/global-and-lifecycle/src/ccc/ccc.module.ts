import { Module, OnApplicationBootstrap, OnModuleInit } from '@nestjs/common';
import { CccService } from './ccc.service';
import { CccController } from './ccc.controller';

@Module({
  controllers: [CccController],
  providers: [CccService],
})
export class CccModule implements OnModuleInit, OnApplicationBootstrap {
  onModuleInit() {
    console.log('CccModule OnModuleInit');
  }
  onApplicationBootstrap() {
    console.log('CccModule OnApplicationBootstrap');
  }
}
