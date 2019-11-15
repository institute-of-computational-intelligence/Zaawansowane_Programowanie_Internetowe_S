import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PierwszyKomponentComponent } from './pierwszy-komponent/pierwszy-komponent.component';
import { ListaAutorowComponent } from './lista-autorow/lista-autorow.component';
import { WyszukajComponent } from './wyszukaj/wyszukaj.component';

@NgModule({
  declarations: [
    AppComponent,
    PierwszyKomponentComponent,
    ListaAutorowComponent,
    WyszukajComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
