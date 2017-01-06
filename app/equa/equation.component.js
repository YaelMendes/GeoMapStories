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
var EquationComponent = (function () {
    function EquationComponent(router, dataService, location) {
        this.router = router;
        this.dataService = dataService;
        this.location = location;
        this.nbErrors = 0;
        this.showResults = false;
    }
    EquationComponent.prototype.getEquations = function () {
        var _this = this;
        console.log('calling getEquations....');
        this.dataService.getEquations().then(function (equations) { return _this.equations = equations; });
    };
    EquationComponent.prototype.ngOnInit = function () {
        this.getEquations();
    };
    EquationComponent.prototype.check = function () {
        console.log('entering check...');
        this.nbErrors = 0;
        for (var _i = 0, _a = this.equations; _i < _a.length; _i++) {
            var equation = _a[_i];
            if (this.getResult(equation) != equation.proposition) {
                this.nbErrors++;
            }
        }
        this.showResults = true;
    };
    EquationComponent.prototype.getResult = function (equation) {
        switch (equation.operator) {
            case '+': return equation.number1 + equation.number2;
            case '-': return equation.number1 - equation.number2;
            case '*': return equation.number1 * equation.number2;
            case '/': return equation.number1 / equation.number2;
        }
    };
    EquationComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-equations',
            templateUrl: '../html/equation.component.html',
            styleUrls: ['../css/equation.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.Router, data_service_1.DataService, common_1.Location])
    ], EquationComponent);
    return EquationComponent;
}());
exports.EquationComponent = EquationComponent;
//# sourceMappingURL=equation.component.js.map