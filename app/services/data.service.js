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
        this.storiesUrlTest = 'api/storiesList'; // URL to web api
        this.storiesUrl = 'http://localhost:8090'; // URL to web api
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
    }
    DataService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    DataService.prototype.getStories = function () {
        return this.http.get('http://localhost:8090/story/all')
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    DataService.prototype.getOneStory = function () {
        return this.http.get('http://localhost:8090/story/one')
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    DataService.prototype.createStory = function (description, begin) {
        return this.http
            .post('http://localhost:8090/story/insert', JSON.stringify({ description: description, begin: begin }), { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    DataService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], DataService);
    return DataService;
}());
exports.DataService = DataService;
//# sourceMappingURL=data.service.js.map