import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterHouseComponent } from './register-house'
import { AdvertiserRoutingModule } from './advertiser-routing.module';
import { NavbarAdvertiserComponent } from './navbar-advertiser';


@NgModule({
  declarations: [
    RegisterHouseComponent,
    NavbarAdvertiserComponent,
  ],
  imports: [
    CommonModule,
    AdvertiserRoutingModule
  ]
})
export class AdvertiserModule { }
