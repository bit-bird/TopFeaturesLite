declare var $:any;

export default abstract class UiElement {
    public element;
    constructor(){
        this.element = $(document.createElement('div'));
        this.element.css({
            position:'absolute'
        })
    }

    set x (value:number){
        this.element.css({
            left:value
        });
    }

    get x ():number{
        return this.element.position().left;
    }

    set y (value:number){
        this.element.css({
            top:value
        });
    }

    get y ():number{
        return this.element.position().top;
    }

    set width (value:number){
        this.element.css({
            width:value
        });
    }

    get width ():number{
        return this.element.width();
    }

    set height (value:number){
        this.element.css({
            height:value
        });
    }

    get height ():number{
        return this.element.height();
    }
}