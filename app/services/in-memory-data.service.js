"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var story_1 = require("../objects/story");
var address_1 = require("../objects/address");
var user_1 = require("../objects/user");
var coordinate_1 = require("../objects/coordinate");
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
    InMemoryDataService.getSomeStories = function () {
        var st1, st2, st3;
        st1 = new story_1.Story("st1", new user_1.User("yafou"), "descr1", new address_1.Address("addr11"), new Date());
        st2 = new story_1.Story("st2", new user_1.User("yafou"), "descr2", new address_1.Address("addr2"), new Date());
        st3 = new story_1.Story("st3", new user_1.User("yafou"), "descr3333", new address_1.Address("addr3"), new Date());
        st1.address.coordinate = new coordinate_1.Coordinate(692249.10, 5804715.26, "EPSG:3857");
        st2.address.coordinate = new coordinate_1.Coordinate(692470.47, 5804715.26, "EPSG:3857");
        st3.address.coordinate = new coordinate_1.Coordinate(692050.37, 5804715.26, "EPSG:3857");
        var storiesList;
        storiesList = new Array();
        storiesList.push(st1, st2, st3);
        return storiesList;
    };
    return InMemoryDataService;
}());
exports.InMemoryDataService = InMemoryDataService;
//# sourceMappingURL=in-memory-data.service.js.map