"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by huaxin on 2017/6/9.
 */
var core_1 = require("@angular/core");
var hero_service_1 = require("../service/hero.service");
var DashBoardComponent = (function () {
    function DashBoardComponent(heroesService) {
        this.heroesService = heroesService;
        this.heroes = [];
    }
    DashBoardComponent.prototype.getHeroes = function () {
        var _this = this;
        this.heroesService.getHeroes().then(function (heroes) { return _this.heroes = heroes.slice(1, 5); });
    };
    DashBoardComponent.prototype.ngOnInit = function () {
        this.getHeroes();
    };
    return DashBoardComponent;
}());
DashBoardComponent = __decorate([
    core_1.Component({
        selector: 'my-dashboard',
        templateUrl: 'app/static/dashboard.component.html',
        styleUrls: ['app/css/dashboard.component.css']
    }),
    __metadata("design:paramtypes", [hero_service_1.HeroService])
], DashBoardComponent);
exports.DashBoardComponent = DashBoardComponent;
//# sourceMappingURL=dashboard.compoment.js.map