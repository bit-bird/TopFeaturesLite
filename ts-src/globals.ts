export default class Globals {
    static stageWidth:number = 1230;
    static stageHeight:number = 575;
    static contentWidth:number = 1170;
    static contentHeight:number = 510;
    static responsive:boolean = false;
    static browser:string = 'undefined';
    static os:string = 'undefined';
    static isMobile:boolean = false;
    static isTouch:boolean = false;
    static isTablet:boolean = false;
    static product:string = undefined;
    static manifest:any;
    static lightGrey:string = 'rgba(204, 204, 204,1)';
    static darkGrey:string = '#6f6f6f';
    static kawiGreen:string = '#66cc33';
    static alternate:string = 'alternate-gothic-no-2-d';

    /* Project specific */
    static slides:Array<Object> = [];
    static videos:Array<Object> = [];
    static openVideo:Function;
    static closeVideo:Function;
}