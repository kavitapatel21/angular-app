import { Component } from "@angular/core";

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styles: [`
        .online{
            color : white;
        }
    `]
})
export class ServerComponent{
    serverId: number = 10;
    serverStatus: string = 'offline';

    //creating method that return values
    getServerStatus(){
        return this.serverStatus;
    }

    constructor(){
        this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
        //console.log(this.serverStatus);
    }

    getcolor(){
        return this.serverStatus === "online" ?  "green" : "red";
    }
}