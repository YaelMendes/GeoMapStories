"use strict";
var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var equationsList = [
            { number1: 91, operator: '+', number2: 2 },
            { number1: 25, operator: '+', number2: 7 },
            { number1: 0, operator: '+', number2: 57 },
            { number1: 9, operator: '+', number2: 37 },
            { number1: 23, operator: '-', number2: 4 },
            { number1: 156, operator: '+', number2: 7 },
        ];
        return { equationsList: equationsList };
    };
    return InMemoryDataService;
}());
exports.InMemoryDataService = InMemoryDataService;
//# sourceMappingURL=in-memory-data.service.js.map