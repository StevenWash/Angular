/**
 * Created by huaxin on 2017/6/9.
 */
import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {Location} from '@angular/common';

import 'rxjs/add/operator/switchMap';

import {HeroService} from '../service/hero.service';
import {Hero} from '../entity/hero';

@Component({
  selector: 'hero-detail',
  templateUrl: 'app/static/hero-detail.component.html',
  styleUrls: ['app/css/hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  @Input() hero: Hero;
  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.heroService.updateHero(this.hero).then(() => this.goBack());
  }

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) =>
        this.heroService.getHero(+params['id']))
          .subscribe(hero => this.hero = hero);
  }
}
