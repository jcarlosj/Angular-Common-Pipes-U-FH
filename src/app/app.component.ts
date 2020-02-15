import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Ana María Castro';
  profession = 'CoMuniCaDorA SociAL Y periOdiSTa';
  aDigits = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ];
  PI = Math .PI;
  sells : number = 0.91128731;
  price : number = 12713.345;
  birthday : Date = new Date();

  hero = {
      name: {
          kryptonian: 'Kal-El',
          terrestrial: 'Clark Joseph Kent '
      },
      gender: 'decimales',
      race: 'Kryptonian',
      occupation: 'Daily Planet reporter',
      residence: 'Metropolis',
      nationality: 'United States',
      parents: {
          kryptonian: {
              mother: 'Lara Lor-Van',
              father: 'Jor-El'
          },
          terrestrial: {
              mother: 'Martha Kent',
              father: 'Jonathan Kent'
          }
      }
  }

  data = new Promise( ( resolve, reject ) => {
      setTimeout( () => resolve( 'Data esperada' ), 3500 );
  });
  aData = new Promise( ( resolve, reject ) => {
      setTimeout( () => resolve( [ 'Angular', 'Vue', 'React' ] ), 3500 );
  });

}
