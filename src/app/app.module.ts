import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageModule } from './landing-page/landing-page.module';
import { MenuComponent } from './menu/menu.component';
import { HeroComponent } from './hero/hero.component';


@NgModule({
  declarations: [AppComponent, HeroComponent],
  imports: [BrowserModule, AppRoutingModule, CoreModule, SharedModule, LandingPageModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
