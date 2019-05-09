import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingPageComponent } from './landing-page.component';
import { SharedModule } from '../shared/shared.module';
// import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [LandingPageComponent],
  imports: [CommonModule, SharedModule]
})
export class LandingPageModule { }
