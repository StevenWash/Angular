import {NgModule }      from '@angular/core';
import {BrowserModule } from '@angular/platform-browser';
import {FormsModule}     from '@angular/forms';
import {HttpModule}  from '@angular/http';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from '../service/in-memory-data.service';

import {AppComponent }  from '../component/app.component';
import {HeroDetailComponent}   from '../component/hero-detail.component';
import {HeroesComponent} from '../component/heroes.component';
import {HeroService} from '../service/hero.service';
import {DashBoardComponent} from '../component/dashboard.compoment';
import {AppRoutingModule} from './app-routing.module';
import {HeroSearchComponent} from '../component/hero-search-component'

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroesComponent,
    DashBoardComponent,
    HeroSearchComponent
  ],
  providers: [
    HeroService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
