import { Component } from '@angular/core';

@Component({
  selector: 'app-slaughter-lands',
  templateUrl: './slaughter-lands.component.html',
  styleUrls: ['./slaughter-lands.component.css']
})
export class SlaughterLandsComponent {
  navigateToUrl(url: string){
    window.open(url);
  }
}
