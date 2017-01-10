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
  stories:  Story[];

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

  addStory(description: string): void {
    if (!description) { return; }
    this.dataService.createStory(description)
      .then(story => {
        this.stories.push(story);
      });
  }



}
