import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BeerDetailPage } from './beer-detail.page';


const routes: Routes = [
  {
    path: '',
    component: BeerDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BeerDetailPageRoutingModule {}
