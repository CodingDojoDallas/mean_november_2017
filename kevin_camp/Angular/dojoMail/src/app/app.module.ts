import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { DojoMailComponent } from './dojo-mail/dojo-mail.component';




@NgModule({
  declarations: [
    AppComponent,
    DojoMailComponent
  ],
  imports: [
    BrowserModule,
		FormsModule,
		HttpModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
