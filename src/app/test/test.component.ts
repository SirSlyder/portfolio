import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {
  constructor(private router: Router, private route: ActivatedRoute){}
  goToLink(link: string): void {
    this.router.navigate([link], {relativeTo: this.route});
  }
}
