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
    console.log('calling retrieveStories....');
    this.dataService.getStories()
      .then(stories => this.stories = stories);
  }

 /* retrieveOneStory(): void {
    console.log('calling retrieveOneStory....');
    this.oneStoryTest = this.dataService.getOneStory();
  }*/

/*  retrieveAllStories(): void {
    this.http.request('http://localhost:8090/story/all')
      .subscribe((res: Response) => {
        this.stories = res.json();
        this.loading = false;
      });
  }*/

  retrieveOneStory(): void {
    this.http.request('http://localhost:8090/story/one')
      .subscribe((res: Response) => {
        this.oneStoryTest = res.json();
        this.loading = false;
      });
  }

  addStory(description: string, begin: Date): void {
    if (!description || !begin) { return; }
    this.dataService.createStory(description, begin)
      .then(story => {
        this.stories.push(story);
      });
  }


}
