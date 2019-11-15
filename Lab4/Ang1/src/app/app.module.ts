import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { PierwszyKomponentComponent } from "./pierwszy-komponent/pierwszy-komponent.component";
import { ListaAutorowComponent } from "./lista-autorow/lista-autorow.component";

@NgModule({
  declarations: [
    AppComponent,
    PierwszyKomponentComponent,
    ListaAutorowComponent
  ],
  imports: [BrowserModule, AppRoutingModule, CommonModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
