/* global imports/vars */
declare var $:any;
import {TweenMax, Power3, Expo, Circ} from "gsap";
import Globals from '../../globals';


export default class BaseSubSlide {
    public element;
    public img:HTMLImageElement;
    public textContainer;
    public h1;

    constructor(options:any){
        this.element = $('#' + options.element);
        this.element.css({
            position:'absolute',
            width:'100%', height:'100%',
            backgroundColor:'black'
        });

        this.img = document.createElement('img');
        this.img.className = 'abs';
        this.img.src = options.imgSrc || '';
        this.element.prepend(this.img);

        this.textContainer = this.element.find('.textContainer');
        this.textContainer.width(500);
        this.textContainer.css({
            left:30,
            top: options.textTop || 0,
            width: options.textWidth || 300
        });

        let h1 = this.textContainer.find('h1');
        this.h1 = h1;
        h1.css({
            color:'white', fontSize:'40px'
        });

        let span = this.textContainer.find('span');
        span.css({
            color:Globals.lightGrey
        });
       
    }

    public animateIn (delay:number = 0){
        this.textContainer.find('*').each((i,e)=>{
            let d:number = (i * 0.025) + 0.2;
            TweenMax.set(e, {opacity:0});
            TweenMax.to(e, 0.85, {opacity:1, delay:delay + d, ease: Power3.easeOut});
        });
        TweenMax.to(this.element, 0.3, {opacity:1, delay:delay, ease: Power3.easeOut});
        this.element.show();
    }

    public animateOut (delay:number = 0){
        TweenMax.to(this.element, 0.25, {opacity:0, delay:delay, ease: Power3.easeOut, onComplete:()=>{
            this.element.hide();
        }});
    }
}