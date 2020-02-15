import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { registerLocaleData } from '@angular/common';
import localeEsCo from '@angular/common/locales/es-CO';

registerLocaleData( localeEsCo, 'es-CO');

/** Pipes */
import { CapitalizePipe } from './pipes/capitalizar.pipe';

/** Components */
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    CapitalizePipe
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
