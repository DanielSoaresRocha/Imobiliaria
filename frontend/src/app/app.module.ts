import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module'

import { AppComponent } from './app.component'

import { WelcomeModule } from './modules/welcome'
import { AdvertisementModule } from './modules/advertisement'

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    WelcomeModule,
    AdvertisementModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
