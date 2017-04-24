import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // template: `
  //   <app-server></app-server>
  //   <app-server></app-server>`,
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
    serverName = 'Server placeholder';
    serverCreated = false;
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
servers = ['TestServer', 'TestServer 2'];

  constructor() {
    setTimeout(
      ()=>{
        this.allowNewServer = true;
      },
    2000)
  }

  ngOnInit() { 
  }

  onCreateServer(){
    this.serverCreationStatus = 'Server created: ' + this.serverName;
    this.serverCreated = true;
    this.servers.push(this.serverName);
    // this.serverName = '';
  }

  onUpdateServerName(event: Event){
    this.serverName = (<HTMLInputElement> event.target).value;
  }
}