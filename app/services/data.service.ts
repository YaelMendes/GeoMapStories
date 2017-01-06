import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Equation } from '../equa/equation';
import {Question} from "../quest/question";

@Injectable()
export class DataService {

  private equationsUrl = 'api/equationsList';  // URL to web api
  private questionsUrl = 'api/questionsList';  // URL to web api

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

  getEquation(id: number): Promise<Equation> {
    const url = `${this.equationsUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Equation)
      .catch(this.handleError);
  }

  getQuestions(): Question[] {
    var questions_ = [
      {ask: "Bonjour, quel est ton prénom ?", answer: "Déborah"},
      {ask: "Bonjour Déborah! Je suis content de te connaître, veux tu jouer avec moi ?", answer: "oui"},
      {ask: "Parfait! tu dois te demander qui je suis? et bien je suis un programme créé par une personne que tu connais très bien, tu devines qui ?", answer: "papa"},
      {ask: "Excellent! je connais beaucoup de chose! par exemple je sais que tu as un frère qui s'appelle Ethan, est-ce vrai ?", answer: "oui"},
      {ask: "Et oui je sais tout de toi! même ton âge! regarde: Dis moi ton âge", answer: "5 ans"},
      {ask: "Je le savais! au fait c'était bien la partie de Concept ? tu as joué avec Ethan et...(écris son nom)", answer: "papi"},
      {ask: "et oui!  je sais aussi que tu aimes bien les problèmes...tu veux en faire ?", answer: "oui"},
      {ask: "ok on va en faire, mais d'abord une dernière énigme, comment s'appelle ta maman ?", answer: "charlotte"},
      {ask: "Bravo ! c'est fini pour les questions, on commence les problèmes ?", answer: "oui"},
    ];

    // for test only
  /*  questions_ = [
      {ask: "Bonjour, quel est ton prénom ?", answer: "dd"},
      {ask: "Bonjour ent de te connaître, veux tu jouer avec moi ?", answer: "dd"},
      {ask: "Bonjour  ?", answer: "dd"},
      {ask: "Bonjour  ?", answer: "dd"},
      {ask: "Bonjour  ?", answer: "dd"},
      {ask: "Bonjour  ?", answer: "dd"},
      {ask: "Bonjour  ?", answer: "dd"},
      {ask: "Bonjour  ?", answer: "dd"}];*/


     questions_ = [
      {ask: "Bonjour, quel est ton prénom ?", answer: "Ethan"},
      {ask: "Bonjour Ethan! Je suis content de te connaître, veux tu jouer avec moi ?", answer: "oui"},
      {ask: "Parfait! tu dois te demander qui je suis? et bien je suis un programme créé par une personne que tu connais très bien, tu devines qui ?", answer: "papa"},
      {ask: "Excellent! je connais beaucoup de chose! par exemple je sais que tu as une soeur qui s'appelle Déborah, est-ce vrai ?", answer: "oui"},
      {ask: "Et oui je sais tout de toi! même ton âge! regarde: Dis moi ton âge", answer: "5 ans"},
      {ask: "Je le savais! au fait c'était bien la partie de Concept ? tu as joué avec Déborah et...(écris son nom)", answer: "papi"},
      {ask: "et oui!  je sais aussi que tu aimes bien les problèmes...tu veux en faire ?", answer: "oui"},
      {ask: "ok on va en faire, mais d'abord une dernière énigme, comment s'appelle ta maman ?", answer: "charlotte"},
      {ask: "Bravo ! c'est fini pour les questions, on commence les problèmes ?", answer: "oui"},
    ];


    return questions_;
  }


}
