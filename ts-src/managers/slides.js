"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var globals_1 = require("../globals");
var slides_1 = require("../slides/slides");
var TFSlideManager = /** @class */ (function () {
    function TFSlideManager() {
        var _this = this;
        this.element = $('#tf-slideContainer');
        this.slides = [];
        $.each(globals_1.default.slides, function (i, e) {
            var slide = new slides_1.Slides[e.class](i, e);
            _this.slides.push(slide);
            TweenMax.set(slide.element, { x: globals_1.default.contentWidth });
        });
    }
    TFSlideManager.prototype.setSlide = function (index) {
        var slide = this.slides[index];
        TweenMax.set(slide.element, { x: 0 });
        slide.animateIn(0);
        this.currentSlide = slide;
        $.each(this.slides, function (i, s) {
            if (s.index < index) {
                TweenMax.set(s.element, { x: -globals_1.default.contentWidth });
            }
            if (s.index > index) {
                TweenMax.set(s.element, { x: globals_1.default.contentWidth });
            }
        });
    };
    TFSlideManager.prototype.slideTo = function (index) {
        var slide = this.slides[index];
        if (index > this.currentSlide.index) {
            TweenMax.set(slide.element, { x: globals_1.default.contentWidth });
            TweenMax.to(this.currentSlide.element, 0.4, { overwrite: 'all', x: -globals_1.default.contentWidth, ease: eval('Circ.easeInOut') });
        }
        if (index < this.currentSlide.index) {
            TweenMax.set(slide.element, { x: -globals_1.default.contentWidth });
            TweenMax.to(this.currentSlide.element, 0.4, { overwrite: 'all', x: globals_1.default.contentWidth, ease: eval('Circ.easeInOut') });
        }
        TweenMax.to(slide.element, 0.4, { overwrite: 'all', x: 0, ease: eval('Circ.easeInOut') });
        this.currentSlide.animateOut(0);
        slide.animateIn(0.25);
        this.currentSlide = slide;
    };
    return TFSlideManager;
}());
exports.default = TFSlideManager;
//# sourceMappingURL=slides.js.map