import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewAllPage } from './view-all.page';

const routes: Routes = [
  {
    path: '',
    component: ViewAllPage
  },
  {
    path: 'beer-detail',
    loadChildren: () => import('./beer-detail/beer-detail.module').then( m => m.BeerDetailPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewAllPageRoutingModule {}
