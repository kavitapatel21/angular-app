import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
  allowNewServer = false;
  serverCreationStatus = "Server not created";
  serverName = "plutus";
  serverCreated = false;
  servers = ['Testserver','Testserver 1'];

  constructor(){
    setTimeout(()=>{
      this.allowNewServer = true;
    },5000)
  }

  onCreateServer(){
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = "Server is Created! Name is " + this.serverName;
  }

  onServerUpdateName(event: any){
    console.log(event);
    this.serverName = event.target.value;
  }
}

/**import { Component } from '@angular/core';

@Component({
  //selector: 'app-servers',
  //selector: '[app-servers]',
  selector: '.app-servers',
  template: `<app-server></app-server>`,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {

}*/
