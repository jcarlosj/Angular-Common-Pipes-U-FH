import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizeLastLetter'
})
export class CapitalizeLastLetter implements PipeTransform {
  transform( value: string, ...args: boolean[] ): string {      // Forma 2: pasar cada parametro por separado posterior al valor
     args[ 0 ] = ( args .length === 0 ) ? true : false ;        // Asigna por defecto true

    console .log( 'value', value );
    console .log( 'args', args );

    let invertedPhrase = this .reverseString( value .toLowerCase() ),    // Invierte la frase
        aInvertedWords = invertedPhrase .split( ' ' );                   // Divide por cada espacio encontrado

    if( args[ 0 ] ) {
        for( let item in aInvertedWords ) {
            aInvertedWords[ item ] = aInvertedWords[ item ][ 0 ] .toUpperCase() + aInvertedWords[ item ] .substr( 1 );
        }
    }
    else {
        aInvertedWords[ 0 ] = aInvertedWords[ 0 ][ 0 ] .toUpperCase() + aInvertedWords[ 0 ] .substr( 1 );
    }

    invertedPhrase = aInvertedWords .join( ' ' );

    return this .reverseString( invertedPhrase );
  }

  private reverseString( value ) {
      let aSplitString = value .split( '' ),            // Step 1. Divide the string returns array of characters
          aReversePhrase = aSplitString .reverse(),     // Step 2. Use the reverse() method to reverse the new created array
          valueReverse = aReversePhrase .join( '' );    // Step 3. A character array returns string.

      return valueReverse;
  }
}
