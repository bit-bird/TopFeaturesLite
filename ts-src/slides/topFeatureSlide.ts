declare var TweenMax:any;
declare var $:any;

import Globals from '../globals';

export default class TopFeatureSlide{
    public element;
    public id:string;
    public elementId:string;
    public index:number;

    constructor(index:number, data){
        this.id = data.id;
        this.element = $('#' + data.htmlElement);
        this.elementId = data.elementId;
        this.index = index;

        console.log("-- TopFeature Slide created --");
    }

    public animateIn (delay:number = 0){
    }
    
    public animateOut (delay:number = 0){

    }
}