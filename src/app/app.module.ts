import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BuddyBackgroundComponent } from './buddy-background/buddy-background.component';
import { GamesComponent } from './games-page/games.component';
import { SevenFavoursComponent } from './games/seven-favours/seven-favours.component';
import { BuddyComponent } from './games/buddy/buddy.component';
import { SecurityRoomComponent } from './games/security-room/security-room.component';
import { SandboxComponent } from './sandbox/sandbox.component';
import { SlaughterLandsComponent } from './games/slaughter-lands/slaughter-lands.component';
import { CyberblazeComponent } from './games/cyberblaze/cyberblaze.component';
import { FumblingWizardComponent } from './games/fumbling-wizard/fumbling-wizard.component';
import { GoobersComponent } from './games/goobers/goobers.component';
import { BlogsComponent } from './blogs-page/blogs.component';
import { provideRouter } from '@angular/router';
import { BlogComponent } from './blog/blog.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BuddyBackgroundComponent,
    GamesComponent,
    BlogsComponent,
    BlogComponent,
    SevenFavoursComponent,
    BuddyComponent,
    SecurityRoomComponent,
    CyberblazeComponent,
    FumblingWizardComponent,
    SlaughterLandsComponent,
    GoobersComponent,
    SandboxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
