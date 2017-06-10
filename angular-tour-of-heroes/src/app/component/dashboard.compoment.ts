/**
 * Created by huaxin on 2017/6/9.
 */
import {Component, OnInit} from '@angular/core';

import {Hero} from '../entity/hero';
import {HeroService} from '../service/hero.service';

@Component({
  selector: 'my-dashboard',
  templateUrl: 'app/static/dashboard.component.html',
  styleUrls: ['app/css/dashboard.component.css']
})
export class DashBoardComponent implements OnInit {

  heroes: Hero[]= [];

  constructor(private heroesService: HeroService) {}

  getHeroes(): void {
    this.heroesService.getHeroes().then(heroes => this.heroes = heroes.slice(1, 5));
  }

  ngOnInit(): void {
    this.getHeroes();
  }
}
