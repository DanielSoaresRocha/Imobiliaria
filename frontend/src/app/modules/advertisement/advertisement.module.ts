import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientComponent } from './client/client.component';
import { AdvertisementRoutingModule } from './advertisement-routing.module';
import { NavbarComponent } from './navbar/navbar.component';

import { SharedModule } from 'src/app/shared';
import { HouseDetailsComponent } from './house-details/house-details.component';

@NgModule({
  declarations: [ClientComponent, NavbarComponent, HouseDetailsComponent],
  imports: [CommonModule, AdvertisementRoutingModule, SharedModule],
  providers: [],
})
export class AdvertisementModule {}
