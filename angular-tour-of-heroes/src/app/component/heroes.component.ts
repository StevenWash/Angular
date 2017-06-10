import {Component, OnInit} from '@angular/core';
import {Hero} from '../entity/hero';
import {HeroService} from '../service/hero.service';
import {Router} from "@angular/router";



@Component({
  selector: 'my-heroes',
  templateUrl: 'app/static/heroes.component.html',
  styleUrls: ['app/css/heroes.component.css']
})
export class HeroesComponent implements OnInit {
  selectedHero: Hero;
  heroes: Hero[];

  constructor(
    private router: Router,
    private heroService: HeroService) {}

  // methods
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  getHeroes(): void {
    // this.heroService.getHeroesSlowly().then(heroes=>this.heroes=heroes);
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  gotoDetail(): void {
    this.router.navigate (
      ['/detail',this.selectedHero.id]
    );
  }

  add(name: string): void {
    name=name.trim();
    if(!name)
      return;
    this.heroService.createHero(name);
  }

  delete(hero: Hero): void {
    this.heroService
      .delete(hero.id)
      .then(() => {
        this.heroes = this.heroes.filter(h => h !== hero);
        if (this.selectedHero === hero) { this.selectedHero = null; }
      });
  }

  // override
  ngOnInit(): void {
    this.getHeroes();
  }
}




