import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroService } from './hero.service';
import { HttpClientModule } from '@angular/common/http';
import { CasesService } from './cases.service';

@NgModule({
  declarations: [],
  imports: [ CommonModule, HttpClientModule ],
  providers: [HeroService, CasesService]
})
export class CoreModule { }
