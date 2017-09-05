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
var StoryNgxOlComponent = (function () {
    function StoryNgxOlComponent() {
        this.messageEvent = new core_1.EventEmitter();
        this.zoom = 15;
        this.opacity = 1.0;
        this.width = 5;
    }
    StoryNgxOlComponent.prototype.increaseZoom = function () {
        this.zoom = Math.min(this.zoom + 1, 18);
        console.log('zoom: ', this.zoom);
    };
    StoryNgxOlComponent.prototype.decreaseZoom = function () {
        this.zoom = Math.max(this.zoom - 1, 1);
        console.log('zoom: ', this.zoom);
    };
    StoryNgxOlComponent.prototype.increaseOpacity = function () {
        this.opacity = Math.min(this.opacity + 0.1, 1);
        console.log('opacity: ', this.opacity);
    };
    StoryNgxOlComponent.prototype.decreaseOpacity = function () {
        this.opacity = Math.max(this.opacity - 0.1, 0);
        console.log('opacity: ', this.opacity);
    };
    StoryNgxOlComponent.prototype.fillCoordinates = function (mapBrowserEvent) {
        console.log(mapBrowserEvent);
        console.log(mapBrowserEvent.coordinate[0] + ',' + mapBrowserEvent.coordinate[1]);
        this.messageEvent.emit(mapBrowserEvent);
    };
    return StoryNgxOlComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], StoryNgxOlComponent.prototype, "allStories", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], StoryNgxOlComponent.prototype, "messageEvent", void 0);
StoryNgxOlComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'story-ngx-ol',
        templateUrl: '../html/story-ngx-ol.component.html',
        styleUrls: ['../css/story-ngx-ol.component.css']
    })
], StoryNgxOlComponent);
exports.StoryNgxOlComponent = StoryNgxOlComponent;
//# sourceMappingURL=story-ngx-ol.component.js.map