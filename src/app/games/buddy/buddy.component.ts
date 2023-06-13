import { Component } from '@angular/core';

@Component({
  selector: 'app-buddy',
  templateUrl: './buddy.component.html',
  styleUrls: ['./buddy.component.css']
})
export class BuddyComponent {
  navigateToUrl(url: string){
    window.open(url);
  }
}
