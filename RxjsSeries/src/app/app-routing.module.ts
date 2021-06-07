import { IntervalComponent } from './observable/interval/interval.component';
import { FormEventComponent } from './observable/form-event/form-event.component';
import { ListComponent } from './observable/list/list.component';
import { ObservableComponent } from './observable/observable.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PromiseComponent } from './promise/promise.component';

const routes: Routes = [
  { path: 'promise', component: PromiseComponent },
  {
    path: 'observable', component: ObservableComponent, children: [
      { path: '', component: ListComponent },
      { path: 'formEvent', component: FormEventComponent },
      { path: 'interval', component: IntervalComponent },
    ]
  },
  { path: '**', component: PromiseComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
