"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var storiesList = [
            { id: "1", description: "birth", address: 'place Vendome 75000 Paris France', begin: '1977-10-02' },
            { id: "2", description: "this is a short descr", address: 'place Vendome 75000 Paris France', begin: '1977-10-02' },
            { id: "3", description: "this is another story", address: 'place Vendome 75000 Paris France', begin: '1977-10-02' }
        ];
        return { storiesList: storiesList };
    };
    return InMemoryDataService;
}());
exports.InMemoryDataService = InMemoryDataService;
//# sourceMappingURL=in-memory-data.service.js.map