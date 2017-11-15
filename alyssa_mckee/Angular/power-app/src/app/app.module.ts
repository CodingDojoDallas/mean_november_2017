import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PowerComponent } from './power/power.component';
import { HumanComponent } from './power/human/human.component';
import { SaiyanComponent } from './power/saiyan/saiyan.component';
import { SsjComponent } from './power/ssj/ssj.component';
import { Ssj2Component } from './power/ssj2/ssj2.component';
import { Ssj3Component } from './power/ssj3/ssj3.component';
import { Ssj4Component } from './power/ssj4/ssj4.component';


@NgModule({
  declarations: [
    AppComponent,
    PowerComponent,
    HumanComponent,
    SaiyanComponent,
    SsjComponent,
    Ssj2Component,
    Ssj3Component,
    Ssj4Component
  ],
  imports: [
    BrowserModule,
	FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
