import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BuddyBackgroundComponent } from './buddy-background/buddy-background.component';
import { TestComponent } from './test/test.component';
import { SevenFavoursComponent } from './games/seven-favours/seven-favours.component';
import { BuddyComponent } from './games/buddy/buddy.component';
import { SecurityRoomComponent } from './games/security-room/security-room.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BuddyBackgroundComponent,
    TestComponent,
    SevenFavoursComponent,
    BuddyComponent,
    SecurityRoomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
