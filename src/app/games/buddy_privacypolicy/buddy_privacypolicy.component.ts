import { Component } from '@angular/core';

@Component({
  selector: 'app-buddy-privacypolicy',
  templateUrl: './buddy_privacypolicy.component.html',
  styleUrls: ['./buddy_privacypolicy.component.css']
})
export class BuddyPrivacyPolicyComponent {
  navigateToUrl(url: string){
    window.open(url);
  }
}
