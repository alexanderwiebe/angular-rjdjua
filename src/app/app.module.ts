import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms'; // <-- #1 import module

import { AppComponent } from './app.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
// add JavaScript imports
import { HeroListComponent } from './hero-list/hero-list.component';
import { HeroService } from './hero.service';
import { ToPercentDirective } from './cva';

@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent,
    ToPercentDirective,
    HeroListComponent, // <--declare HeroListComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule, // <-- #2 add to @NgModule imports
  ],
  // export for the DemoModule
  // ...
  exports: [
    AppComponent,
    HeroDetailComponent,
    HeroListComponent, // <-- export HeroListComponent
  ],
  providers: [HeroService], // <-- provide HeroService
  bootstrap: [AppComponent],
})
export class AppModule {}

/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
