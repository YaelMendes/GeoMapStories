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
var core_1 = require("@angular/core");
var data_service_1 = require("../services/data.service");
var story_1 = require("../objects/story");
var router_1 = require("@angular/router");
var StoryComponent = (function () {
    function StoryComponent(dataService, router) {
        this.dataService = dataService;
        this.router = router;
    }
    StoryComponent.prototype.ngOnInit = function () {
        this.retrieveOneObservableStories();
        //  this.retrieveObservableStories();
        this.stories = this.retrieveMockStories();
    };
    StoryComponent.prototype.retrieveMockStories = function () {
        var st1, st2, st3;
        st1 = new story_1.Story("descr1", "addr11", new Date());
        st2 = new story_1.Story("descr2", "addr2", new Date());
        st3 = new story_1.Story("descr3", "addr3", new Date());
        var storiesList;
        storiesList = new Array();
        storiesList.push(st1, st2, st3);
        return storiesList;
        /*
        let storiesList___ = [
          {id: "1", description: "birth", address: 'place Vendome 75000 Paris France', begin: '1977-10-02'},
          {id: "2", description: "this is a short descr", address: 'place Vendome 75000 Paris France', begin: '1977-10-02'},
          {id: "3", description: "this is another story",  address: 'place Vendome 75000 Paris France', begin: '1977-10-02'}
        ];
        return {st1,st2,st3};
        */
    };
    StoryComponent.prototype.retrieveObservableStories = function () {
        var _this = this;
        this.dataService.getObservableStories()
            .subscribe(function (stories) { return _this.stories = stories; }, function (err) { console.log(err); });
        console.log('calling retrieveStories....:' + this.stories);
    };
    StoryComponent.prototype.retrieveOneObservableStories = function () {
        var _this = this;
        this.dataService.getOneObservableStory()
            .subscribe(function (story) { _this.story = story; }, function (err) { console.log(err); });
    };
    StoryComponent.prototype.gotoStatistics = function () {
        this.router.navigate(['/statisticsPath']);
    };
    StoryComponent.prototype.gotoSandbox = function () {
        this.router.navigate(['/sandbox']);
    };
    return StoryComponent;
}());
StoryComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'my-stories',
        templateUrl: '../html/story.component.html',
    }),
    __metadata("design:paramtypes", [data_service_1.DataService, router_1.Router])
], StoryComponent);
exports.StoryComponent = StoryComponent;
//# sourceMappingURL=story.component.js.map