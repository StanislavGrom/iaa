import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { FooBarService } from './service/foo-bar.service';

import { AppComponent } from './app.component';
import { FooComponent } from './foobar/foo/foo.component';
import { BarComponent } from './foobar/bar/bar.component';

@NgModule({
  declarations: [
    AppComponent,
    FooComponent,
    BarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [FooBarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
