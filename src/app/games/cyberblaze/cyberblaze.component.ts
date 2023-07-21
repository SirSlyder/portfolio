import { Component } from '@angular/core';

@Component({
  selector: 'app-cyberblaze',
  templateUrl: './cyberblaze.component.html',
  styleUrls: ['./cyberblaze.component.css']
})
export class CyberblazeComponent {
  navigateToUrl(url: string){
    window.open(url);
  }
}
