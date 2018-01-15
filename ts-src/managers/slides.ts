declare var $:any;

import Globals from '../globals';
import {Slides} from '../slides/slides';
import TopFeatureSlide from '../slides/topFeatureSlide';
import {TweenMax, Power3, Expo, Circ} from "gsap";

export default class TFSlideManager {
    private element = $('#tf-slideContainer');
    private slides:Array<TopFeatureSlide>;
    private currentSlide:TopFeatureSlide;

    constructor(){
        this.slides=[];
        $.each(Globals.slides, (i,e)=>{
            let slide:TopFeatureSlide = new (<any>Slides)[e.class as string](i, e);
            this.slides.push(slide);
            TweenMax.set(slide.element, {x:Globals.contentWidth});
        });
    }

    public setSlide (index:number){
        let slide:TopFeatureSlide = this.slides[index];
        TweenMax.set(slide.element, {x:0});
        slide.animateIn(0);
        this.currentSlide = slide;

        $.each(this.slides, (i, s)=>{
            if(s.index < index){
                TweenMax.set(s.element, {x:-Globals.contentWidth});
            }
            if(s.index > index){
                TweenMax.set(s.element, {x:Globals.contentWidth});
            }
        });


    }

    public slideTo (index:number){
        let slide:TopFeatureSlide = this.slides[index];
        
        if(index > this.currentSlide.index ){
            TweenMax.set(slide.element,{x:Globals.contentWidth});
            TweenMax.to(this.currentSlide.element, 0.4, {overwrite:'all', x:-Globals.contentWidth, ease:Circ.easeInOut})
        }

        if(index < this.currentSlide.index ){
            TweenMax.set(slide.element,{x:-Globals.contentWidth});
            TweenMax.to(this.currentSlide.element, 0.4, {overwrite:'all', x:Globals.contentWidth, ease:Circ.easeInOut})
        }

        TweenMax.to(slide.element, 0.4, {overwrite:'all', x:0, ease:Circ.easeInOut});

        this.currentSlide.animateOut(0);
        slide.animateIn(0.25);

        this.currentSlide = slide;
    }

}