"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var WatchVideoButton = /** @class */ (function () {
    function WatchVideoButton(label, color1, color2) {
        if (label === void 0) { label = 'Watch Video'; }
        if (color1 === void 0) { color1 = '#6f6f6f'; }
        if (color2 === void 0) { color2 = '#66cc33'; }
        this.onMouseOver = function () {
        };
        this.onMouseOut = function () {
        };
        this.onMouseDown = function () {
        };
        this.element = $(document.createElement('div'));
        this.element.css({
            position: 'absolute'
        });
        this.textfield = $(document.createElement('div'));
        this.textfield.addClass('tf-watchVideoButton');
        this.element.append(this.textfield);
        this.textfield.text(label);
    }
    Object.defineProperty(WatchVideoButton.prototype, "x", {
        get: function () {
            return 0;
        },
        set: function () {
            this.element.({
                left: x
            });
        },
        enumerable: true,
        configurable: true
    });
    return WatchVideoButton;
}());
exports.default = WatchVideoButton;
//# sourceMappingURL=watchVideoButton.js.map