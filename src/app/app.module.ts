import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule,Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PassengerDataComponent } from './passenger-data/passenger-data.component';
import { UserInfoComponent } from './user-info/user-info.component';
const myroute:Routes=[
  {
    path:'',
    component:PassengerDataComponent
  },
  {
    path:'u',
    component:UserInfoComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    PassengerDataComponent,
    UserInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myroute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
