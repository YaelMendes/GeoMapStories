import {Component, Input}   from '@angular/core';
import { ActivatedRoute }   from '@angular/router';
import { Location }         from '@angular/common';

@Component({
  moduleId: module.id,
  selector: 'results',
  templateUrl: '../html/results.component.html',
})
export class ResultComponent {

  heartsUrl = "../app/html/img/hearts.jpg"

  @Input()
  public nbErrors: number;

  constructor(
    private route: ActivatedRoute,
    private location: Location
  ) {

    console.log('resultComponent: nbErrors ==> ' + this.nbErrors);

  }



}
