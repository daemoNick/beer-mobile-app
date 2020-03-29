import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { RatingModule } from 'ng-starrating';


import { BeerDetailPageRoutingModule } from './beer-detail-routing.module';

import { BeerDetailPage } from './beer-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BeerDetailPageRoutingModule,
    RatingModule
  ],
  declarations: [BeerDetailPage]
})
export class BeerDetailPageModule {}
