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

  getStories(): void {
    console.log('calling getStories....');
    this.stories = this.dataService.getStories();
  }

  ngOnInit(): void {
    this.getStories();
  }


}
