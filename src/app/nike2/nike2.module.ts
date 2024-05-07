import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Nike2PageRoutingModule } from './nike2-routing.module';

import { Nike2Page } from './nike2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Nike2PageRoutingModule
  ],
  declarations: [Nike2Page]
})
export class Nike2PageModule {}
