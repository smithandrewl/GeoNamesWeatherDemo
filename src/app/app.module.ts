import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { WeatherLookupComponent } from './weather-lookup/weather-lookup.component';

import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    WeatherLookupComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
