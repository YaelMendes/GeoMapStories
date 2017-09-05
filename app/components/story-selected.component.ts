/**
 * Created by yael4 on 24/01/2017.
 */

import {Component, OnInit, Input} from '@angular/core';

import {Story} from "../objects/story";
import {Http} from "@angular/http";

@Component({
  moduleId: module.id,
  selector: 'selected-story',
  template: ` 
     <div>
     <label>selected story:</label><br/>
      <label>oneStory title: </label><span>{{selectedStory?.title}}</span>
      <label>oneStory description: </label><span>{{selectedStory?.description}}</span>
      <label>oneStory address: </label><span>{{selectedStory?.address.realAddress}}</span>
      <label>oneStory begin: </label><span>{{selectedStory?.begin | date:'d MMMM y'}}</span>
       <br/>
     </div>
    `,
})
export class ShowStoryComponent {
  @Input() selectedStory: Story;



}
