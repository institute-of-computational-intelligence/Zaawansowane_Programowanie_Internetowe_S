import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Zad1Component } from './screens/zad1/zad1.component';
import { Zadanie12Component } from './screens/zadanie12/zadanie12.component';
import { ShowDetailComponent } from './screens/show-detail/show-detail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material';
import { DeleteLinkComponent } from './screens/delete-link/delete-link.component';
import { Lab5Component } from './screens/lab5/lab5/lab5.component';
import { FormsModule } from '@angular/forms';
import { EditLinkComponent } from './screens/edit-link/edit-link.component';

@NgModule({
  declarations: [
    AppComponent,
    Zad1Component,
    Zadanie12Component,
    ShowDetailComponent,
    DeleteLinkComponent,
    Lab5Component,
    EditLinkComponent,
  ],
  entryComponents: [
    DeleteLinkComponent,
    EditLinkComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
