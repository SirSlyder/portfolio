import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GamesComponent } from './games-page/games.component';
import { SevenFavoursComponent } from './games/seven-favours/seven-favours.component';
import { BuddyComponent } from './games/buddy/buddy.component';
import { SecurityRoomComponent } from './games/security-room/security-room.component';
import { SandboxComponent } from './sandbox/sandbox.component';

const routes: Routes = [
  { 
    path: '',
    children: [
      {
        path: '',
        title: "Leif Kemp's Portfolio",
        component: HomeComponent
      },
      {
        path: 'games-list',
        title: 'My Games',
        component: GamesComponent
      },
      {
        path: 'games',
        children: [
          {
            path: 'seven-favours',
            title: 'Seven Favors',
            component: SevenFavoursComponent
          },
          {
            path: 'buddy',
            title: 'Buddy',
            component: BuddyComponent
          },
          {
            path: 'security-room',
            title: 'The Security Room',
            component: SecurityRoomComponent
          }
        ]
      },
      {
        path: 'sandbox',
        title: 'Sandbox',
        component: SandboxComponent
      }
    ] 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
