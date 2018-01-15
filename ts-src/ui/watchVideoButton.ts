declare var $:any;
declare var TweenMax:any;

import UiElement from './UiElement';

export default class WatchVideoButton extends UiElement{
    //public element;
    private textfield;
    private color1:string;
    private color2:string;
    private icon;
    private arrow;

    constructor (label:string = 'Watch Video', color1:string = '#6f6f6f', color2:string = '#66cc33'){
        super();
        this.color1 = color1;
        this.color2 = color2;
   // this.element = $(document.createElement('div'));
        this.element.css({
            position:'absolute',
            cursor:'pointer', overflow:'hidden',
            width:125, height:20
        });
        this.textfield = $(document.createElement('div'));
        this.textfield.addClass('tf-watchVideoButton');
        this.element.append(this.textfield);
        this.textfield.text(label);
        this.textfield.css({
            color:this.color1
        })

        this.icon = $(document.createElement('div'));
        this.element.append(this.icon);
        this.icon.addClass('tf-watchVideoIcon');
        this.icon.css({
            backgroundColor:this.color1
        });

        this.arrow = $(document.createElement('div'));
        this.icon.append(this.arrow);
        this.arrow.addClass('tf-watchVideoArrow');

        this.element.on('mouseenter', this.onMouseOver);
        this.element.on('mouseleave', this.onMouseOut);
    }

    private onMouseOver = () =>{
        TweenMax.to(this.textfield, 0.2, {overwrite:'all', color:this.color2});
        TweenMax.to(this.icon, 0.2, {overwrite:'all', backgroundColor:this.color2});
    }

    private onMouseOut = () =>{
        TweenMax.to(this.textfield, 0.1, {overwrite:'all', color:this.color1});
        TweenMax.to(this.icon, 0.1, {overwrite:'all', backgroundColor:this.color1});
    }

    public animateIn (delay:number = 0){
        TweenMax.set(this.icon, {scale:0});
        TweenMax.set(this.textfield, {y:'130%'});
        TweenMax.to(this.icon, 0.2, {overwrite:'all', delay:delay, scale:1});
        TweenMax.to(this.textfield, 0.2, {overwrite:'all', delay:delay, y:'0%'});

    }

    public animateOut (delay:number = 0){
        
    }

}