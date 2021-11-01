import { Component, OnInit } from '@angular/core';
import { NetworkService } from '../network.service';

@Component({
  selector: 'todo-network',
  templateUrl: './network.component.html',
  styleUrls: ['./network.component.css']
})
export class NetworkComponent implements OnInit {
  displayedColumns: string[] = ['message', 'path', 'method', 'status'];
  data = this.networkService.messages
  $data = this.networkService.$messages
  constructor(private networkService: NetworkService) {

  }

  ngOnInit(): void {
  }

}
