import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-sandbox',
  templateUrl: './sandbox.component.html',
  styleUrls: ['./sandbox.component.css']
})
export class SandboxComponent {
  constructor(private http: HttpClient){}

  pingMessage: string = "";

  ngOnInit(){
    this.pingSandbox();
  }
  pingSandbox(): void {
    const headerDict = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    }
    
    const requestOptions = {                                                                                                                                                                                 
      headers: new HttpHeaders(headerDict), 
    };

    this.http.get<any>(environment.API_URI + '/ping-sandbox', requestOptions).subscribe({
        next: data => {
            this.pingMessage = data.body;
        },
        error: error => {
            console.error('There was an error!', error);
        }
    })  
  }
}