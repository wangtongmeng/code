import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AaaController } from './aaa.controller';

@Module({
  imports: [],
  controllers: [AppController, AaaController],
  providers: [AppService],
})
export class AppModule {}
