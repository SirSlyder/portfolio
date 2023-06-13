import { Component } from '@angular/core';

@Component({
  selector: 'app-security-room',
  templateUrl: './security-room.component.html',
  styleUrls: ['./security-room.component.css']
})
export class SecurityRoomComponent {
  navigateToUrl(url: string){
    window.open(url);
  }
}
