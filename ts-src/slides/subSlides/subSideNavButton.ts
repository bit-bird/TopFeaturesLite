/* global vars/imports */
declare var TweenMax:any;
declare var $:any;
import Globals from '../../globals';
import UiElement from '../../ui/UiElement';

export default class SubSlideSubNavButton extends UiElement{
    public index:number;
    public textfield;
    public iconContainer;

    constructor(index:number, label:string){
        super();
        this.element.css({
            position:'relative',
        });
        this.element.data('index', index);
        this.index = index;
        this.textfield = $(document.createElement('div'));
        this.element.append(this.textfield);
        this.element.css({
            marginBottom:'10px',
            cursor:'pointer'
        });

        this.textfield.css({
            position:'relative',
            fontFamily:Globals.alternate,
            textTransform:'uppercase',
            fontSize:'19px',
            textAlign:'right',
            color:'white',
            marginRight:'27px'
        });
        this.textfield.addClass('noselect');
        TweenMax.set(this.textfield, {transformOrigin:'100% 40%'});
        this.textfield.text(label);

        this.iconContainer = $(document.createElement('div'));
        this.iconContainer.css({
            width:10, height:10, borderRadius:'50%',
            border:'3px solid ' + Globals.kawiGreen, position:'absolute',
            top:1, left:'100%', transform:'translateX(-100%)'
        });
        this.element.append(this.iconContainer);

    }

    public darken = () =>{
        TweenMax.to(this.textfield, 0.2, {overwrite:'auto', color:'#6f6f6f'});
    }

    public lighten = () =>{
        TweenMax.to(this.textfield, 0.2, {overwrite:'auto', color:'#fff'});
    }

    public reset = () =>{
        TweenMax.to(this.textfield, 0.3, {overwrite:'auto', scale:1, color:'#fff'});
    }

    public deselect = () =>{
        TweenMax.to(this.textfield, 0.3, {overwrite:'auto', scale:0.8});
    }

    public select = () =>{
        TweenMax.to(this.textfield, 0.2, {overwrite:'auto', color:'#fff', scale:1});
        this.element.css({
            //pointerEvents:'none'
        });
    }

    public eventsOn = () =>{
        this.element.css({
          //  pointerEvents:'auto'
        });
    }

    public onMouseOver = () =>{

    }

    public onMouseOut = () =>{
        
    }

    private onMouseDown = () =>{
        
    }
}