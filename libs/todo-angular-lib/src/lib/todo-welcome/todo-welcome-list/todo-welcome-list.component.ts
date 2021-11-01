import { Component, Input, OnInit } from '@angular/core';
import { WelcomeDto } from '@todo/todo-apiresource-lib';

@Component({
  selector: 'todo-todo-welcome-list',
  templateUrl: './todo-welcome-list.component.html',
  styleUrls: ['./todo-welcome-list.component.scss']
})
export class TodoWelcomeListComponent implements OnInit {
  @Input() welcome: WelcomeDto | null = null
  constructor() { }

  ngOnInit(): void {
  }

}
