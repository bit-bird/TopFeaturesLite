"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TopFeatureSlide = /** @class */ (function () {
    function TopFeatureSlide(index, data) {
        this.id = data.id;
        this.element = $('#' + data.htmlElement);
        this.elementId = data.elementId;
        this.index = index;
        console.log("-- TopFeature Slide created --");
    }
    TopFeatureSlide.prototype.animateIn = function (delay) {
        if (delay === void 0) { delay = 0; }
        // console.log("top animIn")
    };
    TopFeatureSlide.prototype.animateOut = function (delay) {
        if (delay === void 0) { delay = 0; }
    };
    return TopFeatureSlide;
}());
exports.default = TopFeatureSlide;
//# sourceMappingURL=topFeatureSlide.js.map