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
var common_1 = require('@angular/common');
var router_1 = require("@angular/router");
var data_service_1 = require('../services/data.service');
var QuestionComponent = (function () {
    function QuestionComponent(router, dataService, location) {
        this.router = router;
        this.dataService = dataService;
        this.location = location;
        this.current = 0;
        this.imagesUrl = [
            { value: false, url: "../app/html/img/candles1.jpg" },
            { value: false, url: "../app/html/img/decos2.jpg" },
            { value: false, url: "../app/html/img/3.jpg" },
            { value: false, url: "../app/html/img/4.jpg" },
            { value: false, url: "../app/html/img/5.jpg" },
            { value: false, url: "../app/html/img/6.jpg" },
            { value: false, url: "../app/html/img/7.jpg" },
            { value: false, url: "../app/html/img/7.jpg" },
            { value: false, url: "../app/html/img/7.jpg" },
        ];
    }
    QuestionComponent.prototype.getQuestions = function () {
        console.log('calling getQuestions....');
        this.questions = this.dataService.getQuestions();
    };
    QuestionComponent.prototype.ngOnInit = function () {
        this.getQuestions();
        this.currentQuestion = this.questions[this.current];
    };
    QuestionComponent.prototype.check = function () {
        console.log('entering check...this.questions.length =' + this.questions.length);
        console.log('entering check...this.current =' + this.current);
        if (this.proposition === this.currentQuestion.answer) {
            this.proposition = "";
            this.imagesUrl[this.current].value = true;
            this.currentQuestion = this.questions[++this.current];
        }
        else {
            this.showError = true;
        }
        if (this.questions.length === this.current) {
            this.gotoEquation();
        }
    };
    QuestionComponent.prototype.gotoEquation = function () {
        this.router.navigate(['/equations']);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], QuestionComponent.prototype, "proposition", void 0);
    QuestionComponent = __decorate([
        core_1.Component({
            templateUrl: '../app/html/question.component.html',
            styleUrls: ['../app/css/equation.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.Router, data_service_1.DataService, common_1.Location])
    ], QuestionComponent);
    return QuestionComponent;
}());
exports.QuestionComponent = QuestionComponent;
//# sourceMappingURL=question.component.js.map