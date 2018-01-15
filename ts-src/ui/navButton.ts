declare var TweenMax:any;
declare var $:any;

import Globals from '../globals';

export default class NavButton {
    public element;
    public index:number;
    public id:string;

    private bg;
    private tf;
    private arrow;

    constructor(width:number, index:number, id:string, label:string){
        this.element = $(document.createElement('div'));
        this.element.addClass('rel tf-navButton');
        this.element.css({
            width:width +'%'
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

    private onMouseOver = () =>{
        this.arrow.css({
            borderColor: 'transparent transparent transparent white'
        });

        this.bg.removeClass('tf-navButtonBg1');
        this.bg.addClass('tf-navButtonBg2');
    }

    private onMouseOut = () =>{
        this.arrow.css({
            borderColor: 'transparent transparent transparent #66cc33'
        });

        this.bg.removeClass('tf-navButtonBg2');
        this.bg.addClass('tf-navButtonBg1');
    }

    private onMouseDown = () =>{
        $(this).trigger('onNavButtonClick',{index:this.index});
    }

    public select (){
        this.element.off('mouseenter', this.onMouseOver);
        this.element.off('mouseleave', this.onMouseOut);
        this.element.off('click', this.onMouseDown);
        this.element.css('cursor', 'default');
        this.onMouseOver();
    }

    public deselect (){
        this.element.on('mouseenter', this.onMouseOver);
        this.element.on('mouseleave', this.onMouseOut);
        this.element.on('click', this.onMouseDown);
        this.element.css('cursor', 'pointer');
        this.onMouseOut();
    }
    
}