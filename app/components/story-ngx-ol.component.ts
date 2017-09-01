import {Component, Input, Output, EventEmitter} from '@angular/core';

import {Story} from "../objects/story";

import {MapBrowserEvent} from 'openlayers';

@Component({
  moduleId: module.id,
  selector: 'story-ngx-ol',
  templateUrl: '../html/story-ngx-ol.component.html',
  styleUrls: ['../css/story-ngx-ol.component.css']
})
export class StoryNgxOlComponent {
  @Input() allStories: Story[];

  @Output() messageEvent = new EventEmitter<any>();

    x : number = 1000;

  public zoom = 15;
  public opacity = 1.0;
  public width = 5;

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

   // this.x = event.coordinate[0];

    this.messageEvent.emit(mapBrowserEvent);
  }
}
