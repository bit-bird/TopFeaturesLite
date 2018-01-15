declare var PIXI:any;

export default abstract class AbstractPixiModule{
    protected renderer:any;
    protected stage:any;
    public time:number = 0;
   
    constructor(){
        console.log("AbstractRenderModule Const");
        this.renderer = PIXI.autoDetectRenderer(window.innerWidth, window.innerHeight,{ view:document.getElementById("stage"), backgroundColor:0, antialias:true, resolution: window.devicePixelRatio || 1, autoResize:true});
        PIXI.RESOLUTION = window.devicePixelRatio;
        this.stage = new PIXI.Container();
    }

    public render (t:number){
        this.time = t * 0.001;
		this.renderer.render(this.stage);
    }

    public resize (){
        let w = window.innerWidth;
        let h = window.innerHeight;
        if(this.renderer)this.renderer.resize(w, h);
    }
}