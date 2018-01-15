declare var $:any;

import Globals from '../globals';
import CloseButton from '../ui/closeButton';
import KawiPlayer from '../ui/kawiPlayer/kawiPlayer';

export default class TFVideoPlayer {
    public element = $('#tf-videoPlayer');
    private btn:CloseButton;
    private videos:Array<Object>;
    private container;
    private player:KawiPlayer;

    constructor (){
        this.videos = [];
        $.each(Globals.videos, (i, e)=>{
            this.videos[e.id] = e;
        });

        this.container = $(document.createElement('div'));
        this.element.append(this.container);
        this.container.css({
            position:'absolute',
            height:'100%', width:'100%'
        });

        this.player = new KawiPlayer({

        });
        this.container.append(this.player.element);

        this.btn = new CloseButton();
        this.element.append(this.btn.element);
        this.btn.x = Globals.stageWidth - this.btn.width - 10;
        this.btn.y = 10;
        $(this.btn.element).on('click', this.onCloseDown);
        this.element.hide();
    }

    private onCloseDown (){
        Globals.closeVideo();
    }

    public open(delay:number = 0){
        this.element.show();
    }

    public close( delay:number = 0){
        this.element.hide();
    }
}