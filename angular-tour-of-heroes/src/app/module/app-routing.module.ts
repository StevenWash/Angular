/**
 * Created by 鑫 on 2017/6/10.
 */
import {DashBoardComponent} from '../component/dashboard.compoment';
import {HeroDetailComponent} from "../component/hero-detail.component";
import {HeroesComponent} from "../component/heroes.component";
import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

const routes : Routes = [
  {path: '', redirectTo : '/dashboard', pathMatch : 'full'},
  {path: 'dashboard', component: DashBoardComponent },
  {path: 'detail/:id', component: HeroDetailComponent },
  {path: 'heroes', component: HeroesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
