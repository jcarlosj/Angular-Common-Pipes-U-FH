import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Pipe({
  name: 'safeDom'
})
export class SafeDomPipe implements PipeTransform {

    constructor( private _domSanitizer: DomSanitizer ) {}

    transform( keyVideo: any, ...args: any[] ): SafeResourceUrl {
        return this ._domSanitizer .bypassSecurityTrustResourceUrl( args[ 0 ] + keyVideo );
    }

}
