import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TestComponent } from './test/test.component';
import { SevenFavoursComponent } from './games/seven-favours/seven-favours.component';
import { BuddyComponent } from './games/buddy/buddy.component';
import { SecurityRoomComponent } from './games/security-room/security-room.component';

const routes: Routes = [
  { 
    path: '',
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'test',
        component: TestComponent
      },
      {
        path: 'games',
        children: [
          {
            path: 'seven-favours',
            component: SevenFavoursComponent
          },
          {
            path: 'buddy',
            component: BuddyComponent
          },
          {
            path: 'security-room',
            component: SecurityRoomComponent
          }
        ]
      }
    ] 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
