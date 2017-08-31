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
var story_1 = require("../objects/story");
var address_1 = require("../objects/address");
var data_service_1 = require("../services/data.service");
var AppSettings_1 = require("../AppSettings");
var StoryAddFormComponent = (function () {
    function StoryAddFormComponent(dataService) {
        this.dataService = dataService;
        this.title = AppSettings_1.VARIABLES.ADD_STORY_FORM_TITLE_2;
        this.submitted = false;
        this.model = this.initStory();
    }
    StoryAddFormComponent.prototype.initStory = function () {
        return new story_1.Story("", new address_1.Address(""), new Date());
    };
    StoryAddFormComponent.prototype.onSubmit = function () {
        this.submitted = true;
        this.addStory(this.model);
    };
    StoryAddFormComponent.prototype.addStory = function (story) {
        var _this = this;
        if (!story.description || !story.address || !story.begin) {
            return;
        }
        this.dataService.addObsStory(story)
            .subscribe(function (st) { return _this.stories.push(st); }, function (err) { console.log(err); });
        this.model = this.initStory();
    };
    return StoryAddFormComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], StoryAddFormComponent.prototype, "stories", void 0);
StoryAddFormComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'story-add-form',
        templateUrl: '../html/story-add-form.component.html',
    }),
    __metadata("design:paramtypes", [data_service_1.DataService])
], StoryAddFormComponent);
exports.StoryAddFormComponent = StoryAddFormComponent;
//# sourceMappingURL=story-add-form.component.js.map