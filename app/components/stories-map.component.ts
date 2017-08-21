import {Component, OnInit, Input} from '@angular/core';

import {Story} from "../objects/story";
import {Http} from "@angular/http";

@Component({
  moduleId: module.id,
  selector: 'story-map',
  templateUrl: '../html/story-map.component.html',
})
export class StoryMapComponent implements OnInit {
  @Input() stories: Story[];

  constructor(
    public http: Http) {
  }

  ngOnInit(): void {
  }

}
