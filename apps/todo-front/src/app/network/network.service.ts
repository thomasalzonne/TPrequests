import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface NetworkModel{
  message : string;
  path : string;
  method : string;
  status : number;
}
@Injectable({
  providedIn: 'root'
})
export class NetworkService {
  
  messages : NetworkModel[] = []
  $messages = new BehaviorSubject<NetworkModel[]>([])
  
  constructor() { 

  }

  addMessage(message : NetworkModel) {
    this.messages = [...this.messages, message]
    this.$messages.next([...this.$messages.value, message])
  }
}
