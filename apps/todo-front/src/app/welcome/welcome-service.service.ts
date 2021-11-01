import { Injectable } from '@angular/core';
import { WelcomeDto } from '@todo/todo-apiresource-lib';

@Injectable()
export class WelcomeServiceService {

  constructor() { }
  findAll(): WelcomeDto[] {
    return [
      {
        message: 'Welcome'
      },
      {
        message: 'Bienvenue'
      },
      {
        message: 'Bienvenido'
      }
    ]
  }
}
