import { Module } from '@nestjs/common';
import { CrudModule } from '../crud/crud.module';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [CrudModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
