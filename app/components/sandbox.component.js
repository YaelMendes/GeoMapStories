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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by yme on 01.02.2017.
 */
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var http_1 = require("@angular/http");
var SandBoxComponent = (function () {
    function SandBoxComponent(location, http) {
        this.title = "coucou";
        this.valuesFromDom = '';
    }
    SandBoxComponent.prototype.ngOnInit = function () {
        //this.testSwitchMap();
    };
    SandBoxComponent.prototype.onClick = function () {
        this.changeNb();
        this.changeProp();
    };
    SandBoxComponent.prototype.changeProp = function () {
        this.prop += " --- ";
    };
    SandBoxComponent.prototype.changeNb = function () {
        if (this.numberFromComponent === undefined) {
            this.numberFromComponent = 100;
        }
        this.numberFromComponent++;
    };
    SandBoxComponent.prototype.onKey = function (event) {
        this.valuesFromDom += event.target.value + ' | ';
    };
    SandBoxComponent.prototype.goBack = function () {
        // this.location.back()
    };
    SandBoxComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            inputs: ['nbFromComponent'],
            template: "\n     <!-- 1-way : Component => DOM (interpolation) -->\n     <div> \n     <label>nbFromComponent: </label><span>{{ numberFromComponent }}</span>\n     <button (click)=\"onClick()\"> click me !</button>\n     <br/><br/>\n     </div>\n    \n     <!-- 1-way : Component => DOM (property binding) -->\n     <!--  <div> \n     <label for=\"title\">Title:</label>\n     <input name=\"title\">\n     <br/><br/>\n     </div>-->\n    \n     <!-- event binding : DOM => Component -->\n     <div> \n     <label>Enter:</label>\n     <input (keyup)=\"onKey($event)\">\n     <p>{{valuesFromDom}}</p>\n     <br/><br/> \n     </div>\n\n     <!-- 2 way binding : DOM <=> Component -->\n     <div> \n     <input type=\"text\" [(ngModel)]=\"prop\" /> \n     <label>prop: </label><span>{{ prop }}</span>\n     </div> \n     \n     \n     <button (click)=\"goBack()\">Back</button>\n    ",
            styleUrls: ['../css/app.component.css']
        }),
        __param(0, core_1.Inject(common_1.Location)), __param(1, core_1.Inject(http_1.Http)),
        __metadata("design:paramtypes", [typeof (_a = typeof common_1.Location !== "undefined" && common_1.Location) === "function" && _a || Object, typeof (_b = typeof http_1.Http !== "undefined" && http_1.Http) === "function" && _b || Object])
    ], SandBoxComponent);
    return SandBoxComponent;
    var _a, _b;
}());
exports.SandBoxComponent = SandBoxComponent;
//# sourceMappingURL=sandbox.component.js.map