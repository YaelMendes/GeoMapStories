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
var http_1 = require("@angular/http");
var StoryListComponent = (function () {
    function StoryListComponent(http) {
        this.http = http;
    }
    StoryListComponent.prototype.ngOnInit = function () {
    };
    return StoryListComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], StoryListComponent.prototype, "allStories", void 0);
StoryListComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'all-stories',
        template: " \n     <div>\n     <label>stories list:</label><br/>\n     <li *ngFor='let story of allStories; let odd = odd' [ngClass]=\"{'alternate': !!odd}\" >\n       <label>title: </label><span>{{story.title}}</span>\n       <label>author: </label><span>{{story.user.name}}</span>\n       <label>description: </label><span>{{story.description}}</span>\n       <label>address: </label><span>{{story.address.realAddress}}</span>\n       <label>begin: </label><span>{{story.begin | date:'d MMMM y'}}</span>\n\n       <label>short story: </label><span>{{story | storyShortPipe}}</span>\n\n       <br/>\n     </li>\n     </div>\n    ",
        styles: ["\n        .alternate {background-color: lightgrey;}\n    "]
    }),
    __metadata("design:paramtypes", [http_1.Http])
], StoryListComponent);
exports.StoryListComponent = StoryListComponent;
//# sourceMappingURL=stories-list.component.js.map