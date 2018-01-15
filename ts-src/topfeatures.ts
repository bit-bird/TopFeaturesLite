declare var $:any;

import Globals from './globals';
import TFNav from './managers/nav';
import TFSlideManager from './managers/slides';
import TFVideoPlayer from './managers/videoPlayer';

export default class TopFeatures {
    private nav:TFNav;
    private slides:TFSlideManager;
    private currentIndex:number;
    private video:TFVideoPlayer;
    private state:String = 'slides';

    constructor(){
        Globals.openVideo = this.openVideo;
        Globals.closeVideo = this.closeVideo;

        this.nav = new TFNav();
        $(this.nav).on('onNavClicked', this.onNavButtonClick);
        this.slides = new TFSlideManager();
        this.setTo(1);
        this.video = new TFVideoPlayer();
    }

    private setTo (index:number){
        this.nav.setButton(index);
        this.slides.setSlide(index);
        this.currentIndex = index;
    }

    private onNavButtonClick = (e, data) =>{
        this.nav.setButton(data.index);
        this.slides.slideTo(data.index);
        this.currentIndex = data.index;
    }

    private openVideo = (val:String) =>{
        this.state = 'video';
        this.video.open();
    }

    private closeVideo = () =>{
        this.state = 'slides';
        this.video.close();
    }
}