declare var $:any;

export default class ImageLoader {

    private items;
    public amount:number;
    private count:number = 0;
    public progress:number;

    constructor(){ }

    public preload (manifest:any){
        this.amount = manifest.length;
        let m = {};
        for (let key in manifest) {
            let obj = manifest[key];
            let img = new Image ();
            img.id = obj.id;
            img.onload = this.onImageLoaded;
            img.src = obj.src;
            m[obj.id] = obj.src;
        }
        return m;
    }

    private onImageLoaded = (e) =>{
        let img = e.target;
        this.count++;
        this.progress = this.count / this.amount;
        $(this).trigger('progress');
        img.onload = null;
        img.src = '';
        img = null;
        if(this.progress === 1){
            $(this).trigger('complete');
        }
    }
}