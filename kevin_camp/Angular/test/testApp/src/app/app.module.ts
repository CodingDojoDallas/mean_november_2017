import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FormsMopdule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { TestComponentComponent } from './test-component/test-component.component';


@NgModule({
  declarations: [
    AppComponent,
    TestComponentComponent
  ],
  imports: [
    BrowserModule,
		FormsModule,
		HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
