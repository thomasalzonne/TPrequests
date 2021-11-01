import { Component, OnInit } from '@angular/core';
import { WelcomeDto } from '../../../../../todo-apiresource-lib/src';
@Component({
  selector: 'todo-todo-welcome',
  templateUrl: './todo-welcome.component.html',
  styleUrls: ['./todo-welcome.component.scss']
})
export class TodoWelcomeComponent implements OnInit {
  welcomes: WelcomeDto[] = [{message : 'Salut 1'}, {message : 'Salut 2'}, {message : 'Salut 3'}]
  constructor() { }

  ngOnInit(): void {
  }

}
