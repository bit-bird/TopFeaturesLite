"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var nav_1 = require("./managers/nav");
var slides_1 = require("./managers/slides");
var TopFeatures = /** @class */ (function () {
    function TopFeatures() {
        var _this = this;
        this.onNavButtonClick = function (e, data) {
            _this.nav.setButton(data.index);
            _this.slides.slideTo(data.index);
            _this.currentIndex = data.index;
        };
        this.nav = new nav_1.default();
        $(this.nav).on('onNavClicked', this.onNavButtonClick);
        this.slides = new slides_1.default();
        this.setTo(0);
    }
    TopFeatures.prototype.setTo = function (index) {
        this.nav.setButton(index);
        this.slides.setSlide(index);
        this.currentIndex = index;
    };
    return TopFeatures;
}());
exports.default = TopFeatures;
//# sourceMappingURL=topfeatures.js.map