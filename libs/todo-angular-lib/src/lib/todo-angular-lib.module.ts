import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoComponent } from './todo/todo.component';
import { TodoWelcomeModule } from './todo-welcome/todo-welcome.module';

@NgModule({
  imports: [CommonModule,TodoWelcomeModule],
  declarations: [
    TodoComponent,
  ],
  exports : [
    TodoComponent,
    TodoWelcomeModule
  ]
})
export class TodoAngularLibModule {}
