import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { HouseService } from './services';

// Angular Material
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {MatSliderModule} from '@angular/material/slider';

import { CardHouseComponent } from './components';
import { SliderPhotosComponent } from './components/slider-photos/slider-photos.component';

@NgModule({
  declarations: [
    CardHouseComponent,
    SliderPhotosComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatSliderModule
  ],
  providers: [
    HouseService
  ],
  exports:[
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatCheckboxModule,
    CardHouseComponent,
    SliderPhotosComponent,
    MatSliderModule
  ]
})
export class SharedModule {}
