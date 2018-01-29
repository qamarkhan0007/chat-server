import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SocketIoModule, SocketIoConfig} from 'ng-socket-io';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './/app-routing.module';
import { ChatRoomComponent } from './chat-room/chat-room.component';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { AppService } from './app.service';
import { HttpModule } from '@angular/http';
const config: SocketIoConfig = { url: 'http://localhost:3000', options: {}};


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ChatRoomComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    SocketIoModule.forRoot(config),
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
