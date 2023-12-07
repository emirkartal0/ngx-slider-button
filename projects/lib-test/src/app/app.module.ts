import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxSliderButtonModule } from 'projects/ngx-slider-button/src/public-api';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxSliderButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
