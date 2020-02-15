import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform( value: any, ...args: any[]): any {

      if( args[ 0 ] ) {
          let asteriskString:string = '';

          for( let i = 0; i <= value .length; i++ ) {
                asteriskString += '*';
          }
          console .log( asteriskString );
          return asteriskString;
      }

    return value;
  }

}
