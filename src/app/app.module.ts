import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule } from '@angular/forms';
import { NgxPopper } from 'angular-popper';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { FilterOnePipe } from './filter-one.pipe';
import { FilterTwoPipe } from './filter-two.pipe';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    FilterOnePipe,
    FilterTwoPipe
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxPopper
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
