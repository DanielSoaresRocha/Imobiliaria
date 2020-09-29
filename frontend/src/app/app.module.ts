import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module'

import { AppComponent } from './app.component'

import { WelcomeModule } from './modules/welcome'

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    WelcomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
