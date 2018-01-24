import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import { Socket } from 'ng-socket-io';

@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.css']
})
export class ChatRoomComponent implements OnInit {
    messages: any = [];
  constructor(private socket: Socket) { }

  ngOnInit() {
      this.getMessages().subscribe(message => {
          this.messages.push(message);
          console.log('>>>>>messges for get message', this.messages);
      });
  }

getMessages() {
    const observable: any = new Observable(observer => {
        this.socket.on('message', data => {
            observer.next(data);
        });
    });
    return observable;
}
}
