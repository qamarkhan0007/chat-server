import { Component, OnInit } from '@angular/core';
import { Socket } from 'ng-socket-io';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  nickname = '';

  constructor(private socket: Socket, private router: Router) { }

  ngOnInit() {
  }
  joinChat() {
    this.socket.connect();
    this.socket.emit('set-nickname', this.nickname);
    this.router.navigate(['/chat-room']);
  }


}
