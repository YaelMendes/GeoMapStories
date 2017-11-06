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
var user_1 = require("../objects/user");
var coordinate_1 = require("../objects/coordinate");
var address_1 = require("../objects/address");
var data_service_1 = require("../services/data.service");
var AppSettings_1 = require("../AppSettings");
var openlayers_1 = require("openlayers");
var StoryAddFormComponent = (function () {
    function StoryAddFormComponent(dataService) {
        this.dataService = dataService;
        this.pageTitle = AppSettings_1.VARIABLES.ADD_STORY_FORM_TITLE_2;
        this.submitted = false;
        this.model = this.resetStory();
    }
    StoryAddFormComponent.prototype.onSubmit = function () {
        console.log('onSubmit is called !  mapBrowserEvent=' + this.mapBrowserEvent);
        this.submitted = true;
        this.addStory(this.model);
    };
    StoryAddFormComponent.prototype.addStory = function (story) {
        var _this = this;
        if (!story.title || !story.description || !story.address || !story.begin) {
            return;
        }
        console.log("story=" + story);
        console.log("this.mapBrowserEvent=" + this.mapBrowserEvent);
        if (!this.mapBrowserEvent) {
            //TODO: display message to user: please choose an address by clicking the map to add a story
            return;
        }
        story.address.coordinate = new coordinate_1.Coordinate(this.mapBrowserEvent.coordinate[0], this.mapBrowserEvent.coordinate[1], 'EPSG:3857');
        if (AppSettings_1.VARIABLES.MODE_TEST) {
            // simulate generated id since nothing is persisted
            story.id = this.generateId();
            this.stories.push(story);
        }
        else {
            this.dataService.addObsStory(story)
                .subscribe(function (st) { return _this.stories.push(st); }, function (err) {
                console.log(err);
            });
        }
        // prepare for a new story
        this.model = this.resetStory();
    };
    StoryAddFormComponent.prototype.generateId = function () {
        return Math.random().toString(36);
    };
    StoryAddFormComponent.prototype.resetStory = function () {
        return new story_1.Story('', new user_1.User(''), '', new address_1.Address(''), new Date(), new Date(), AppSettings_1.VARIABLES.DEFAULT_USER_MAP_COLOR);
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Array)
    ], StoryAddFormComponent.prototype, "stories", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", typeof (_a = typeof openlayers_1.MapBrowserEvent !== "undefined" && openlayers_1.MapBrowserEvent) === "function" && _a || Object)
    ], StoryAddFormComponent.prototype, "mapBrowserEvent", void 0);
    StoryAddFormComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'story-add-form',
            templateUrl: '../html/story-add-form.component.html',
        }),
        __metadata("design:paramtypes", [data_service_1.DataService])
    ], StoryAddFormComponent);
    return StoryAddFormComponent;
    var _a;
}());
exports.StoryAddFormComponent = StoryAddFormComponent;
//# sourceMappingURL=story-add-form.component.js.map