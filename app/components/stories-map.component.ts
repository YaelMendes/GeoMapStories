import {Component, OnInit, Input} from '@angular/core';

import {Story} from "../objects/story";
import {Http} from "@angular/http";

import {Map, Tile, View} from "openlayers";

@Component({
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
})
export class StoryMapComponent implements OnInit {
  @Input() stories: Story[];

  map: Map;
  simple: 'example';


  @Input() width: string = '100%';
  @Input() height: string = '100%';
  @Input() pixelRatio: number;
  @Input() keyboardEventTarget: Element|string;
  @Input() loadTilesWhileAnimating: boolean;
  @Input() loadTilesWhileInteracting: boolean;
  @Input() logo: string|boolean;
  @Input() renderer: 'canvas'|'webgl';

  constructor(
    public http: Http) {
  }

  ngOnInit(): void {
    this.initMap();
  }

  initMap() {
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
  }

}
