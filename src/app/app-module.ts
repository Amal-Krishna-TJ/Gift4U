import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Broke } from './broke/broke';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Home } from './home/home';
import { Yes } from './yes/yes';
import { Bad } from './bad/bad';
import { Yes2x } from './yes2x/yes2x';

@NgModule({
  declarations: [
    App,
    Broke,
    Home,
    Yes,
    Bad,
    Yes2x
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterLink,
    RouterOutlet
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
