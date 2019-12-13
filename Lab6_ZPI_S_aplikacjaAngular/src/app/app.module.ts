import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaAutorowComponent } from './lista-autorow-component/lista-autorow-component.component';
import { WyszukajComponent } from './wyszukaj/wyszukaj.component';
import { AutorComponent } from './autor/autor.component';
import { DodajAutoraComponent } from './dodaj-autora/dodaj-autora.component';
import { AutorService } from './uslugi/autor.service';

@NgModule({
  declarations: [
    AppComponent,
    ListaAutorowComponent,
    WyszukajComponent,
    AutorComponent,
    DodajAutoraComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [AutorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
