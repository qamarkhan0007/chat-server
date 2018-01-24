import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatRoomComponent } from './chat-room/chat-room.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
},
{
    path: 'chat-room',
    component: ChatRoomComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  declarations: [],
  exports: [RouterModule]
})

export class AppRoutingModule { }
