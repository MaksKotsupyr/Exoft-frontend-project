import { WorkingPlaceComponent } from './working-place/working-place.component';
import { LoginComponent } from './login/login.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MeetingRoomComponent } from './meeting-room/meeting-room.component';

const routes: Routes = [
  {path: 'working-place', component: WorkingPlaceComponent},
  {path: 'meeting-room', component: MeetingRoomComponent},
  {path: '', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
