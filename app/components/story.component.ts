import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';

import { DataService } from '../services/data.service';
import {Story} from "../objects/story";
import {Http} from "@angular/http";
import {Router} from "@angular/router";
import {InMemoryDataService} from "../services/in-memory-data.service"
import {VARIABLES} from "../AppSettings";
import {StoryNgxOlComponent} from "./story-ngx-ol.component";

import {MapBrowserEvent} from 'openlayers';

@Component({
  moduleId: module.id,
  selector: 'my-stories',
  templateUrl: '../html/story.component.html',
})
export class StoryComponent implements OnInit {
  stories: Story[];

  mapBrowserEvent: MapBrowserEvent;

  constructor(private dataService: DataService, private router: Router) {
  }

  ngOnInit(): void {
    console.log("-- ngOnInit ");

    if (VARIABLES.MODE_TEST) {
      if (this.stories === undefined || this.stories.length == 0) {
        this.stories = this.retrieveMockStories();
      }
    } else {
      this.retrieveObservableStories();
    }
  }

  retrieveMockStories() : Story[] {

    let storiees = InMemoryDataService.getSomeStories();
    return storiees;
  }

  retrieveObservableStories(){
    this.dataService.getObservableStories()
      .subscribe(stories => this.stories = stories, err => { console.log(err);});
    console.log('calling retrieveStories....:'+this.stories);
  }

  /*
  retrieveOneObservableStories(){
    this.dataService.getOneObservableStory()
      .subscribe(
          story => {this.story = story; },
          err => { console.log(err);}
        );
  }*/

  receiveMessage(mapBrowserEvent: MapBrowserEvent) {
    console.log("-- event received=" + mapBrowserEvent.coordinate[0] + ',' + mapBrowserEvent.coordinate[1]);

    this.mapBrowserEvent = mapBrowserEvent;
  }

  gotoStatistics(): void {
    this.router.navigate(['/statisticsPath']);
  }

  gotoSandbox(): void {
    this.router.navigate(['/sandbox']);
  }
}
