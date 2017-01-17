"use strict";
var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var storiesList = [
            { description: "birth", begin: '1977-10-02' },
            { description: "this is a short descr" },
            { description: "this is another story" }
        ];
        return { storiesList: storiesList };
    };
    return InMemoryDataService;
}());
exports.InMemoryDataService = InMemoryDataService;
//# sourceMappingURL=in-memory-data.service.js.map