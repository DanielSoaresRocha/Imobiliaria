import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { HouseService } from './services';


import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { CardHouseComponent } from './components';

@NgModule({
  declarations: [
    CardHouseComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatCheckboxModule
  ],
  providers: [
    HouseService
  ],
  exports:[
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatCheckboxModule,
    CardHouseComponent
  ]
})
export class SharedModule {}
