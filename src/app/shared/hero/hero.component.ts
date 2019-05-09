import { CasesService } from './../../core/cases.service';
import { Component, OnInit } from '@angular/core';
import { HeroService } from 'src/app/core/hero.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.sass']
})
export class HeroComponent implements OnInit {
  public loaded = false;
  public content;

  constructor(public heroService: HeroService) {
    
  }

  ngOnInit() {
    // this.content = this.heroService.fetch();
    this.heroService.fetch().subscribe(data=>{
      this.loaded = true;
      this.content = data;
    })
  }

}
