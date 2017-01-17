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

  oneStoryTest: Story;
  getOneStory(): Story {
    this.http.request('http://localhost:8090/story/one')
      .subscribe((res: Response) => {
        this.oneStoryTest = res.json();
        console.log('-----calling oneStoryTest des= '+ this.oneStoryTest.description);
        console.log('-----calling oneStoryTest beg= '+ this.oneStoryTest.begin);
        this.loading = false;
      });

   /* let st = new Story (this.oneStoryTest.description,  this.oneStoryTest.begin);
    console.log('calling oneStoryTest= '+  st);*/
    return this.oneStoryTest;
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
