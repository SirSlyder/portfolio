import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GamesComponent } from './games-page/games.component';
import { SevenFavoursComponent } from './games/seven-favours/seven-favours.component';
import { BuddyComponent } from './games/buddy/buddy.component';
import { SecurityRoomComponent } from './games/security-room/security-room.component';
import { SandboxComponent } from './sandbox/sandbox.component';
import { SlaughterLandsComponent } from './games/slaughter-lands/slaughter-lands.component';
import { CyberblazeComponent } from './games/cyberblaze/cyberblaze.component';
import { FumblingWizardComponent } from './games/fumbling-wizard/fumbling-wizard.component';

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
          },
          {
            path: 'slaughter-lands',
            title: 'Slaughter Lands',
            component: SlaughterLandsComponent
          },
          {
            path: 'cyberblaze',
            title: 'Cyberblaze',
            component: CyberblazeComponent
          },
          {
            path: 'fumbling-wizard',
            title: 'The Fumbling Wizard',
            component: FumblingWizardComponent
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
