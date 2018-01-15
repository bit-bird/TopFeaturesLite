declare var TweenMax:any;
declare var $:any;

import Globals from '../globals';
import TopFeatureSlide from './topFeatureSlide';
import WatchVideoButton from '../ui/watchVideoButton';

export default class Slide1 extends TopFeatureSlide{
    private title = $('#tf-slide1-title');
    private vehicle = $('#tf-slide1-vehicle');
    private text = $('#tf-slide1-text');
    private btn:WatchVideoButton;

    constructor(index:number, data){
        super(index, data);

        /*
            Configure styles/positions
        */
        this.configureStyles();

        this.btn = new WatchVideoButton();
        this.element.append(this.btn.element);
        this.btn.x = 30;
        this.btn.y = 410;
        this.btn.element.on('click', ()=>{
            Globals.openVideo('video1');
        });

        this.text.find('span').css({
            lineHeight:'15px'
        })
    }

    private configureStyles(){
        this.title.css({
            left:25,
            top:25
        });

        this.vehicle.css({
            left:410
        });

        this.text.css({
            width:420,
            left:25,
            top:130
        });
    }

    public animateIn (delay:number = 0){
         TweenMax.set(this.vehicle, {x:this.vehicle.width()});
         TweenMax.to(this.vehicle, 0.65, {x:0, overwrite:'all', delay:delay, ease:eval('Power3.easeOut')});
        
         TweenMax.set(this.title, {x:-Globals.contentWidth});
         TweenMax.to(this.title, 0.65, {x:0, overwrite:'all', delay:delay, ease:eval('Power3.easeOut')});

         this.btn.animateIn(delay + 0.2);

         super.animateIn(delay);
    }
    
    public animateOut (delay:number = 0){
        //super.animateOut(delay);
        super.animateOut(delay);
    }
}