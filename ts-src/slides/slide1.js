"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var globals_1 = require("../globals");
var topFeatureSlide_1 = require("./topFeatureSlide");
var watchVideoButton_1 = require("../ui/watchVideoButton");
var Slide1 = /** @class */ (function (_super) {
    __extends(Slide1, _super);
    function Slide1(index, data) {
        var _this = _super.call(this, index, data) || this;
        _this.title = $('#tf-slide1-title');
        _this.vehicle = $('#tf-slide1-vehicle');
        _this.text = $('#tf-slide1-text');
        /*
            Configure styles/positions
        */
        _this.configureStyles();
        _this.btn = new watchVideoButton_1.default();
        _this.element.append(_this.btn.element);
        return _this;
    }
    Slide1.prototype.configureStyles = function () {
        this.title.css({
            left: 25,
            top: 25
        });
        this.vehicle.css({
            left: 410
        });
        this.text.css({
            width: 420,
            left: 25,
            top: 130
        });
    };
    Slide1.prototype.animateIn = function (delay) {
        if (delay === void 0) { delay = 0; }
        TweenMax.set(this.vehicle, { x: this.vehicle.width() });
        TweenMax.to(this.vehicle, 0.65, { x: 0, overwrite: 'all', delay: delay, ease: eval('Power3.easeOut') });
        TweenMax.set(this.title, { x: -globals_1.default.contentWidth });
        TweenMax.to(this.title, 0.65, { x: 0, overwrite: 'all', delay: delay, ease: eval('Power3.easeOut') });
        _super.prototype.animateIn.call(this, delay);
    };
    Slide1.prototype.animateOut = function (delay) {
        if (delay === void 0) { delay = 0; }
        //super.animateOut(delay);
        _super.prototype.animateOut.call(this, delay);
    };
    return Slide1;
}(topFeatureSlide_1.default));
exports.default = Slide1;
//# sourceMappingURL=slide1.js.map