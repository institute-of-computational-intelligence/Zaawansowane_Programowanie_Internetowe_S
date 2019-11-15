import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Zad1Component } from './screens/zad1/zad1.component';
import { Zadanie12Component } from './screens/zadanie12/zadanie12.component';
import { ShowDetailComponent } from './screens/show-detail/show-detail.component';
import { Lab5Component } from './screens/lab5/lab5/lab5.component';


const routes: Routes = [
  {
    path: 'zad1',
    component: Zad1Component
  },
  {
    path:'zad1/:id',
    component: ShowDetailComponent
  },
  {
    path: 'zad12',
    component: Zadanie12Component
  },
  {
    path: 'lab5',
    component: Lab5Component,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
