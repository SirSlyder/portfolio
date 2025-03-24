import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-buddy-privacypolicy',
  templateUrl: './buddy_privacypolicy.component.html',
  styleUrls: ['../../styles/game_page.css']
})
export class BuddyPrivacyPolicyComponent {
  constructor(private router: Router) { }
    
  ngOnInit() {
    this.router.events.subscribe((event) => {
        if (!(event instanceof NavigationEnd)) {
            return;
        }
        window.scrollTo(0, 0)
    });
  }

  navigateToUrl(url: string){
    window.open(url);
  }
}
