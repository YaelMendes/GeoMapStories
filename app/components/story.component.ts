import { Component, OnInit } from '@angular/core';

import { DataService } from '../services/data.service';
import {Story} from "../objects/story";
import {Http} from "@angular/http";
import {Router} from "@angular/router";

@Component({
  moduleId: module.id,
  selector: 'my-stories',
  templateUrl: '../html/story.component.html',
})
export class StoryComponent implements OnInit {
  stories: Story[];
  story: Story;

  constructor(private dataService: DataService, private router: Router) {
  }

  ngOnInit(): void {
    this.retrieveOneObservableStories();
    this.retrieveObservableStories();
  }

  retrieveObservableStories(){
    this.dataService.getObservableStories()
      .subscribe(stories => this.stories = stories, err => { console.log(err);});
    console.log('calling retrieveStories....:'+this.stories);
  }

  retrieveOneObservableStories(){
    this.dataService.getOneObservableStory()
      .subscribe(
          story => {this.story = story; },
          err => { console.log(err);}
        );
  }

  gotoStatistics(): void {
    this.router.navigate(['/statisticsPath']);
  }

  gotoSandbox(): void {
    this.router.navigate(['/sandbox']);
  }
}
