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
    StoryNgxOlComponent.prototype.ngOnInit = function () {
        if (this.source === undefined) {
            this.source = 'geoportal'; //'osm';
        }
        var myIgnKey = 'sx4johfuj8woxxvrphfuzzd0'; //''2mqbg0z6cx7ube8gsou10nrt';
        this.url = "http://wxs.ign.fr/" + myIgnKey + "/geoportail/wmts";
        this.layer = "GEOGRAPHICALGRIDSYSTEMS.MAPS"; //"ORTHOIMAGERY.ORTHOPHOTOS";
        this.matrixSet = "PM";
        this.format = "image/jpeg";
        this.style = "normal";
        this.attributions = ["IGN-F/Géoportail"];
        this.resolutions = [156543.03392804103, 78271.5169640205, 39135.75848201024, 19567.879241005125, 9783.939620502562, 4891.969810251281, 2445.9849051256406, 1222.9924525628203, 611.4962262814101, 305.74811314070485, 152.87405657035254, 76.43702828517625, 38.218514142588134, 19.109257071294063, 9.554628535647034, 4.777314267823517, 2.3886571339117584, 1.1943285669558792, 0.5971642834779396, 0.29858214173896974, 0.14929107086948493, 0.07464553543474241];
        this.matrixIds = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19'];
        this.origin = [-20037508, 20037508];
    };
    StoryNgxOlComponent.prototype.increaseOpacity = function () {
        this.opacity = Math.min(this.opacity + 0.1, 1);
        console.log('opacity: ', this.opacity);
    };
    StoryNgxOlComponent.prototype.decreaseOpacity = function () {
        this.opacity = Math.max(this.opacity - 0.1, 0);
        console.log('opacity: ', this.opacity);
    };
    StoryNgxOlComponent.prototype.increaseZoom = function () {
        this.zoom = Math.min(this.zoom + 1, 18);
        console.log('zoom: ', this.zoom);
    };
    StoryNgxOlComponent.prototype.decreaseZoom = function () {
        this.zoom = Math.max(this.zoom - 1, 1);
        console.log('zoom: ', this.zoom);
    };
    StoryNgxOlComponent.prototype.selectGeoportalSource = function () {
        this.source = 'geoportal';
    };
    StoryNgxOlComponent.prototype.selectOsmSource = function () {
        this.source = 'osm';
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
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], StoryNgxOlComponent.prototype, "source", void 0);
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