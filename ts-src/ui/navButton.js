"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NavButton = /** @class */ (function () {
    function NavButton(width, index, id, label) {
        var _this = this;
        this.onMouseOver = function () {
            _this.arrow.css({
                borderColor: 'transparent transparent transparent white'
            });
            _this.bg.removeClass('tf-navButtonBg1');
            _this.bg.addClass('tf-navButtonBg2');
        };
        this.onMouseOut = function () {
            _this.arrow.css({
                borderColor: 'transparent transparent transparent #66cc33'
            });
            _this.bg.removeClass('tf-navButtonBg2');
            _this.bg.addClass('tf-navButtonBg1');
        };
        this.onMouseDown = function () {
            $(_this).trigger('onNavButtonClick', { index: _this.index });
        };
        this.element = $(document.createElement('div'));
        this.element.addClass('rel tf-navButton');
        this.element.css({
            width: width + '%'
        });
        this.index = index;
        this.id = id;
        this.bg = $(document.createElement('div'));
        this.element.append(this.bg);
        this.bg.addClass('tf-navButtonBg1');
        this.tf = $(document.createElement('div'));
        this.element.append(this.tf);
        this.tf.addClass('tf-navButtonLabel');
        this.tf.text(label);
        this.arrow = $(document.createElement('div'));
        this.element.append(this.arrow);
        this.arrow.addClass('tf-navButtonArrow');
        this.element.on('mouseenter', this.onMouseOver);
        this.element.on('mouseleave', this.onMouseOut);
        this.element.on('click', this.onMouseDown);
        this.element.css('cursor', 'pointer');
    }
    NavButton.prototype.select = function () {
        this.element.off('mouseenter', this.onMouseOver);
        this.element.off('mouseleave', this.onMouseOut);
        this.element.off('click', this.onMouseDown);
        this.element.css('cursor', 'default');
        this.onMouseOver();
    };
    NavButton.prototype.deselect = function () {
        this.element.on('mouseenter', this.onMouseOver);
        this.element.on('mouseleave', this.onMouseOut);
        this.element.on('click', this.onMouseDown);
        this.element.css('cursor', 'pointer');
        this.onMouseOut();
    };
    return NavButton;
}());
exports.default = NavButton;
//# sourceMappingURL=navButton.js.map