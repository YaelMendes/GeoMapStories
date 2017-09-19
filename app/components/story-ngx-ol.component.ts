import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

import {Story} from "../objects/story";

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

  @Input() layer: string;  // osm / wmts


  // test for wmts
    public url: string;
    public __layer: string //""ORTHOIMAGERY.ORTHOPHOTOS";
    public matrixSet: "PM";
    public format: "image/jpeg";
    public style: "normal";
  public attributions: ["IGN-F/Géoportail"];

//public resolutions:[156543.03392804103,78271.5169640205,39135.75848201024,19567.879241005125,9783.939620502562,4891.969810251281,2445.9849051256406,1222.9924525628203,611.4962262814101,305.74811314070485,152.87405657035254,76.43702828517625,38.218514142588134,19.109257071294063,9.554628535647034,4.777314267823517,2.3886571339117584,1.1943285669558792,0.5971642834779396,0.29858214173896974,0.14929107086948493,0.07464553543474241];
//  public matrixIds:['0','1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19'];

  public resolutions:[number];
  public matrixIds:[string];
  public origin: Coordinate;
  public crossOrigin: string;

  /*
          <aol-source-tilewmts
                [url]="'http://wxs.ign.fr/2mqbg0z6cx7ube8gsou10nrt/wmts'"
                [layer]="'ORTHOIMAGERY.ORTHOPHOTOS'"
                [matrixSet]="'PM'"
                [format]="'image/jpeg'"
                [style]="'normal'"
              >
              <aol-tilegrid-wmts
                  [resolutions]="'[156543.03392804103,78271.5169640205,39135.75848201024,19567.879241005125,9783.939620502562,4891.969810251281,2445.9849051256406,1222.9924525628203,611.4962262814101,305.74811314070485,152.87405657035254,76.43702828517625,38.218514142588134,19.109257071294063,9.554628535647034,4.777314267823517,2.3886571339117584,1.1943285669558792,0.5971642834779396,0.29858214173896974,0.14929107086948493,0.07464553543474241]'"
                  [matrixIds]="'[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]'"
                  [origin]="'[-20037508,20037508]'">
           </aol-tilegrid-wmts>
                */

  ngOnInit(): void {

    if(this.layer === undefined) {
      this.layer = 'geoportal'; //'osm';
    }

     //https://wxs.ign.fr/2mqbg0z6cx7ube8gsou10nrt/geoportail/wmts

    let myIgnKey = '2mqbg0z6cx7ube8gsou10nrt';

    this.url= "http://wxs.ign.fr/"+myIgnKey+"/geoportail/wmts";

    this.url = "http://wxs.ign.fr/sx4johfuj8woxxvrphfuzzd0/wmts";

    this.url = "http://wxs.ign.fr/sx4johfuj8woxxvrphfuzzd0/geoportail/wmts?service=WMTS&request=GetTile&version=1.0.0&tilematrixset=PM&tilematrix={z}&tilecol={x}&tilerow={y}&layer=GEOGRAPHICALGRIDSYSTEMS.MAPS&format=image/jpeg&style=normal";

    this.url = "http://wxs.ign.fr/2mqbg0z6cx7ube8gsou10nrt/wmts";



    this.url="http://wxs.ign.fr/2mqbg0z6cx7ube8gsou10nrt/wmts?layer=ORTHOIMAGERY.ORTHOPHOTOS&style=normal&tilematrixset=PM&Service=WMTS&Request=GetTile&Version=1.0.0&Format=image%2Fjpeg&TileMatrix=15&TileCol=-354&TileRow=-362";


    this.url="http://israel:israel@wxs.ign.fr/sx4johfuj8woxxvrphfuzzd0/geoportail/wmts?service=WMTS&request=GetTile&version=1.0.0&tilematrixset=PM&tilematrix=1&tilecol=1&tilerow=1&layer=GEOGRAPHICALGRIDSYSTEMS.MAPS&format=image/jpeg&style=normal";

    myIgnKey = 'sx4johfuj8woxxvrphfuzzd0';

    this.url= "http://wxs.ign.fr/"+myIgnKey+"/geoportail/wmts";



    this.__layer= "GEOGRAPHICALGRIDSYSTEMS.MAPS"; //"ORTHOIMAGERY.ORTHOPHOTOS";
    this.matrixSet= "PM";
    this.format= "image/jpeg";
    this.style= "normal";
    this.attributions=["IGN-F/Géoportail"];


  //  this.crossOrigin= 'anonymous';

    this.resolutions=[156543.03392804103,78271.5169640205,39135.75848201024,19567.879241005125,9783.939620502562,4891.969810251281,2445.9849051256406,1222.9924525628203,611.4962262814101,305.74811314070485,152.87405657035254,76.43702828517625,38.218514142588134,19.109257071294063,9.554628535647034,4.777314267823517,2.3886571339117584,1.1943285669558792,0.5971642834779396,0.29858214173896974,0.14929107086948493,0.07464553543474241];
    this.matrixIds=['0','1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19'];
    this.origin=   [-20037508,20037508];
  }

  changeLayer() {
    //TODO
  }

  increaseZoom() {
    this.zoom  = Math.min(this.zoom + 1, 18);
    console.log('zoom: ', this.zoom);
  }

  decreaseZoom() {
    this.zoom  = Math.max(this.zoom - 1, 1);
    console.log('zoom: ', this.zoom);
  }

  increaseOpacity() {
    this.opacity  = Math.min(this.opacity + 0.1, 1);
    console.log('opacity: ', this.opacity);
  }

  decreaseOpacity() {
    this.opacity  = Math.max(this.opacity - 0.1, 0);
    console.log('opacity: ', this.opacity);
  }

  fillCoordinates(mapBrowserEvent: MapBrowserEvent) {
    console.log(mapBrowserEvent);
    console.log(mapBrowserEvent.coordinate[0] + ',' + mapBrowserEvent.coordinate[1]);

    this.messageEvent.emit(mapBrowserEvent);
  }
}
