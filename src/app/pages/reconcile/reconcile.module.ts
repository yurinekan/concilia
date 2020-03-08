import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReconcilePageRoutingModule } from './reconcile-routing.module';

import { ReconcilePage } from './reconcile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReconcilePageRoutingModule
  ],
  declarations: [ReconcilePage]
})
export class ReconcilePageModule {}
