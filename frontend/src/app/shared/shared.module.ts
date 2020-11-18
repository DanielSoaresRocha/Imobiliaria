import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { HouseService } from './services';

// Angular Material
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { CardHouseComponent } from './components';
import {MatSliderModule} from '@angular/material/slider';

// Slick Carrossel
import { SlickCarouselModule } from 'ngx-slick-carousel';

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
    MatCheckboxModule,
    MatSliderModule,
    SlickCarouselModule
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
    MatSliderModule,
    SlickCarouselModule
  ]
})
export class SharedModule {}
