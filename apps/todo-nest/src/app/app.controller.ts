import { Controller, Get } from '@nestjs/common';
import { WelcomeDto, WELCOME_RESOURCE_PATH } from '../../../../libs/todo-apiresource-lib/src/index';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getData(): WelcomeDto {
    return this.appService.getData();
  }
  @Get(WELCOME_RESOURCE_PATH)
  bonjour() {
    return this.appService.bonjour();
  }
}
