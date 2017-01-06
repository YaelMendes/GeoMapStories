"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise');
var DataService = (function () {
    function DataService(http) {
        this.http = http;
        this.equationsUrl = 'api/equationsList'; // URL to web api
        this.questionsUrl = 'api/questionsList'; // URL to web api
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
    }
    DataService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    DataService.prototype.getEquations = function () {
        return this.http.get(this.equationsUrl)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    DataService.prototype.getEquation = function (id) {
        var url = this.equationsUrl + "/" + id;
        return this.http.get(url)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    DataService.prototype.getQuestions = function () {
        var questions_ = [
            { ask: "Bonjour, quel est ton prénom ?", answer: "Déborah" },
            { ask: "Bonjour Déborah! Je suis content de te connaître, veux tu jouer avec moi ?", answer: "oui" },
            { ask: "Parfait! tu dois te demander qui je suis? et bien je suis un programme créé par une personne que tu connais très bien, tu devines qui ?", answer: "papa" },
            { ask: "Excellent! je connais beaucoup de chose! par exemple je sais que tu as un frère qui s'appelle Ethan, est-ce vrai ?", answer: "oui" },
            { ask: "Et oui je sais tout de toi! même ton âge! regarde: Dis moi ton âge", answer: "5 ans" },
            { ask: "Je le savais! au fait c'était bien la partie de Concept ? tu as joué avec Ethan et...(écris son nom)", answer: "papi" },
            { ask: "et oui!  je sais aussi que tu aimes bien les problèmes...tu veux en faire ?", answer: "oui" },
            { ask: "ok on va en faire, mais d'abord une dernière énigme, comment s'appelle ta maman ?", answer: "charlotte" },
            { ask: "Bravo ! c'est fini pour les questions, on commence les problèmes ?", answer: "oui" },
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
            { ask: "Bonjour, quel est ton prénom ?", answer: "Ethan" },
            { ask: "Bonjour Ethan! Je suis content de te connaître, veux tu jouer avec moi ?", answer: "oui" },
            { ask: "Parfait! tu dois te demander qui je suis? et bien je suis un programme créé par une personne que tu connais très bien, tu devines qui ?", answer: "papa" },
            { ask: "Excellent! je connais beaucoup de chose! par exemple je sais que tu as une soeur qui s'appelle Déborah, est-ce vrai ?", answer: "oui" },
            { ask: "Et oui je sais tout de toi! même ton âge! regarde: Dis moi ton âge", answer: "5 ans" },
            { ask: "Je le savais! au fait c'était bien la partie de Concept ? tu as joué avec Déborah et...(écris son nom)", answer: "papi" },
            { ask: "et oui!  je sais aussi que tu aimes bien les problèmes...tu veux en faire ?", answer: "oui" },
            { ask: "ok on va en faire, mais d'abord une dernière énigme, comment s'appelle ta maman ?", answer: "charlotte" },
            { ask: "Bravo ! c'est fini pour les questions, on commence les problèmes ?", answer: "oui" },
        ];
        return questions_;
    };
    DataService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], DataService);
    return DataService;
}());
exports.DataService = DataService;
//# sourceMappingURL=data.service.js.map