import { Injectable } from '@nestjs/common';
import { WelcomeDto } from '../../../../libs/todo-apiresource-lib/src/index';

@Injectable()
export class AppService {
  getData(): WelcomeDto {
    return { message: 'Welcome to todo-nest!' };
  }
  bonjour(): WelcomeDto {
    return {message : 'BONJOUR'};
  }
}
