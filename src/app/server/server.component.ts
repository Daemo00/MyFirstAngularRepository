import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  bgColor = '\'background-color\': \'green\'';
  serverID: number = 10;
  serverStatus: string = 'offline';
  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  ngOnInit() { 
  }

  getServerStatus(){
    return this.serverStatus;
  }

  getColor(){
    return this.getServerStatus() === 'online'? 'green' : 'red';
  }
}
