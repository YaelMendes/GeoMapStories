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
  //  this.retrieveObservableStories();

    this.stories = this.retrieveMockStories();
  }

  retrieveMockStories() : Story[] {

    let st1, st2, st3 : Story;

    st1 = new Story("descr1", "addr11", new Date());
    st2 = new Story("descr2", "addr2", new Date());
    st3 = new Story("descr3", "addr3", new Date());

    let storiesList : Story[];

    storiesList = new Array();

    storiesList.push(st1, st2, st3);

    return storiesList;

    /*
    let storiesList___ = [
      {id: "1", description: "birth", address: 'place Vendome 75000 Paris France', begin: '1977-10-02'},
      {id: "2", description: "this is a short descr", address: 'place Vendome 75000 Paris France', begin: '1977-10-02'},
      {id: "3", description: "this is another story",  address: 'place Vendome 75000 Paris France', begin: '1977-10-02'}
    ];
    return {st1,st2,st3};
    */


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
