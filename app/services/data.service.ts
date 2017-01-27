import { Injectable }    from '@angular/core';
import {Headers, Http, Response} from '@angular/http';

import 'rxjs/add/operator/toPromise';
import {Observable} from "rxjs/Rx";

import {Story} from "../objects/story";

@Injectable()
export class DataService {

  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(public http: Http) { }

  getObservableStories() : Observable<Story[]> {
    return this.http.get('http://localhost:8090/story/all')
      .map((res:Response) => res.json())
      .catch(DataService.handleObservableError());
  }

  getOneObservableStory() : Observable<Story> {
    return this.http.get('http://localhost:8090/story/one')
      .map((res:Response) => res.json())
      .catch(DataService.handleObservableError());
  }

  createStory(description: string, address: string, begin: Date) {
    return this.http
      .post(
        'http://localhost:8090/story/insert',
        JSON.stringify({description: description, address: address, begin: begin}),
        {headers: this.headers}
        )
      .toPromise()
      .then(res => res.json() as Story)
      .catch(DataService.handleError);
  }

  private static handleObservableError() {
    return (error: any) => Observable.throw(error.json().error || 'Server error');
  }

  private static handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
