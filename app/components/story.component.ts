import { Component, OnInit } from '@angular/core';

import { DataService } from '../services/data.service';
import {Story} from "../objects/story";
import {Http} from "@angular/http";

@Component({
  moduleId: module.id,
  selector: 'my-stories',
  templateUrl: '../html/story.component.html',
})
export class StoryComponent implements OnInit {
  stories: Story[];

  constructor(
    private dataService: DataService,
    public http: Http) {
  }

  ngOnInit(): void {
    this.retrieveStories();
  }

  retrieveStories(): void {
    this.dataService.getStories()
      .then(stories => this.stories = stories);
    console.log('calling retrieveStories....:'+this.stories);
  }

}