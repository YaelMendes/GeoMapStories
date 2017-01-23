/**
 * Created by yael4 on 23/01/2017.
 */
import {Component, OnInit, Input} from '@angular/core';

import {Story} from "../objects/story";
import {Http} from "@angular/http";
import {DataService} from "../services/data.service";

@Component({
  moduleId: module.id,
  selector: 'my-story',
  template: ` 
     <div>
     <label>myStory:</label><br/>
       <label>description: </label><span>{{myStory.description}}</span>
        <label>address: </label><span>{{myStory.address}}</span>
       <label>begin: </label><span>{{myStory.begin}}</span>
       <br/>
     </div>
    `,
})
export class MyTestStoryComponent implements OnInit {
  myStory: Story;

  constructor(
    private dataService: DataService,
    public http: Http) {
  }

  ngOnInit(): void {
    this.retrieveMyStory();
  }

  retrieveMyStory(): void {
    this.dataService.getOneStory()
      .then(stories => this.myStory = stories);
    console.log('calling retrieveStories....:'+this.myStory);
  }

}
