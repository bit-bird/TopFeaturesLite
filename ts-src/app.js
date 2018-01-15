"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var globals_1 = require("./globals");
var deviceCheck_1 = require("./utils/deviceCheck");
var topfeatures_1 = require("./topfeatures");
window.onload = function () {
    var module;
    function init() {
        //Globals.responsive=true;//test only
        checkDevice();
        loadConfig();
    }
    function loadConfig() {
        var xobj = new XMLHttpRequest();
        xobj.overrideMimeType("application/json");
        xobj.open('GET', '/build/config.json', true);
        xobj.onreadystatechange = function () {
            if (xobj.readyState == 4) {
                // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
                parseConfig(xobj.responseText);
            }
        };
        xobj.send(null);
    }
    function parseConfig(data) {
        var j = JSON.parse(data);
        if (j.responsive === true) {
            globals_1.default.responsive = true;
            checkResponsive();
        }
        $.each(j.slides, function (i, e) {
            globals_1.default.slides.push(e);
        });
        document.getElementById('app').style.visibility = 'visible';
        resize();
        module = new topfeatures_1.default();
    }
    function render(time) {
        if (time === void 0) { time = 0; }
        // requestAnimationFrame(render);
    }
    function resize() {
        if (globals_1.default.responsive) {
            var d = window.innerWidth / globals_1.default.stageWidth;
            TweenMax.set("#app", { scale: d });
        }
    }
    function checkDevice() {
        var check = deviceCheck_1.default.check();
        globals_1.default.isMobile = check.isMobile;
        globals_1.default.isTouch = check.isTouch;
        globals_1.default.isTablet = check.isTablet;
        globals_1.default.browser = check.browser;
        globals_1.default.os = check.os;
        if (globals_1.default.isTablet)
            globals_1.default.responsive = true;
        checkResponsive();
    }
    function checkResponsive() {
        if (globals_1.default.responsive) {
            window.onresize = resize;
            TweenMax.set("#app", { transformOrigin: '0% 0%' });
        }
    }
    init();
};
//# sourceMappingURL=app.js.map