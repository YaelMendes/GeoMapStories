"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Story = (function () {
    function Story(title, user, description, address, begin, end, color) {
        var _this = this;
        this.toString = function () { return JSON.stringify(_this, null, '  '); };
        this.title = title;
        this.user = user;
        this.description = description;
        this.address = address;
        this.begin = begin;
    }
    return Story;
}());
exports.Story = Story;
//# sourceMappingURL=story.js.map