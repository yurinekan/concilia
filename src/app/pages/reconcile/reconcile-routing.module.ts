import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReconcilePage } from './reconcile.page';

const routes: Routes = [
  {
    path: '',
    component: ReconcilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReconcilePageRoutingModule {}
