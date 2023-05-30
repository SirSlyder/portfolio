import { Component } from '@angular/core';

@Component({
  selector: 'app-seven-favours',
  templateUrl: './seven-favours.component.html',
  styleUrls: ['./seven-favours.component.css']
})
export class SevenFavoursComponent {
  navigateToUrl(url: string){
    window.open(url);
  }
}
