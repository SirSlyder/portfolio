import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent {
  constructor(private router: Router, private route: ActivatedRoute){}
  goToLink(link: string): void {
    this.router.navigate([link], {relativeTo: this.route});
  }
}
