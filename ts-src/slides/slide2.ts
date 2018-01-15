/*
    @module type: Sub Slides View
    @slide: 2
    @dependencies: BaseSubSlide / SubSlideNav
    @version: 1.0
*/

/* global vars/imports */
declare var TweenMax:any;
declare var $:any;
import Globals from '../globals';
import TopFeatureSlide from './topFeatureSlide';

/* slide dependencies */
import BaseSubSlide from '../slides/subSlides/baseSubSlide';
import SubSlideNav from './subSlides/subSlideNav';

export default class Slide2 extends TopFeatureSlide{
    private slideId:string = 'tf-slide2-'
    private slides:Array<any> =[];
    private nav:SubSlideNav;
    private currentIndex:number = -1;

    constructor(index:number, data){
        super(index, data);
        this.element.css({
            backgroundColor:'black'
        });
        this.createSlides();
        this.createNav();
        //this.setTo(0);
    }

     /*-----------------------------------------------------------------------------------------------------------------------------
        @createSlides()
        *element: html div container id
        *imgSrc: can be from manifest or url
        *navLabel: subnav button label
        *textTop: text container top position
        *textWidth: text container width

        @Note BaseSubSlide exposes
            *element: html div element
            *h1: html div element for headline
            *textContainer: html div element text container
    ------------------------------------------------------------------------------------------------------------------------------*/

    private createSlides (){
        //slide 0
        let slide:BaseSubSlide = this.addSlide({
            element:'tf-slide2-landing',
            imgSrc: Globals.manifest['bg1'],
            navLabel:'None',
            textTop:200,
            textWidth:420
        });
        /* if needed further tuning */
        slide.h1.width(200);

        //slide 1
        slide = this.addSlide({
            element:'tf-slide2-sub1',
            imgSrc: Globals.manifest['bg2'],
            navLabel:'Impeller',
            textTop:200,
            textWidth:420
        });

        //slide 1
        slide = this.addSlide({
            element:'tf-slide2-sub2',
            imgSrc: Globals.manifest['bg3'],
            navLabel:'STEERING FOR MAXNESS',
            textTop:200,
            textWidth:420
        });
    }

     /*-----------------------------------------------------------------------------------------------------------------------------
        @createNav()
        *Creates side sub nav. Index based
        *Modify this.nav.x/y for sub nav positioning. Additional spacing may be needed between nav buttons
    ------------------------------------------------------------------------------------------------------------------------------*/

    private createNav (){
        this.nav = new SubSlideNav(this.slides);
        this.nav.element.attr('id', this.slideId + "subSideNav");
        $(this.nav).on('onSubNavClick', this.onSubNavClick);
        this.element.append(this.nav.element);
        this.nav.x = Globals.contentWidth - 200;// based on longest subnav button label
        this.nav.y = 40;
    }


    /*-----------------------------------------------------------------------------------------------------------------------------
        CORE METHODS
    ------------------------------------------------------------------------------------------------------------------------------*/

    public animateIn (delay:number = 0){
        super.animateIn(delay);
    }

    public animateOut (delay:number = 0){
        super.animateOut(delay);
    }

    /*-----------------------------------------------------------------------------------------------------------------------------
        SLIDE METHODS *no modify*
    ------------------------------------------------------------------------------------------------------------------------------*/

    private setSlideTo(value:number){
        let prevSlide:BaseSubSlide = this.slides[ this.currentIndex + 1].slide as BaseSubSlide;
        prevSlide.animateOut(0.0);
        let slide:BaseSubSlide = this.slides[value + 1].slide as BaseSubSlide;
        slide.animateIn(0.3);
    }
    
    private onSubNavClick = (e,data) =>{
        if(data.index === this.currentIndex){
            this.setSlideTo(-1);
            this.nav.deselect(data.index);
            this.currentIndex = -1;
        }else{
            this.setSlideTo(data.index);
            this.nav.select(data.index);
            this.currentIndex = data.index;
        }
    }

    private addSlide (options:any){
        let s:BaseSubSlide = new BaseSubSlide(options);
        let obj = {
            slide: s,
            data: options
        }
        if(this.slides.length >=1){
            s.element.css({
                opacity:0
            })
        }
        this.slides.push(obj);
        return s;
    }
}