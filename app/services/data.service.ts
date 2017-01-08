import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Equation } from '../equa/equation';
import {Story} from "../objects/story";

@Injectable()
export class DataService {

  private equationsUrl = 'api/equationsList';  // URL to web api

  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) { }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  getEquations(): Promise<Equation[]> {
    return this.http.get(this.equationsUrl)
      .toPromise()
      .then(response => response.json().data as Equation[])
      .catch(this.handleError);
  }

  getStories(): Story[] {
    var stories = [
      {description: "this is a short descr"},
      {description: "this is another story"}
    ];
    return stories;
  }



}
