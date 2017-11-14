import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { RetroBarcodeComponent } from './retro-barcode/retro-barcode.component';


@NgModule({
  declarations: [
    AppComponent,
    RetroBarcodeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
