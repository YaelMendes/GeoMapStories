import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

import {Story} from '../objects/story';

import {MapBrowserEvent, Coordinate} from 'openlayers';

@Component({
  moduleId: module.id,
  selector: 'story-ngx-ol',
  templateUrl: '../html/story-ngx-ol.component.html',
  styleUrls: ['../css/story-ngx-ol.component.css']
})
export class StoryNgxOlComponent implements OnInit {

  @Input() allStories: Story[];
  @Output() messageEvent = new EventEmitter<any>();

  public zoom = 15;
  public opacity = 1.0;
  public width = 5;

  @Input() source: string;  // osm / wmts

  public url: string;
  public layer: string
  public matrixSet: string;
  public format: string;
  public style: string;
  public attributions: [string];

  public resolutions: [number];
  public matrixIds: [string];
  public origin: Coordinate;
  public crossOrigin: string;

  ngOnInit(): void {

    if (this.source === undefined) {
      this.source = 'geoportal'; //'osm';
    }
    this.initWmtsGeoportalData();
  }

  private initWmtsGeoportalData() {
    let myIgnKey = 'sx4johfuj8woxxvrphfuzzd0'; //''2mqbg0z6cx7ube8gsou10nrt';

    this.url = 'http://wxs.ign.fr/' + myIgnKey + '/geoportail/wmts';
    this.layer = 'GEOGRAPHICALGRIDSYSTEMS.MAPS'; //"ORTHOIMAGERY.ORTHOPHOTOS";
    this.matrixSet = 'PM';
    this.format = 'image/jpeg';
    this.style = 'normal';
    this.attributions = ['IGN-F/Géoportail'];

    this.resolutions = [156543.03392804103, 78271.5169640205, 39135.75848201024, 19567.879241005125, 9783.939620502562, 4891.969810251281, 2445.9849051256406, 1222.9924525628203, 611.4962262814101, 305.74811314070485, 152.87405657035254, 76.43702828517625, 38.218514142588134, 19.109257071294063, 9.554628535647034, 4.777314267823517, 2.3886571339117584, 1.1943285669558792, 0.5971642834779396, 0.29858214173896974, 0.14929107086948493, 0.07464553543474241];
    this.matrixIds = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19'];
    this.origin = [-20037508, 20037508];
  }

  increaseOpacity() {
    this.opacity = Math.min(this.opacity + 0.1, 1);
    console.log('opacity: ', this.opacity);
  }

  decreaseOpacity() {
    this.opacity = Math.max(this.opacity - 0.1, 0);
    console.log('opacity: ', this.opacity);
  }

  increaseZoom() {
    this.zoom = Math.min(this.zoom + 1, 18);
    console.log('zoom: ', this.zoom);
  }

  decreaseZoom() {
    this.zoom = Math.max(this.zoom - 1, 1);
    console.log('zoom: ', this.zoom);
  }

  selectGeoportalSource() {
    this.source = 'geoportal';
  }

  selectOsmSource() {
    this.source = 'osm';
  }

  fillCoordinates(mapBrowserEvent: MapBrowserEvent) {
    console.log(mapBrowserEvent);
    console.log(mapBrowserEvent.coordinate[0] + ',' + mapBrowserEvent.coordinate[1]);

    this.messageEvent.emit(mapBrowserEvent);
  }


  /*
  * map.addOverlay(overlay);

function displayTooltip(evt) {
  var pixel = evt.pixel;
  var feature = map.forEachFeatureAtPixel(pixel, function(feature) {
    return feature;
  });
  tooltip.style.display = feature ? '' : 'none';
  if (feature) {
    overlay.setPosition(evt.coordinate);
    tooltip.innerHTML = feature.get('name');
  }
};
  * */

  pointerHasMoved(mapBrowserEvent: MapBrowserEvent) {
    console.log(mapBrowserEvent);

    let pixel = mapBrowserEvent.pixel;

   // let feature =

    // ....
  }

}
