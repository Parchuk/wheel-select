import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {DataPickerModule} from './data-picker/data-picker.module';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DataPickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
