declare var TweenMax:any;
declare var $:any;

import Globals from './globals';
import DeviceChecker from './utils/deviceCheck';
import Maths from './utils/Maths';
import TopFeatures from './topfeatures';
import ImageLoader from './utils/imageLoader';

window.onload = function (){
    var module:TopFeatures;
    var doLoadManifest:boolean = false;
    var loader:ImageLoader;

    function init (){
        //Globals.responsive=true;//test only
        checkDevice();
        loadConfig();
    }

    function loadConfig(){
        var xobj = new XMLHttpRequest();
        xobj.overrideMimeType("application/json");
        xobj.open('GET', '/build/config.json' , true); 
        xobj.onreadystatechange = function () {
            if (xobj.readyState == 4 ) {
                // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
                parseConfig(xobj.responseText);
            }
        };
        xobj.send(null); 
    }

    function parseConfig(data){
        let j = JSON.parse( data );
        if(j.responsive === true){
            Globals.responsive=true;
            checkResponsive();
        }

        $.each(j.slides, (i,e)=>{
            Globals.slides.push(e);
        });

        $.each(j.videos, (i,e)=>{
            Globals.videos.push(e);
        });

        if(j.manifest && j.manifest.length){
            loader = new ImageLoader();
            Globals.manifest = loader.preload(j.manifest);
            $(loader).on('complete', onManifestComplete);
        }else{
            start();
        }
        
    }

    function onManifestComplete (){
        $(loader).off('complete');
        start();
    }

    function start (){
        document.getElementById('tf-stage').style.visibility = 'visible';
        resize();
        module = new TopFeatures();
    }
    
    function render (time:number = 0){
       // requestAnimationFrame(render);
    } 

    function resize (){
        if(Globals.responsive){
            let d:number = window.innerWidth / Globals.stageWidth;
            TweenMax.set("#app", {scale:d});
        }
    }

    function checkDevice(){
        let check = DeviceChecker.check();
        Globals.isMobile = check.isMobile;
        Globals.isTouch = check.isTouch;
        Globals.isTablet = check.isTablet;
        Globals.browser = check.browser;
        Globals.os = check.os;
        if(Globals.isTablet)Globals.responsive=true;
        checkResponsive();
    }

    function checkResponsive(){
        if(Globals.responsive){
            window.onresize = resize;
            TweenMax.set("#app", {transformOrigin:'0% 0%'});
        }
    }

    
    init();
}
