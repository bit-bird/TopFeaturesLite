export default class Maths{
    static HALF_PI:number = 1.5707963267948966;
	static TWO_PI:number = 6.283185307179586;

	static getXYFromAngle (x:number, y:number, angle:number, distance:number){
		var result = {x:0, y:0};
		result.x = Math.round(Math.cos(angle * Math.PI / 180) * distance + x);
		result.y = Math.round(Math.sin(angle * Math.PI / 180) * distance + y);
		return result;
	};

	static getAngle (p1:any, p2:any, useRadians:boolean){
		var u=false;
		if(useRadians != undefined) u = useRadians;

		if(u)
			return Math.atan2(p2.y - p1.y, p2.x - p1.x);
		else
			return Math.atan2(p2.y - p1.y, p2.x - p1.x) * 180 / Math.PI;
	};

    static getRandomNumber (min:number = 0, max:number = 1):number {
        return (Math.random() * (max - min) + min);
    };

    static getRandomInt (min:number = 0, max:number = 0):number {
		return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    
    static degToRad (degrees:number):number {
        return degrees * Math.PI / 180;
      };
      
    static radToDeg (rad:number):number {
        return rad * 180 / Math.PI;
    };

    static findIntersection (p1, p2, p3, p4):object{
			let x1 = p1.x; var y1 = p1.y;
			let x2 = p2.x; var y2 = p2.y;
			let x3 = p3.x; var y3 = p3.y;
			let x4 = p4.x; var y4 = p4.y;

			let ua, ub, denom = (y4 - y3)*(x2 - x1) - (x4 - x3)*(y2 - y1);
			if (denom == 0) {
				return null;
			}
			ua = ((x4 - x3)*(y1 - y3) - (y4 - y3)*(x1 - x3))/denom;
			ub = ((x2 - x1)*(y1 - y3) - (y2 - y1)*(x1 - x3))/denom;
			return {
				x: x1 + ua*(x2 - x1),
				y: y1 + ua*(y2 - y1),
				seg1: ua >= 0 && ua <= 1,
				seg2: ub >= 0 && ua <= 1
			};
    };
    
    static getPercentageFromNumber(val:number, max:number, min:number):number{
			let percent = (val - min) / (max - min) * 100;
			return percent;
		};

	static getNumberFromPercentage (perc:number, max:number, min:number):number{
        let absolute = (perc * (max - min) / 100) + min;
		 return absolute;
	};

	static map (value:number, low1:number, high1:number, low2:number, high2:number) {
		return low2 + (high2 - low2) * (value - low1) / (high1 - low1);
	}

	static lerp ( a:number, b:number, t:number):number{
		return a + (b - a) * t;
	}
	
	static lerpV2 (a, b, t){
		return {
			x: a.x + (b.x - a.x) * t,
			y: a.y + (b.y - a.y) * t
		}
  }
    
  	static getPixel (imgData, index) {
		let i = index*4, d = imgData.data;
		return [d[i],d[i+1],d[i+2],d[i+3]] // returns array [R,G,B,A]
	}
	
	static polarToXy (h:number, v:number){

	}

	static loop(val:number, min:number, max:number) {
		return ((val - min) % (max - min + 1) + (max - min + 1)) % (max - min + 1) + min;
	}

	static scaleProportionally (srcwidth:number, srcheight:number, targetwidth:number, targetheight:number, fLetterBox:boolean = false) {
		var result = { width: 0, height: 0, fScaleToTargetWidth: true, targetleft:0, targettop:0 };

		 if((srcwidth <= 0) || (srcheight <= 0) || (targetwidth <= 0) || (targetheight <= 0)){
			  return result;
		 }

		 // scale to the target width
		 let scaleX1 = targetwidth;
		 let scaleY1 = (srcheight * targetwidth) / srcwidth;

		 // scale to the target height
		 let scaleX2 = (srcwidth * targetheight) / srcheight;
		 let scaleY2 = targetheight;

		 // now figure out which one we should use
		 let fScaleOnWidth = (scaleX2 > targetwidth);
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

	static distance (x1:number, y1:number, x2:number, y2:number):number{
		var a = x1 - x2
		var b = y1 - y2
		return Math.sqrt( a*a + b*b );
	}

	static distanceTwoPoint (p1:any, p2:any) {
		var dx = p1.x-p2.x;
		var dy = p1.y-p2.y;
		return Math.sqrt(dx * dx + dy * dy);
   };

   static invertNumber(number:number){
		return number-Math.abs(number);
	};

	static clamp (number:number, min:number, max:number) {
		return Math.max(min, Math.min(number, max));
	};

	static formatTime (d){
        d = Number(d);
		var h = Math.floor(d / 3600);
		var m = Math.floor(d % 3600 / 60);
		var s = Math.floor(d % 3600 % 60);
		return ((h > 0 ? h + ":" + (m < 10 ? "0" : "") : "") + m + ":" + (s < 10 ? "0" : "") + s)  ; 
	}
	
	static shuffleArray (array){
		var counter = array.length;
		while (counter > 0) {
			var index = Math.floor(Math.random() * counter);
			counter--;
			var temp = array[counter];
			array[counter] = array[index];
			array[index] = temp;
		}

		return array;
	}

	static superscript (t:string){
		t = t.replace(/™/g,'<sup style="vertical-align: baseline; top:-0.29em; font-size:14px; position:relative; font-family: Helvetica;">™</sup>');
		t = t.replace(/®/g,'<sup style="vertical-align: baseline; top:-0.28em; font-size:12px; position:relative; font-family: Helvetica;">®</sup>');
	}

	static rgbToHsl (r, g, b) {
		r /= 255, g /= 255, b /= 255;
  
		var max = Math.max(r, g, b), min = Math.min(r, g, b);
		var h, s, l = (max + min) / 2;
  
		if (max == min) {
		  h = s = 0; // achromatic
		} else {
		  var d = max - min;
		  s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
  
		  switch (max) {
			case r: h = (g - b) / d + (g < b ? 6 : 0); break;
			case g: h = (b - r) / d + 2; break;
			case b: h = (r - g) / d + 4; break;
		  }
  
		  h /= 6;
		}
  
		return [ h, s, l ];
	  }

	static smoothstep (min:number, max:number, value:number){
		var x = Math.max(0, Math.min(1, (value-min)/(max-min)));
		return x*x*(3 - 2*x);
	}
	
	static step(edge, value) {
		return value < edge ? 0 : 1
	}
	
	static mix (a, b, alpha) {
		return a * (1 - alpha) + b * alpha
	}
	
	static fract (value) {
		return value - Math.floor(value)
	}

	static mod (value, n) {
		return (value % n + n) % n
	}
	
	static exponentialIn (t){
		return t == 0.0 ? t : Math.pow(2.0, 10.0 * (t - 1.0));
	}
	
	static exponentialOut (t) {
		return t == 1.0 ? t : 1.0 - Math.pow(2.0, -10.0 * t);
	 }
	
	 static exponentialInOut (t){
		return t == 0.0 || t == 1.0
		  ? t
		  : t < 0.5
			? +0.5 * Math.pow(2.0, (20.0 * t) - 10.0)
			: -0.5 * Math.pow(2.0, 10.0 - (t * 20.0)) + 1.0;
	}
	
	static sineOut (t) {
		var HALF_PI = 1.5707963267948966;
		return Math.sin(t * HALF_PI);
	}
	
	static circularInOut (t) {
		return t < 0.5
			? 0.5 * (1.0 - Math.sqrt(1.0 - 4.0 * t * t))
			: 0.5 * (Math.sqrt((3.0 - 2.0 * t) * (2.0 * t - 1.0)) + 1.0);
	}
	
	static cubicIn  (t){
		return t * t * t;
	}
	
	static cubicOut (t){
		var f = t - 1.0;
		return f * f * f + 1.0;
	}
	
	static cubicInOut (t){
		return t < 0.5
		  ? 4.0 * t * t * t
		  : 0.5 * Math.pow(2.0 * t - 2.0, 3.0) + 1.0;
	}
	
	static quadraticOut (t){
		return -t * (t - 2.0);
	}
	
	static quarticOut (t) {
		return Math.pow(t - 1.0, 3.0) * (1.0 - t) + 1.0;
	}
    
	static wrap (v, min, max) {
			return (((v - min) % (max - min)) + (max - min)) % (max - min) + min;
	}
}