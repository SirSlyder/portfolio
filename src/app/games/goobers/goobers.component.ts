import { Component } from '@angular/core';

@Component({
  selector: 'app-goobers',
  templateUrl: './goobers.component.html',
  styleUrls: ['./goobers.component.css']
})
export class GoobersComponent {
  navigateToUrl(url: string){
    window.open(url);
  }
}
