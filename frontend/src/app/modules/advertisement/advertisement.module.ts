import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientComponent } from './client/client.component';
import { AdvertisementRoutingModule } from './advertisement-routing.module';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [ClientComponent, NavbarComponent],
  imports: [CommonModule, AdvertisementRoutingModule],
  providers: [],
})
export class AdvertisementModule {}