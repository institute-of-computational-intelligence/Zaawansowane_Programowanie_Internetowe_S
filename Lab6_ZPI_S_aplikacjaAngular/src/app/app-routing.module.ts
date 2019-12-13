import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListaAutorowComponent} from './lista-autorow-component/lista-autorow-component.component'
import {DodajAutoraComponent} from './dodaj-autora/dodaj-autora.component';
import { AutorComponent } from './autor/autor.component';

const routes: Routes = [
  {path:'', component:ListaAutorowComponent},
  {path:'dodaj', redirectTo:'autorzy/dodaj'},
  {path:'autorzy', component:ListaAutorowComponent, children:[
    {path:'dodaj', component:DodajAutoraComponent},
    {path:':id', component:AutorComponent, pathMatch:'full'},
  ]},
  {path:'**', component:ListaAutorowComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
