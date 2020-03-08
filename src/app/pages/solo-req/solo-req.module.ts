import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SoloReqPageRoutingModule } from './solo-req-routing.module';

import { SoloReqPage } from './solo-req.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SoloReqPageRoutingModule
  ],
  declarations: [SoloReqPage]
})
export class SoloReqPageModule {}
