"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by huaxin on 2017/6/9.
 */
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Tour of Heroes';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n  \t\t\t\t\t<h1>{{title}}</h1>\n  \t\t\t\t\t<nav>\n  \t\t\t\t\t  <a routerLink=\"/heroes\">Heroes</a>\n  \t\t\t\t  \t<a routerLink=\"/dashboard\">DashBoard</a>\n            </nav>\n  \t\t\t\t\t<router-outlet></router-outlet>\n  \t\t\t\t\t",
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map