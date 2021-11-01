import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'todo-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  formGroup = new FormGroup({
    email: new FormControl("email",[Validators.email])
  });

  constructor() { }

  ngOnInit(): void {
  }
  submit(){
    debugger
  }

}
