import {Component, Input, Injectable} from '@angular/core';
import {Story} from '../objects/story';
import {User} from '../objects/user';
import {Coordinate} from '../objects/coordinate';
import {Address} from '../objects/address';
import {DataService} from '../services/data.service';
import {VARIABLES} from '../AppSettings';

import {MapBrowserEvent} from 'openlayers';

@Component({
  moduleId: module.id,
  selector: 'story-add-form',
  templateUrl: '../html/story-add-form.component.html',
})
export class StoryAddFormComponent {
  @Input() stories: Story[];
  @Input() mapBrowserEvent: MapBrowserEvent;

  pageTitle = VARIABLES.ADD_STORY_FORM_TITLE_2;

  submitted: boolean | number = false;

  model: Story = this.resetStory();


  constructor(private dataService: DataService) {
  }

  onSubmit() {
    console.log('onSubmit is called !  mapBrowserEvent=' + this.mapBrowserEvent);

    this.submitted = true;
    this.addStory(this.model);
  }

  addStory(story: Story): void {
    if (!story.title || !story.description || !story.address || !story.begin) {
      return
    }

    console.log("story=" + story);
    console.log("this.mapBrowserEvent=" + this.mapBrowserEvent);

    if (! this.mapBrowserEvent) {
      //TODO: display message to user: please choose an address by clicking the map to add a story

     return
    }

    story.address.coordinate = new Coordinate(this.mapBrowserEvent.coordinate[0], this.mapBrowserEvent.coordinate[1], 'EPSG:3857');

    if (VARIABLES.MODE_TEST) {
      // simulate generated id since nothing is persisted
      story.id = this.generateId();
      this.stories.push(story);
    } else {
      this.dataService.addObsStory(story)
        .subscribe(
          st => this.stories.push(st),
          err => {
            console.log(err);
          }
        );
    }

    // prepare for a new story
    this.model = this.resetStory();
  }

  private generateId(): string {
    return Math.random().toString(36);
  }

  private resetStory() {
    return new Story('', new User(''), '', new Address(''), new Date(), new Date(), VARIABLES.DEFAULT_USER_MAP_COLOR);
  }
}
