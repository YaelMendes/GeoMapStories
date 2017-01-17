import { Injectable }    from '@angular/core';
import {Headers, Http, Response} from '@angular/http';

import 'rxjs/add/operator/toPromise';

import {Story} from "../objects/story";

@Injectable()
export class DataService {

  private storiesUrl = 'api/storiesList';  // URL to web api

  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(public http: Http) { }

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

  data: Object;
  loading: boolean;


  createStory(description: string, begin: Date) {
    return this.http
      .post(this.storiesUrl, JSON.stringify({description: description, begin: begin}), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data)
      .catch(this.handleError);
  }



}
