import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared';
import { SingUpComponent } from './sing-up/sing-up.component';
import { SingUpRoutingModule } from './singup-routing.module';


@NgModule({
  declarations: [SingUpComponent],
  imports: [
    SharedModule,
    CommonModule,
    SingUpRoutingModule
  ]
})
export class SingupModule { }
