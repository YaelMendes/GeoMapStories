import {Component, Input, Injectable} from '@angular/core';
import {Story} from "../objects/story";
import {DataService} from "../services/data.service";
import {VARIABLES} from "../AppSettings";

@Component({
  moduleId: module.id,
  selector: 'story-add-form',
  templateUrl: '../html/story-add-form.component.html',
})
export class StoryAddFormComponent {
  @Input() stories: Story[];

  title = VARIABLES.ADD_STORY_FORM_TITLE_2;

  submitted = false;

  model = this.initStory();

  private initStory() {
    return new Story("", "", new Date());
  }

  constructor(private dataService: DataService) {
  }

  onSubmit() {
    this.submitted = true;
    this.addStory(this.model);
  }

  addStory(story: Story): void {
    if (!story.description || !story.address || !story.begin) { return; }
    this.dataService.addObsStory(story)
      .subscribe(
          st => this.stories.push(st),
          err => { console.log(err);}
        );
    this.model = this.initStory();
  }

}
