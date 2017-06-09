/**
 * Created by huaxin on 2017/6/9.
 */
import {Component} from "@angular/core";

@Component({
  selector:'my-app',
  template: `
  					<h1>{{title}}</h1>
  					<nav>
  					  <a routerLink="/heroes">Heroes</a>
  				  	<a routerLink="/dashboard">DashBoard</a>
            </nav>
  					<router-outlet></router-outlet>
  					`,
})
export  class AppComponent{
  title = 'Tour of Heroes';
}
