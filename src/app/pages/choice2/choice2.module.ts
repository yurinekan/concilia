import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Choice2PageRoutingModule } from './choice2-routing.module';

import { Choice2Page } from './choice2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Choice2PageRoutingModule
  ],
  declarations: [Choice2Page]
})
export class Choice2PageModule {}
