import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PromiseComponent } from './includes/promise/promise.component';

const routes: Routes = [
  { path: 'promise', component: PromiseComponent },
  { path: '**', component: PromiseComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
