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
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by yme on 31.01.2017.
 */
var core_1 = require("@angular/core");
var data_service_1 = require("../services/data.service");
var router_1 = require("@angular/router");
var StatisticsComponent = (function () {
    function StatisticsComponent(dataService, router) {
        this.dataService = dataService;
        this.router = router;
    }
    StatisticsComponent.prototype.ngOnInit = function () {
        this.computeNumbers();
    };
    StatisticsComponent.prototype.computeNumbers = function () {
        var _this = this;
        this.dataService.getNumberStories()
            .subscribe(function (numbSt) { return _this.storiesNumber = numbSt; }, function (err) { return console.log(err); });
    };
    StatisticsComponent.prototype.gotoMainStories = function () {
        this.router.navigate(['/stories']);
    };
    return StatisticsComponent;
}());
StatisticsComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'story-statistics',
        template: "\n             <div>\n                <label>number of stories: </label><span>{{ storiesNumber }}</span>\n             </div>\n             <button (click)=\"gotoMainStories()\">Main menu</button>\n            "
    }),
    __metadata("design:paramtypes", [data_service_1.DataService, router_1.Router])
], StatisticsComponent);
exports.StatisticsComponent = StatisticsComponent;
//# sourceMappingURL=stories-statistics.component.js.map