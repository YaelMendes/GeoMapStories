/**
 * Created by yme on 01.02.2017.
 */
import {Component, OnInit} from '@angular/core';
import { Location } from '@angular/common';

@Component({
  moduleId: module.id,
  inputs: ['nbFromComponent'],
  template:
    `
     <!-- 1-way : Component => DOM (interpolation) -->
     <div> 
     <label>nbFromComponent: </label><span>{{ numberFromComponent }}</span>
     <button (click)="onClick()"> click me !</button>
     <br/><br/>
     </div>
    
     <!-- 1-way : Component => DOM (property binding) -->
     <!--  <div> 
     <label for="title">Title:</label>
     <input name="title">
     <br/><br/>
     </div>-->
    
     <!-- event binding : DOM => Component -->
     <div> 
     <label>Enter:</label>
     <input (keyup)="onKey($event)">
     <p>{{valuesFromDom}}</p>
     <br/><br/> 
     </div>

     <!-- 2 way binding : DOM <=> Component -->
     <div> 
     <input type="text" [(ngModel)]="prop" /> 
     <label>prop: </label><span>{{ prop }}</span>
     </div> 
     
     
     <button (click)="goBack()">Back</button>`
})
export class SandBoxComponent implements OnInit {
  title = "coucou"

  numberFromComponent: number

  valuesFromDom = ''

  prop: string

  ngOnInit(): void {
  }

  constructor(private location: Location) {}

  onClick() : void {
    this.changeNb()
    this.changeProp()
  }

  private changeProp() {
    this.prop += " --- "
  }

  private changeNb() {
    if (this.numberFromComponent === undefined) {
      this.numberFromComponent = 100
    }

    this.numberFromComponent++
  }

  onKey(event:any) { // without type info
    this.valuesFromDom += event.target.value + ' | '
  }

  goBack(): void {
    this.location.back()
  }

}
