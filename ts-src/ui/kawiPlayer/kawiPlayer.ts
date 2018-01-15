declare var $:any;
declare var TweenMax:any;


export default class KawiPlayer {
    static readonly CONTAIN:string = 'contain';
    static readonly COVER:string = 'cover';
    static readonly FULL:string = 'full';

    public element;
    public containment:string;

    private videoContainer;

    /*
        HERE LAST: Just start with containers, need to build ui scrubbaer
    */


    constructor(options){
        this.containment = options.containment || KawiPlayer.CONTAIN;

        this.element = $(document.createElement('div'));
        this.element.addClass('kplayer-main');

        this.videoContainer = $(document.createElement('div'));
        this.element.append(this.videoContainer);
        this.videoContainer.addClass('kplayer-vcontainer');

        this.resize();
    }

    public resize = () =>{

    }
}