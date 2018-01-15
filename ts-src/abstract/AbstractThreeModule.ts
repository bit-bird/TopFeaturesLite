declare var THREE:any;
declare var $:any;

export default abstract class AbstractPixiModule{
    protected renderer:any;
    protected scene:any;
    protected camera:any;
    protected clock:any;
    protected controls:any;
    public time:number = 0;
   
    constructor(){
        console.log("AbstractRenderModule Const");
        this.scene = new THREE.Scene();
        this.renderer = new THREE.WebGLRenderer({canvas:$("#stage").get(0), alpha: true/*, preserveDrawingBuffer: true*/ });
        this.camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1000);
        
        //setup for ortho camera

       /*  let width = window.innerWidth;
        let height = window.innerHeight;
        this.camera = new THREE.OrthographicCamera( width / - 2, width / 2, height / 2, height / - 2, 1, 20 );
        this.camera.position.z = 10;
        this.clock = new THREE.Clock(); */
    }

    public render (t:number){
        this.time = t * 0.001;
        if (this.controls)this.controls.update();
		this.renderer.render(this.scene, this.camera); 
    }

    public resize (){
        let w:number = window.innerWidth;
        let h:number = window.innerHeight;

         //ortho camera adjustments
        /*  let camFactor:number = 2.0;
         this.camera.left = -window.innerWidth / camFactor;
         this.camera.right = window.innerWidth / camFactor;
         this.camera.top = window.innerHeight / camFactor;
         this.camera.bottom = -window.innerHeight / camFactor;
         this.camera.updateProjectionMatrix(); */

         /* perspective camera*/
        this.camera.aspect = w / h;
        this.camera.updateProjectionMatrix();
        
        

        this.renderer.setSize(w, h, false); 
    }
}