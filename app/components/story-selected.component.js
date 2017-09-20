"use strict";
/**
 * Created by yael4 on 24/01/2017.
 */
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
var story_1 = require("../objects/story");
var ShowStoryComponent = (function () {
    function ShowStoryComponent() {
    }
    return ShowStoryComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", story_1.Story)
], ShowStoryComponent.prototype, "selectedStory", void 0);
ShowStoryComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'selected-story',
        template: " \n     <div>\n     <label>selected story:</label><br/>\n      <label>oneStory title: </label><span>{{selectedStory?.title}}</span>\n      <label>oneStory author: </label><span>{{selectedStory?.user.name}}</span>\n      <label>oneStory description: </label><span>{{selectedStory?.description}}</span>\n      <label>oneStory address: </label><span>{{selectedStory?.address.realAddress}}</span>\n      <label>oneStory begin: </label><span>{{selectedStory?.begin | date:'d MMMM y'}}</span>\n       <br/>\n     </div>\n    ",
    })
], ShowStoryComponent);
exports.ShowStoryComponent = ShowStoryComponent;
//# sourceMappingURL=story-selected.component.js.map