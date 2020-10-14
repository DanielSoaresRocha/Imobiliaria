import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterHouseComponent } from './register-house'
import { AdvertiserRoutingModule } from './advertiser-routing.module';
import { NavbarAdvertiserComponent } from './navbar-advertiser';
import { ProgressHouseComponent } from './register-house/progress-house';


@NgModule({
  declarations: [
    RegisterHouseComponent,
    NavbarAdvertiserComponent,
    ProgressHouseComponent,
  ],
  imports: [
    CommonModule,
    AdvertiserRoutingModule
  ]
})
export class AdvertiserModule { }
