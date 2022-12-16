import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgFilterModule} from "../../../ng-filter/src/lib/ng-filter.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgFilterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
