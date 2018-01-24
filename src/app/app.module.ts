import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SocketIoModule, SocketIoConfig} from 'ng-socket-io';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './/app-routing.module';
import { ChatRoomComponent } from './chat-room/chat-room.component';
const config: SocketIoConfig = { url: 'localhost://3000', options: {}};


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ChatRoomComponent
  ],
  imports: [
    BrowserModule,
    SocketIoModule.forRoot(config),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
