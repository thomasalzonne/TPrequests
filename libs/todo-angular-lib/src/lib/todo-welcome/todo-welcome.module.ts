import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoWelcomeComponent } from './todo-welcome/todo-welcome.component';
import { TodoWelcomeListComponent } from './todo-welcome-list/todo-welcome-list.component';



@NgModule({
  declarations: [
    TodoWelcomeComponent,
    TodoWelcomeListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TodoWelcomeComponent
  ]
})
export class TodoWelcomeModule { }
