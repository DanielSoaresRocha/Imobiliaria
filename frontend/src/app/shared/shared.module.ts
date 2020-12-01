import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AdvertiserService, HouseService } from './services';
import { ReactiveFormsModule } from '@angular/forms';

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
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatSliderModule
  ],
  providers: [
    HouseService,
    AdvertiserService
  ],
  exports:[
    ReactiveFormsModule,
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
