import { Component, OnInit } from '@angular/core';
import { Location }          from '@angular/common';
import { Router } from "@angular/router";

import { DataService } from '../services/data.service';
import {Story} from "../objects/story";

@Component({
  moduleId: module.id,
  selector: 'my-stories',
  templateUrl: '../html/story.component.html',
})
export class StoryComponent implements OnInit {
  stories: Story[];
  newStory: Story;

  constructor(
    private router: Router,
    private dataService: DataService,
    private location: Location) {
  }

  ngOnInit(): void {
    this.getStories();
  }

  getStories(): void {
    console.log('calling getStories....');
    this.dataService.getStories()
      .then(stories => this.stories = stories);
  }

  addStory(description: string, begin: Date): void {
    if (!description || !begin) { return; }
    this.dataService.createStory3(description, begin)
      .then(story => {
        this.stories.push(story);
      });
  }

  addStory2(story: Story): void {
    if (!story.description || !story.begin) { return; }
    this.dataService.createStory2(story)
      .then(story => {
        this.stories.push(story);
      });
  }


}
