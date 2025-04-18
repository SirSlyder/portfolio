import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-slaughter-lands',
  templateUrl: './slaughter-lands.component.html',
  styleUrls: ['../../styles/game_page.css']
})
export class SlaughterLandsComponent {
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
