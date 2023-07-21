import { Component } from '@angular/core';

@Component({
  selector: 'app-fumbling-wizard',
  templateUrl: './fumbling-wizard.component.html',
  styleUrls: ['./fumbling-wizard.component.css']
})
export class FumblingWizardComponent {
  navigateToUrl(url: string){
    window.open(url);
  }
}
