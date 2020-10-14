import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListAdvertisementService } from './shared/services';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/welcome',
    pathMatch: 'full',
  },
  {
    path: 'welcome',
    loadChildren: () =>
      import('./modules/welcome').then((m) => m.WelcomeModule),
  },
  {
    path: 'advertisement',
    loadChildren: () =>
      import('./modules/advertisement').then((m) => m.AdvertisementModule),
  },
  {
    path: 'advertiser',
    loadChildren: () =>
      import('./modules/advertiser').then((m) => m.AdvertiserModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
