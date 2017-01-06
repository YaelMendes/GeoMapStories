import {Component, OnInit, Input} from '@angular/core';
import { Location }          from '@angular/common';
import { Router } from "@angular/router";

import { DataService } from '../services/data.service';
import {Question} from "./question";

@Component({
  templateUrl: '../app/html/question.component.html',
  styleUrls: [ '../app/css/equation.component.css' ]
})
export class QuestionComponent implements OnInit {
  questions:  Question[];

  currentQuestion: Question;
  current = 0;

  showError: boolean;
  imagesUrl = [
    {value: false, url: "../app/html/img/candles1.jpg"},
    {value: false, url: "../app/html/img/decos2.jpg"},
    {value: false, url: "../app/html/img/3.jpg"},
    {value: false, url: "../app/html/img/4.jpg"},
    {value: false, url: "../app/html/img/5.jpg"},
    {value: false, url: "../app/html/img/6.jpg"},
    {value: false, url: "../app/html/img/7.jpg"},
    {value: false, url: "../app/html/img/7.jpg"},
    {value: false, url: "../app/html/img/7.jpg"},
  ];

  @Input()
  public proposition: string;

  constructor(
    private router: Router,
    private dataService: DataService,
    private location: Location) {
  }

  getQuestions(): void {
    console.log('calling getQuestions....');
    this.questions = this.dataService.getQuestions();
  }

  ngOnInit(): void {
    this.getQuestions();
    this.currentQuestion = this.questions[this.current];
  }

  check(): void {
    console.log('entering check...this.questions.length =' + this.questions.length );
    console.log('entering check...this.current =' + this.current );

    if (this.proposition === this.currentQuestion.answer) {
      this.proposition = "";
      this.imagesUrl[this.current].value=true;
      this.currentQuestion = this.questions[++this.current];
    } else {
      this.showError=true;
    }

    if (this.questions.length === this.current) {
      this.gotoEquation();
    }
  }

  gotoEquation(): void {
    this.router.navigate(['/equations']);
  }


}
