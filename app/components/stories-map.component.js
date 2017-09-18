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
var StoryMapComponent = (function () {
    function StoryMapComponent(http) {
        this.http = http;
        this.width = '100%';
        this.height = '100%';
    }
    StoryMapComponent.prototype.ngOnInit = function () {
        this.initMap();
    };
    StoryMapComponent.prototype.initMap = function () {
        // this.map = new Map(this);
        // this.map.setTarget('map');
        /*
      this.map = new Map({
        target: 'map',
        layers: [
          new Tile({
            source: new ol.source.OSM()
          })
        ],
        view: new View({
          center: ol.proj.fromLonLat([37.41, 8.82]),
          zoom: 4
        })
      });*/
    };
    return StoryMapComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], StoryMapComponent.prototype, "stories", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], StoryMapComponent.prototype, "width", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], StoryMapComponent.prototype, "height", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], StoryMapComponent.prototype, "pixelRatio", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], StoryMapComponent.prototype, "keyboardEventTarget", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], StoryMapComponent.prototype, "loadTilesWhileAnimating", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], StoryMapComponent.prototype, "loadTilesWhileInteracting", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], StoryMapComponent.prototype, "logo", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], StoryMapComponent.prototype, "renderer", void 0);
StoryMapComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'story-map',
        //template: "<div id='map'></div>"
        /* template: `
         <aol-map [width]="'500px'" [height]="'300'">
           <aol-view [zoom]="2">
               <aol-coordinate [x]="5.795122" [y]="45.210225" [srid]="'EPSG:4326'"></aol-coordinate>
           </aol-view>
           <aol-layer-tile>
               <aol-source-osm></aol-source-osm>
           </aol-layer-tile>
       </aol-map>
         `*/
        templateUrl: '../html/story-map.component.html',
    }),
    __metadata("design:paramtypes", [http_1.Http])
], StoryMapComponent);
exports.StoryMapComponent = StoryMapComponent;
//# sourceMappingURL=stories-map.component.js.map