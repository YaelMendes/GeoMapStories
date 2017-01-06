import { Component, OnInit } from '@angular/core';
import { Location }          from '@angular/common';
import { Router } from "@angular/router";

import { DataService } from '../services/data.service';
import { Equation } from './equation';

@Component({
  moduleId: module.id,
  selector: 'my-equations',
  templateUrl: '../html/equation.component.html',
  styleUrls: [ '../css/equation.component.css' ]
})
export class EquationComponent implements OnInit {
  equations:  Equation[];

  showResults: boolean;
  nbErrors = 0;

  constructor(
    private router: Router,
    private dataService: DataService,
    private location: Location) {
     this.showResults = false;
  }

  getEquations(): void {
    console.log('calling getEquations....');
    this.dataService.getEquations().then(equations => this.equations = equations);
  }

  ngOnInit(): void {
    this.getEquations();
  }

  check(): void {
    console.log('entering check...');
    this.nbErrors=0;
    for (let equation of this.equations) {
      if (this.getResult(equation) != equation.proposition) {
        this.nbErrors++;
      }
    }
    this.showResults = true;
  }

  getResult(equation: Equation): number {
    switch (equation.operator) {
      case '+': return equation.number1 + equation.number2;
      case '-': return equation.number1 - equation.number2;
      case '*': return equation.number1 * equation.number2;
      case '/': return equation.number1 / equation.number2;
    }

  }

}
