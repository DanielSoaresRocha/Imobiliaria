import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { WelcomeModule } from './modules/welcome';
import { AdvertisementModule } from './modules/advertisement';
import { AdvertiserModule } from './modules/advertiser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Error404Component } from './pages/error404/error404.component';

@NgModule({
  declarations: [
    AppComponent,
    Error404Component,
    Error404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    WelcomeModule,
    AdvertisementModule,
    AdvertiserModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
