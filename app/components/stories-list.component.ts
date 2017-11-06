import {Component, OnInit, Input} from '@angular/core';

import {Story} from "../objects/story";
import {Http} from "@angular/http";

@Component({
  moduleId: module.id,
  selector: 'all-stories',
  template: ` 
     <div>
     <label>stories list:</label><br/>
     <li *ngFor='let story of allStories; let odd = odd' [ngClass]="{'alternate': !!odd}" >
       <label>title: </label><span>{{story.title}}</span>
       <label>author: </label><span>{{story.user.name}}</span>
       <label>description: </label><span>{{story.description}}</span>
       <label>address: </label><span>{{story.address.realAddress}}</span>
       <label>begin: </label><span>{{story.begin | date:'d MMMM y'}}</span>

       <label>short story: </label><span>{{story | storyShortPipe}}</span>

       <br/>
     </li>
     </div>
    `,
  styles: [`
        .alternate {background-color: lightgrey;}
    `]
})
export class StoryListComponent implements OnInit {
  @Input() allStories: Story[];

  constructor(
    public http: Http) {
  }

  ngOnInit(): void {
  }

}
