import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WelcomeDto } from '../../../../libs/todo-apiresource-lib/src/index';
import {WELCOME_RESOURCE_PATH} from "@todo/todo-apiresource-lib";
import { WelcomeServiceService } from './welcome/welcome-service.service';

@Component({
  selector: 'todo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent {
  title = 'todo-front';
  clicked = false;
  count = 0;
  tasks : any[] = [];
  dtos = this.welcomeService.findAll();
  constructor(private http: HttpClient, private welcomeService : WelcomeServiceService){
    http.get<WelcomeDto>('/api/').subscribe((res) => {
      console.log(res)
    })
    http.get(`/api${WELCOME_RESOURCE_PATH}`).subscribe((res) => {
      console.log(res)
    })
    http.get('/api/crud').subscribe((res : any) => {
      this.tasks = res
    })
  }
  hello(){
    this.count += 1
  }
}
