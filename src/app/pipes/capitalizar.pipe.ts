import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizarCadena'
})
export class CapitalizePipe implements PipeTransform {
  transform( value: string, all: boolean = true ): string {      // Froma 1: pasar cada parametro por separado posterior al valor

    console .log( 'value', value );
    console .log( 'args', all );

    let words = value .toLowerCase() .split( ' ' );

    if( all ) {
        for( let item in words ) {
            words[ item ] = words[ item ][ 0 ] .toUpperCase() + words[ item ] .substr( 1 );
        }
    }
    else {
        words[ 0 ] = words[ 0 ][ 0 ] .toUpperCase() + words[ 0 ] .substr( 1 );
    }

    return words .join( ' ' );
  }
}
