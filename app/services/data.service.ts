import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import {Story} from "../objects/story";

@Injectable()
export class DataService {

  private storiesUrl = 'api/storiesList';  // URL to web api

  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) { }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  getStories(): Promise<Story[]> {
    return this.http.get(this.storiesUrl)
      .toPromise()
      .then(response => response.json().data as Story[])
      .catch(this.handleError);
  }

  createStory(description: string) {
    return this.http
      .post(this.storiesUrl, JSON.stringify({description: description}), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data)
      .catch(this.handleError);
  }
}
