/**
 * Created by yme on 01.02.2017.
 */
import {Component, OnInit, Inject} from '@angular/core';
import { Location } from '@angular/common';
import {Http} from "@angular/http";
import {Route, Params} from "@angular/router";

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
     
     
     <button (click)="goBack()">Back</button>
    `,
  styleUrls: ['../css/app.component.css']
})
export class SandBoxComponent implements OnInit {
  title = "coucou"
  numberFromComponent: number
  valuesFromDom = ''
  prop: string

  ngOnInit(): void {
    //this.testSwitchMap();
  }

  constructor(@Inject(Location) location: Location, @Inject(Http) http: Http) {}

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
   // this.location.back()
  }

/*  private testSwitchMap() {
    this.route.params
    // (+) converts string 'id' to a number
      .switchMap((params: Params) => this.service.getHero(+params['id']))
      .subscribe((hero: Hero) => this.hero = hero);
  }*/
}
