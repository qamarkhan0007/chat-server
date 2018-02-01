import { Component, OnInit } from '@angular/core';
import { Socket } from 'ng-socket-io';
import { Router } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private socket: Socket, private router: Router, private _service: AppService) { }

  ngOnInit() {
  }
  login(form) {
    this._service.login(form).subscribe( res => {
      if (res.code !== 400 && res.data !== null) {
        this.joinChat(res.data.name);
      }else {
        this.router.navigate(['/login']);
      }
    });
  }

  joinChat(nickname) {
    this.socket.connect();
    this.socket.emit('set-nickname', nickname);
    this.router.navigate(['/chat-room/' + nickname]);
  }


}
