"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Maths = /** @class */ (function () {
    function Maths() {
    }
    Maths.getXYFromAngle = function (x, y, angle, distance) {
        var result = { x: 0, y: 0 };
        result.x = Math.round(Math.cos(angle * Math.PI / 180) * distance + x);
        result.y = Math.round(Math.sin(angle * Math.PI / 180) * distance + y);
        return result;
    };
    ;
    Maths.getAngle = function (p1, p2, useRadians) {
        var u = false;
        if (useRadians != undefined)
            u = useRadians;
        if (u)
            return Math.atan2(p2.y - p1.y, p2.x - p1.x);
        else
            return Math.atan2(p2.y - p1.y, p2.x - p1.x) * 180 / Math.PI;
    };
    ;
    Maths.getRandomNumber = function (min, max) {
        if (min === void 0) { min = 0; }
        if (max === void 0) { max = 1; }
        return (Math.random() * (max - min) + min);
    };
    ;
    Maths.getRandomInt = function (min, max) {
        if (min === void 0) { min = 0; }
        if (max === void 0) { max = 0; }
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    ;
    Maths.degToRad = function (degrees) {
        return degrees * Math.PI / 180;
    };
    ;
    Maths.radToDeg = function (rad) {
        return rad * 180 / Math.PI;
    };
    ;
    Maths.findIntersection = function (p1, p2, p3, p4) {
        var x1 = p1.x;
        var y1 = p1.y;
        var x2 = p2.x;
        var y2 = p2.y;
        var x3 = p3.x;
        var y3 = p3.y;
        var x4 = p4.x;
        var y4 = p4.y;
        var ua, ub, denom = (y4 - y3) * (x2 - x1) - (x4 - x3) * (y2 - y1);
        if (denom == 0) {
            return null;
        }
        ua = ((x4 - x3) * (y1 - y3) - (y4 - y3) * (x1 - x3)) / denom;
        ub = ((x2 - x1) * (y1 - y3) - (y2 - y1) * (x1 - x3)) / denom;
        return {
            x: x1 + ua * (x2 - x1),
            y: y1 + ua * (y2 - y1),
            seg1: ua >= 0 && ua <= 1,
            seg2: ub >= 0 && ua <= 1
        };
    };
    ;
    Maths.getPercentageFromNumber = function (val, max, min) {
        var percent = (val - min) / (max - min) * 100;
        return percent;
    };
    ;
    Maths.getNumberFromPercentage = function (perc, max, min) {
        var absolute = (perc * (max - min) / 100) + min;
        return absolute;
    };
    ;
    Maths.map = function (value, low1, high1, low2, high2) {
        return low2 + (high2 - low2) * (value - low1) / (high1 - low1);
    };
    Maths.lerp = function (a, b, t) {
        return a + (b - a) * t;
    };
    Maths.lerpV2 = function (a, b, t) {
        return {
            x: a.x + (b.x - a.x) * t,
            y: a.y + (b.y - a.y) * t
        };
    };
    Maths.getPixel = function (imgData, index) {
        var i = index * 4, d = imgData.data;
        return [d[i], d[i + 1], d[i + 2], d[i + 3]]; // returns array [R,G,B,A]
    };
    Maths.polarToXy = function (h, v) {
    };
    Maths.loop = function (val, min, max) {
        return ((val - min) % (max - min + 1) + (max - min + 1)) % (max - min + 1) + min;
    };
    Maths.scaleProportionally = function (srcwidth, srcheight, targetwidth, targetheight, fLetterBox) {
        if (fLetterBox === void 0) { fLetterBox = false; }
        var result = { width: 0, height: 0, fScaleToTargetWidth: true, targetleft: 0, targettop: 0 };
        if ((srcwidth <= 0) || (srcheight <= 0) || (targetwidth <= 0) || (targetheight <= 0)) {
            return result;
        }
        // scale to the target width
        var scaleX1 = targetwidth;
        var scaleY1 = (srcheight * targetwidth) / srcwidth;
        // scale to the target height
        var scaleX2 = (srcwidth * targetheight) / srcheight;
        var scaleY2 = targetheight;
        // now figure out which one we should use
        var fScaleOnWidth = (scaleX2 > targetwidth);
        if (fScaleOnWidth) {
            fScaleOnWidth = fLetterBox;
        }
        else {
            fScaleOnWidth = !fLetterBox;
        }
        if (fScaleOnWidth) {
            result.width = Math.floor(scaleX1);
            result.height = Math.floor(scaleY1);
            result.fScaleToTargetWidth = true;
        }
        else {
            result.width = Math.floor(scaleX2);
            result.height = Math.floor(scaleY2);
            result.fScaleToTargetWidth = false;
        }
        result.targetleft = Math.floor((targetwidth - result.width) / 2);
        result.targettop = Math.floor((targetheight - result.height) / 2);
        return result;
    };
    ;
    Maths.distance = function (x1, y1, x2, y2) {
        var a = x1 - x2;
        var b = y1 - y2;
        return Math.sqrt(a * a + b * b);
    };
    Maths.distanceTwoPoint = function (p1, p2) {
        var dx = p1.x - p2.x;
        var dy = p1.y - p2.y;
        return Math.sqrt(dx * dx + dy * dy);
    };
    ;
    Maths.invertNumber = function (number) {
        return number - Math.abs(number);
    };
    ;
    Maths.clamp = function (number, min, max) {
        return Math.max(min, Math.min(number, max));
    };
    ;
    Maths.formatTime = function (d) {
        d = Number(d);
        var h = Math.floor(d / 3600);
        var m = Math.floor(d % 3600 / 60);
        var s = Math.floor(d % 3600 % 60);
        return ((h > 0 ? h + ":" + (m < 10 ? "0" : "") : "") + m + ":" + (s < 10 ? "0" : "") + s);
    };
    Maths.shuffleArray = function (array) {
        var counter = array.length;
        while (counter > 0) {
            var index = Math.floor(Math.random() * counter);
            counter--;
            var temp = array[counter];
            array[counter] = array[index];
            array[index] = temp;
        }
        return array;
    };
    Maths.superscript = function (t) {
        t = t.replace(/™/g, '<sup style="vertical-align: baseline; top:-0.29em; font-size:14px; position:relative; font-family: Helvetica;">™</sup>');
        t = t.replace(/®/g, '<sup style="vertical-align: baseline; top:-0.28em; font-size:12px; position:relative; font-family: Helvetica;">®</sup>');
    };
    Maths.rgbToHsl = function (r, g, b) {
        r /= 255, g /= 255, b /= 255;
        var max = Math.max(r, g, b), min = Math.min(r, g, b);
        var h, s, l = (max + min) / 2;
        if (max == min) {
            h = s = 0; // achromatic
        }
        else {
            var d = max - min;
            s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
            switch (max) {
                case r:
                    h = (g - b) / d + (g < b ? 6 : 0);
                    break;
                case g:
                    h = (b - r) / d + 2;
                    break;
                case b:
                    h = (r - g) / d + 4;
                    break;
            }
            h /= 6;
        }
        return [h, s, l];
    };
    Maths.smoothstep = function (min, max, value) {
        var x = Math.max(0, Math.min(1, (value - min) / (max - min)));
        return x * x * (3 - 2 * x);
    };
    Maths.step = function (edge, value) {
        return value < edge ? 0 : 1;
    };
    Maths.mix = function (a, b, alpha) {
        return a * (1 - alpha) + b * alpha;
    };
    Maths.fract = function (value) {
        return value - Math.floor(value);
    };
    Maths.mod = function (value, n) {
        return (value % n + n) % n;
    };
    Maths.exponentialIn = function (t) {
        return t == 0.0 ? t : Math.pow(2.0, 10.0 * (t - 1.0));
    };
    Maths.exponentialOut = function (t) {
        return t == 1.0 ? t : 1.0 - Math.pow(2.0, -10.0 * t);
    };
    Maths.exponentialInOut = function (t) {
        return t == 0.0 || t == 1.0
            ? t
            : t < 0.5
                ? +0.5 * Math.pow(2.0, (20.0 * t) - 10.0)
                : -0.5 * Math.pow(2.0, 10.0 - (t * 20.0)) + 1.0;
    };
    Maths.sineOut = function (t) {
        var HALF_PI = 1.5707963267948966;
        return Math.sin(t * HALF_PI);
    };
    Maths.circularInOut = function (t) {
        return t < 0.5
            ? 0.5 * (1.0 - Math.sqrt(1.0 - 4.0 * t * t))
            : 0.5 * (Math.sqrt((3.0 - 2.0 * t) * (2.0 * t - 1.0)) + 1.0);
    };
    Maths.cubicIn = function (t) {
        return t * t * t;
    };
    Maths.cubicOut = function (t) {
        var f = t - 1.0;
        return f * f * f + 1.0;
    };
    Maths.cubicInOut = function (t) {
        return t < 0.5
            ? 4.0 * t * t * t
            : 0.5 * Math.pow(2.0 * t - 2.0, 3.0) + 1.0;
    };
    Maths.quadraticOut = function (t) {
        return -t * (t - 2.0);
    };
    Maths.quarticOut = function (t) {
        return Math.pow(t - 1.0, 3.0) * (1.0 - t) + 1.0;
    };
    Maths.wrap = function (v, min, max) {
        return (((v - min) % (max - min)) + (max - min)) % (max - min) + min;
    };
    Maths.HALF_PI = 1.5707963267948966;
    Maths.TWO_PI = 6.283185307179586;
    return Maths;
}());
exports.default = Maths;
//# sourceMappingURL=Maths.js.map