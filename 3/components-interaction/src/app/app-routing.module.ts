import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewCmpComponent } from './new-cmp/new-cmp.component';

const routes: Routes = [
  { path: 'cmp', component: NewCmpComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
