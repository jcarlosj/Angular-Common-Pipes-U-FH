import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Ana María Castro';
  aDigits = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ];
  PI = Math .PI;
  sells : number = 0.91128731;
}
