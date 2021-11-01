import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
@Component({
  selector: 'todo-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  @Input('input') input = '';
  @Output('output') output = new EventEmitter();
  constructor() {
  }

  ngOnInit(): void {

  }
  hello(){
    this.output.emit();
  }
}
