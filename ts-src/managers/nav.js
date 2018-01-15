"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var navButton_1 = require("../ui/navButton");
var globals_1 = require("../globals");
var TFNav = /** @class */ (function () {
    function TFNav() {
        var _this = this;
        this.element = $('#tf-nav');
        this.onNavButtonClicked = function (e, data) {
            $(_this).trigger('onNavClicked', { index: data.index });
        };
        var w = Math.round(100 / globals_1.default.slides.length);
        this.btns = [];
        $.each(globals_1.default.slides, function (i, e) {
            var btn = new navButton_1.default(w, i, e.id, e.navLabel);
            _this.btns.push(btn);
            _this.element.append(btn.element);
            $(btn).on('onNavButtonClick', _this.onNavButtonClicked);
        });
    }
    TFNav.prototype.setButton = function (index) {
        if (this.currentBtn)
            this.currentBtn.deselect();
        var btn = this.btns[index];
        btn.select();
        this.currentBtn = btn;
    };
    return TFNav;
}());
exports.default = TFNav;
//# sourceMappingURL=nav.js.map