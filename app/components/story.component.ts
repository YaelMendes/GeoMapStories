import { Component, OnInit } from '@angular/core';
import { Location }          from '@angular/common';
import { Router } from "@angular/router";

import { DataService } from '../services/data.service';
import {Story} from "../objects/story";
import {Http, Response} from "@angular/http";

@Component({
  moduleId: module.id,
  selector: 'my-stories',
  templateUrl: '../html/story.component.html',
})
export class StoryComponent implements OnInit {
  stories: Story[];
  oneStoryTest: Story;
  loading: boolean;

  constructor(
    private router: Router,
    private dataService: DataService,
    private location: Location,
    public http: Http) {
  }

  ngOnInit(): void {
     this.retrieveAllStories();
     this.retrieveOneStory();
  }

  retrieveAllStories(): void {
    this.dataService.getStories()
      .then(stories => this.stories = stories);
    console.log('calling retrieveStories....:'+this.stories);
  }

  retrieveOneStory(): void {
    this.dataService.getOneStory()
      .then(stori => this.oneStoryTest = stori);
    console.log('calling retrieveOneStory....:'+this.oneStoryTest);
  }

  addStory(description: string, begin: Date): void {
    if (!description || !begin) { return; }
    this.dataService.createStory(description, begin)
      .then(story => {
        this.stories.push(story);
      });
  }


}
