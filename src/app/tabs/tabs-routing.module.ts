import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: '',
        redirectTo: 'view-all',
        pathMatch: 'full'
      },
      {
        path: 'view-all',
        loadChildren: () => import('./view-all/view-all.module').then( m => m.ViewAllPageModule)
      },
      {
        path: 'add-new',
        loadChildren: () => import('./add-new/add-new.module').then( m => m.AddNewPageModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
