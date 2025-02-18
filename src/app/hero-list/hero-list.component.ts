import { Component, OnInit } from '@angular/core';
import { Observable }        from 'rxjs';
import { finalize } from 'rxjs/operators';

import { Hero }        from '../data-model';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {
  heroes: Observable<Hero[]>;
  isLoading = false;
  selectedHero: Hero;

  constructor(private heroService: HeroService) { }

  ngOnInit() { this.getHeroes(); }

  getHeroes() {
    this.isLoading = true;
    this.heroes = this.heroService.getHeroes()
                      // TODO: error handling
                      .pipe(finalize(() => this.isLoading = false));
    this.selectedHero = undefined;
  }

  select(hero: Hero) { this.selectedHero = hero; }
}


/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/