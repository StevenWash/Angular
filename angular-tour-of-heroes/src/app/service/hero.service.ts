/**
 * Created by huaxin on 2017/6/9.
 */
import {Injectable} from '@angular/core';
import {Http,Headers} from '@angular/http';

import 'rxjs/add/operator/toPromise';

import {Hero} from '../entity/hero';
import {toPromise} from "rxjs/operator/toPromise";

@Injectable()
export class HeroService {
  private heroesUrl = 'api/heroes';//URL to web api
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) {}

  getHeroes(): Promise<Hero[]> {
    //return Promise.resolve(HEROES);
    return this.http.get(this.heroesUrl).toPromise().
                then(response => response.json().data as Hero[]).
                catch(this.handleError);
  }

  getHeroesSlowly(): Promise<Hero[]> {
    return new Promise(resolve => {
      setTimeout(() => resolve(this.getHeroes()), 2000);
    });
  }

  getHero(id: number): Promise<Hero> {
    const url= `${this.heroesUrl}/${id}`;
    //return this.getHeroes().then(heroes => heroes.find(hero => hero.id === id));
    return this.http.get(url).toPromise().
                then(response => response.json().data as Hero).
                catch(this.handleError);
  }

  updateHero(hero: Hero) :Promise<Hero> {
    const url= `${this.heroesUrl}/${hero.id}`;
    return this.http.put(url,JSON.stringify(hero),{headers:this.headers}).toPromise().
                then(() => hero).
                catch(this.handleError);
  }

  createHero(name: string): void{
     this.http.post(this.heroesUrl,JSON.stringify({name:name}),{headers:this.headers}).toPromise().then(
      res => res.json().data as Hero ).catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any>{
    console.error('An error occurred',error);
    return Promise.reject(error.message||error);
  }
}
