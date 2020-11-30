import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared';
import { LoginScreenComponent } from './login-screen/login-screen.component';
import { LoginRoutingModule } from 'src/app/modules/login/login-routing.module';


@NgModule({
  declarations: [LoginScreenComponent],
  imports: [
    CommonModule,
    SharedModule,
    LoginRoutingModule 
  ]
})
export class LoginModule { }
