import {Component, OnInit, Input} from '@angular/core';

import {Story} from "../objects/story";
import {Http} from "@angular/http";

import {Map} from "openlayers";

@Component({
  moduleId: module.id,
  selector: 'story-map',
  templateUrl: '../html/story-map.component.html',
})
export class StoryMapComponent implements OnInit {
  @Input() stories: Story[];

  map: Map;
  simple: 'example';

  constructor(
    public http: Http) {
  }

  ngOnInit(): void {
  }

  initMap() {
    this.map = new ol.Map({
      target: 'map',
      layers: [
        new ol.layer.Tile({
          source: new ol.source.OSM()
        })
      ],
      view: new ol.View({
        center: ol.proj.fromLonLat([37.41, 8.82]),
        zoom: 4
      })
    });
  }

}
