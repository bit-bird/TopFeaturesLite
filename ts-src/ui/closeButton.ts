declare var $:any;
declare var TweenMax:any;

import UiElement from './UiElement';

export default class CloseButton extends UiElement {
    //public element = $(document.createElement('div'));
    private line1 = $(document.createElement('div'));
    private line2 = $(document.createElement('div'));

    constructor(){
        super();
        
        this.element.css({
            width:30, height:30,
            position:'absolute',
            cursor:'pointer'
        });

        let linestyle = {
            position:'absolute',
            width:'100%', height:2,
            backgroundColor:'white',
            top:'50%'
        }

        this.element.append(this.line1);
        this.line1.css(linestyle);
        TweenMax.set(this.line1, {rotation:45});

        this.element.append(this.line2);
        this.line2.css(linestyle);
        TweenMax.set(this.line2, {rotation:-45});
    }

    
}