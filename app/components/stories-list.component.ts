import {Component, OnInit, Input} from '@angular/core';

import {Story} from "../objects/story";
import {Http} from "@angular/http";

@Component({
  moduleId: module.id,
  selector: 'all-stories',
  template: ` 
     <div>
     <label>stories list:</label><br/>
     <li *ngFor="let story of allStories">
       <label>description: </label><span>{{story.description}}</span>
        <label>address: </label><span>{{story.address}}</span>
       <label>begin: </label><span>{{story.begin}}</span>
       <br/>
     </li>
     </div>
    `,
})
export class StoryListComponent implements OnInit {
  @Input() allStories: Story[];

  constructor(
    public http: Http) {
  }

  ngOnInit(): void {
  }

}
