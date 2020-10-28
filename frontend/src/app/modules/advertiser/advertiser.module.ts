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
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';


@NgModule({
  declarations: [
    RegisterHouseComponent,
    NavbarAdvertiserComponent,
    ProgressHouseComponent,
    AboutComponent,
    PriceComponent,
    PhotosComponent,
    FinishComponent,
  ],
  imports: [
    CommonModule,
    AdvertiserRoutingModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class AdvertiserModule { }
