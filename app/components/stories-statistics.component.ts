/**
 * Created by yme on 31.01.2017.
 */
import {Component, OnInit} from "@angular/core";
import {DataService} from "../services/data.service";

@Component({
  moduleId: module.id,
  selector: 'story-statistics',
  template: `
             <div>
                <label>number of stories: </label><span>{{ storiesNumber }}</span>
             </div>
            `
})
export class StatisticsComponent implements OnInit {

  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
    this.computeNumbers();
  }

  storiesNumber: number;

  computeNumbers(): void {
     this.dataService.getNumberStories()
       .subscribe(
         numbSt => {this.storiesNumber = numbSt; },
         err => { console.log(err);}
       )
  }

}
