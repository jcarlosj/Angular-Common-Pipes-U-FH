import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { registerLocaleData } from '@angular/common';
import localeEsCo from '@angular/common/locales/es-CO';

registerLocaleData( localeEsCo, 'es-CO');

/** Pipes */
import { CapitalizePipe } from './pipes/capitalizar.pipe';
import { CapitalizeLastLetter } from './pipes/capitalize-last-letter.pipe';

/** Components */
import { AppComponent } from './app.component';
import { SafeDomPipe } from './pipes/safe-dom.pipe';
import { ContrasenaPipe } from './pipes/contrasena.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CapitalizePipe,
    CapitalizeLastLetter,
    SafeDomPipe,
    ContrasenaPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [
      { provide: LOCALE_ID, useValue: 'es-CO' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
