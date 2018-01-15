/* global vars/imports */
declare var $:any;
import Globals from '../../globals';
import {TweenMax, Power3, Expo, Circ} from "gsap";
import UiElement from '../../ui/UiElement';
import SubSideNavButton from './subSideNavButton';

export default class SubSlideNav extends UiElement{

    private btns:Array<SubSideNavButton>;
    private rolloutTimer;
    private rolloutTime:number = 250;
    private state:string = 'normal';
    private currentBtn:SubSideNavButton;

    constructor(slides){
        super();

        this.btns = [];

        this.element.css({
            //position:'relative'
        });
        let count:number = 0;
        $.each(slides, (i,e) => {
            if(i > 0){
                let s = new SubSideNavButton(count, e.data.navLabel);
                this.element.append(s.element);
                s.element.on('mouseenter', this.onBtnOver);
                s.element.on('mouseleave', this.onBtnOut);
                s.element.on('click', this.onBtnClick);
                this.btns.push(s);
                count++;
            }
        });
    }

    private onBtnOver = (e) =>{
        let index = $(e.currentTarget).data('index');
        let btn = this.btns[index] as SubSideNavButton;
      
        btn.lighten();
        $.each(this.btns, (i,b)=>{
            
            if(this.state === 'normal'){
                if(b != btn)b.darken();
            }

            if(this.state === 'on'){
                if(b != this.currentBtn && b != btn) b.darken();
            }
        });
        clearTimeout(this.rolloutTimer);

       // btn.onMouseOver();
    }

    private onBtnOut = (e) =>{
        this.rolloutTimer = setTimeout(()=>{
            let index = $(e.currentTarget).data('index');
            let btn = this.btns[index] as SubSideNavButton;
        
            $.each(this.btns, (i,b)=>{
                
                if(this.state === 'normal'){
                    b.lighten();
                }

                if(this.state === 'on'){
                    if( b != this.currentBtn)b.darken();
                }
            });
        }, this.rolloutTime);
    }

    private onBtnClick = (e) =>{
        let index = $(e.currentTarget).data('index');
        $(this).trigger('onSubNavClick', {index:index});
       
    }

    public select = (index:number) =>{
        let btn = this.btns[index];
      
        $.each(this.btns, (i,b)=>{
            if(b != btn){
                b.deselect();
                b.darken();
                b.eventsOn();
            }
        });
        btn.select();
        this.state = 'on';
        this.currentBtn = btn;
    }

    public deselect = (index:number) =>{
        let btn = this.btns[index];
        $.each(this.btns, (i,b)=>{
            b.reset();
        });
        this.state = 'normal';
        this.currentBtn = null;
    }
}