import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import { Socket } from 'ng-socket-io';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.css']
})
export class ChatRoomComponent implements OnInit {
  messages: any = [];
  message = '';
  nickname: any;
  alertMessage: any;
  constructor(private socket: Socket, private routes: ActivatedRoute) { }

  ngOnInit() {
    this.routes.params.subscribe((params: Params) => {
      this.nickname = params['nickname'];
    });
    this.getMessages().subscribe(message => {
      this.messages.push(message);
    });
    this.getUsers().subscribe(data => {
      const user = data['user'];
      if (data['event'] === 'left') {
        this.alertMessage = 'User left: ' + user;
      }else {
        this.alertMessage = 'User joined: ' + user;
      }
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

  sendMessage() {
    this.socket.emit('add-message', {text: this.message});
    this.message = '';
  }

  getUsers() {
    const observable: any = new Observable(observer => {
      this.socket.on('users-changed', data => {
        observer.next(data);
      });
    });
    return observable;
  }
}
