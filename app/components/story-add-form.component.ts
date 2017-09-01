import {Component, Input, Injectable} from '@angular/core';
import {Story} from "../objects/story";
import {Coordinate} from "../objects/coordinate";
import {Address} from "../objects/address";
import {DataService} from "../services/data.service";
import {VARIABLES} from "../AppSettings";

import {MapBrowserEvent} from 'openlayers';

@Component({
  moduleId: module.id,
  selector: 'story-add-form',
  templateUrl: '../html/story-add-form.component.html',
})
export class StoryAddFormComponent {
  @Input() stories: Story[];
  @Input() mapBrowserEvent: MapBrowserEvent;

  title = VARIABLES.ADD_STORY_FORM_TITLE_2;

  submitted = false;

  model = this.resetStory();


  constructor(private dataService: DataService) {
  }

  onSubmit() {
    console.log("onSubmit is called !  mapBrowserEvent=" + this.mapBrowserEvent);

    this.submitted = true;
    this.addStory(this.model);
  }

  addStory(story: Story): void {
    if (!story.description || !story.address || !story.begin) { return; }

    story.address.coordinate = new Coordinate(this.mapBrowserEvent.coordinate[0], this.mapBrowserEvent.coordinate[1], "EPSG:3857");

    this.dataService.addObsStory(story)
      .subscribe(
          st => this.stories.push(st),
          err => { console.log(err);}
        );

    // prepare for a new story
    this.model = this.resetStory();
  }

  private resetStory() {
    return new Story("", new Address(""), new Date());
  }
}
