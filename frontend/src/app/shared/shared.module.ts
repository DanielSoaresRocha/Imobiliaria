import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ListAdvertisementService } from './services';
import { FormsModule } from '@angular/forms';

import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCheckboxModule} from '@angular/material/checkbox';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatCheckboxModule
  ],
  providers: [
    ListAdvertisementService
  ],
  exports:[
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatCheckboxModule
  ]
})
export class SharedModule {}
