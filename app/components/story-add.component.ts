import {Component, OnInit, Input} from '@angular/core';

import { DataService } from '../services/data.service';
import {Story} from "../objects/story";
import {Http} from "@angular/http";

@Component({
  moduleId: module.id,
  selector: 'add-story',
  template: `
    <div>
      <label>Add a story:</label>
      <label>description: </label><input #description />
      <label>address: </label><input #address />
      <label>begin: </label><input #begin />
      <button (click)="addStory(description.value, address.value, begin.value)">
      Add
      </button>
    </div>
    
  `,
})
export class StoryAddComponent implements OnInit {
  @Input() stories: Story[];

  constructor(
    private dataService: DataService,
    public http: Http) {
     console.log("input stories = ", this.stories);
  }

  ngOnInit(): void {
  }

  addStory(description: string, address: string, begin: Date): void {
    if (!description || !begin) { return; }
    this.dataService.createStory(description, address, begin)
      .then(story => {
        this.stories.push(story);
      });
  }


}
