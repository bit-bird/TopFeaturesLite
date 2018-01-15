declare var TweenMax:any;
declare var $:any;

import NavButton from '../ui/navButton';
import Globals from '../globals';

export default class TFNav {
    private element = $('#tf-nav');
    private btns:Array<NavButton>;
    private currentBtn:NavButton;

    constructor(){
        let w:number = Math.round(100 / Globals.slides.length);
        this.btns = [];
        $.each(Globals.slides, (i,e)=>{
            let btn = new NavButton(w, i, e.id, e.navLabel);
            this.btns.push(btn);
            this.element.append(btn.element);
            $(btn).on('onNavButtonClick', this.onNavButtonClicked);
        });
    }

    private onNavButtonClicked = (e,data) =>{
       $(this).trigger('onNavClicked', {index:data.index});
    }

    public setButton (index:number){
        if(this.currentBtn)this.currentBtn.deselect();
        let btn:NavButton = this.btns[index];
        btn.select();
        this.currentBtn = btn;
    }
    
}