import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppLocaleModule } from './app-locale.module';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    AppLocaleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
