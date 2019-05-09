import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';
import { HeroComponent } from './hero/hero.component';
import { CasesComponent } from './cases/cases.component';

@NgModule({
  declarations: [MenuComponent, HeroComponent, CasesComponent],
  imports: [CommonModule, AppRoutingModule],
  exports: [CommonModule, MenuComponent, HeroComponent, CasesComponent]
})
export class SharedModule {}
