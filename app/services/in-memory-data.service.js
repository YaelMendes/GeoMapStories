"use strict";
var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var storiesList = [
            { id: "1", description: "birth", begin: '1977-10-02' },
            { id: "2", description: "this is a short descr", begin: '1977-10-02' },
            { id: "3", description: "this is another story", begin: '1977-10-02' }
        ];
        return { storiesList: storiesList };
    };
    return InMemoryDataService;
}());
exports.InMemoryDataService = InMemoryDataService;
//# sourceMappingURL=in-memory-data.service.js.map