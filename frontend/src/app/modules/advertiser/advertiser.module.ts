import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterHouseComponent } from './register-house'
import { AdvertiserRoutingModule } from './advertiser-routing.module';
import { NavbarAdvertiserComponent } from './navbar-advertiser';
import { ProgressHouseComponent } from './register-house/progress-house';
import { AboutComponent } from './register-house/about/about.component';
import { PriceComponent } from './register-house/price/price.component';
import { PhotosComponent } from './register-house/photos/photos.component';
import { FinishComponent } from './register-house/finish/finish.component';
import { SharedModule } from 'src/app/shared';
import { AdvertsComponent } from './adverts/adverts.component';

@NgModule({
  declarations: [
    RegisterHouseComponent,
    NavbarAdvertiserComponent,
    ProgressHouseComponent,
    AboutComponent,
    PriceComponent,
    PhotosComponent,
    FinishComponent,
    AdvertsComponent,
  ],
  imports: [
    CommonModule,
    AdvertiserRoutingModule,
    SharedModule
  ]
})
export class AdvertiserModule { }
