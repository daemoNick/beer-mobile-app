import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { RatingModule } from 'ng-starrating';


import { ViewAllPageRoutingModule } from './view-all-routing.module';

import { ViewAllPage } from './view-all.page';
import { FilterComponentComponent } from 'src/app/components/filter-component/filter-component.component';
import { ServingFlavourFilterComponent } from 'src/app/components/serving-flavour-filter/serving-flavour-filter.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewAllPageRoutingModule,
    RatingModule
  ],
  declarations: [ViewAllPage, FilterComponentComponent, ServingFlavourFilterComponent],
  entryComponents: [FilterComponentComponent, ServingFlavourFilterComponent]
})
export class ViewAllPageModule {}
