import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Choice2Page } from './choice2.page';

const routes: Routes = [
  {
    path: '',
    component: Choice2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Choice2PageRoutingModule {}
