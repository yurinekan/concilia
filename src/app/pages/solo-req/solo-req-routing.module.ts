import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SoloReqPage } from './solo-req.page';

const routes: Routes = [
  {
    path: '',
    component: SoloReqPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SoloReqPageRoutingModule {}
