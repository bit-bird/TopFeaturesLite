declare var PIXI:any;
declare var TweenMax:any;
declare var Victor:any;
declare var $:any;

import Maths from '../utils/Maths';
import AbstractPixiModule from '../abstract/AbstractPixiModule';
import Mover from '../Mover';
import Global from '../globals';

export default class PixiModule extends AbstractPixiModule{
    private container:any;
    private rows:number = 20;
    private cols:number = 20;
    private cellSize:number = 20;
    private cells:Array<Object>;
    private noiseTexture;

    private image;

    private speed:number = 1.0;
    private point;
    private currentCell:object;
    private vec;
    private mouse;
    private circ;
    private p1, p2;

    private stageHeight = window.innerHeight;
    private stageWidth = window.innerWidth;
    public balls:Array<Mover> = [];

    constructor(){
        super();
        this.container = new PIXI.Container();
        this.stage.addChild(this.container);

        this.image = new Image();
       	this.image.src = 'noise.png'
        PIXI.loader.add('noise', 'noise.png');
        PIXI.loader.load((loader, resources)=> {
            this.noiseTexture  = resources.noise.texture;
            this.init();
        });
        
        console.log(Global.app, 'bb')


        //this.init();
    }

    private init():void{
        this.cells = [];
        let h:number = this.rows * this.cellSize;
        let w:number = this.cols * this.cellSize;

        //texture container
        let textureContainer = new PIXI.Sprite(this.noiseTexture);
        textureContainer.width = w;
        textureContainer.height = h;
        this.container.addChild(textureContainer);

        //line container
        let lineContainer = new PIXI.Container();
        this.container.addChild(lineContainer);

        let strokeWidth:number = 1;
        let index:number = 0;

        let canvas = document.createElement('canvas');
        canvas.width = this.image.width;
        canvas.height = this.image.height;

        let ctx = canvas.getContext('2d');
        ctx.drawImage(this.image, 0, 0, this.image.width, this.image.height);
        let data = ctx.getImageData(0, 0, this.image.width, this.image.height);

        this.point = new PIXI.Graphics();
        this.point.beginFill(0xFF0000);
        this.point.drawRect(0, 0, this.cellSize, this.cellSize);
        this.container.addChild(this.point);

        //let pixelData = Maths.getPixel(data, 399);
        //var lum = pixelData[0] / 255;
        //console.log(pixelData, "KDKDK")

        for(let i:number = 0; i < this.rows; i++){
            this.cells[i] = [];
            let hline = this.drawLine(w, strokeWidth);
            hline.y = i * this.cellSize;
            lineContainer.addChild(hline);
        
            for(let j:number = 0; j < this.cols; j++){
                let vline = this.drawLine(strokeWidth, h);
                vline.x = j * this.cellSize;
                lineContainer.addChild(vline);
                //var n = this.getRandomNumber(0, 1);
                let c = Maths.getPixel(data, index)[0] / 255;
                this.cells[i][j] = {
                    x:i, y:j,
                    index:index,
                    color: c,
                    angle: Maths.map(c, 0, 1, 0, Maths.TWO_PI)
                }

                
                index++;
            }
        }
        let startIndex:number = 10;
        this.currentCell = {x: this.cells[startIndex][startIndex].x, y: this.cells[startIndex][startIndex].y};
        this.point.x = this.cells[startIndex][startIndex].x * this.cellSize; 
        this.point.y = this.cells[startIndex][startIndex].y * this.cellSize;

        this.point.x = 510; 
        this.point.y = 510;

        let cell = this.cells[this.currentCell.x][this.currentCell.y];
        //console.log( Math.PI * 2)
        this.mouse = new Victor(0, 0);
        this.vec = {
            pos: new Victor(111, 111),
            acceleration: new Victor(0.0, 0.0),
            velocity: new Victor(0, 0),
            mass:10
        }

        setTimeout(()=>{
           // this.vec.acceleration.x = 0.01;
           // this.vec.acceleration.y = 0.01;
           
        }, 5000);

        for(let i = 0; i < 2; i++){
           // let b = new Mover(Maths.getRandomNumber(0, this.stageWidth), 110);
            
            if(i == 0){
                let b = new Mover(this.stageWidth /2, 210, 30);
            }else{
                let b = new Mover(this.stageWidth /2 +150, 100, 70);
            }

            this.container.addChild(b.graphics);
            this.balls.push(b);
        }
        //this.p1.acceleration.y = 2.05;
       // var deg = Maths.radToDeg(this.vec.pos.angle())
        //console.log(this.vec.pos.angle(), deg)
       // this.vec = new Victor(0, 0);
       // console.log(this.vec)
        /* let g = new PIXI.Graphics();
        g.beginFill(0xFFFF00);
        g.drawRect(0, 0, this.cellSize, this.cellSize);
        this.container.addChild(g);
        g.x = br.x * this.cellSize;
        g.y = br.y * this.cellSize; */
        $(document).on('mousemove', this.onMouseMove)
        $(document).on('mousedown', this.onMouseDown)
        $(document).on('mouseup', this.onMouseUp)
    }

    private drawLine (w:number, h:number){
        let g = new PIXI.Graphics();
        g.beginFill(0xffffff);
        g.drawRect(0,0, w, h);
        return g;
    }

    private onMouseMove = (e) =>{
   
        this.mouse.x = e.clientX;     // Get the horizontal coordinate
        this.mouse.y = e.clientY;

        /* PVector mouse = new PVector(mouseX,mouseY);
        PVector dir = PVector.sub(mouse,location);
    Normalize.
        dir.normalize();
    Scale.
        dir.mult(0.5);
    Set to acceleration.
        acceleration = dir;
     
    Motion 101! Velocity changes by acceleration. Location changes by velocity.
        velocity.add(acceleration);
        velocity.limit(topspeed);
        location.add(velocity); */

       // console.log(dir)
    }

    private mouseDown: boolean = false;
    
    private onMouseDown = () =>{
        this.mouseDown = true;
        this.applyForce( new Victor(0.15, 0));
    }

    private onMouseUp = () =>{
        this.mouseDown = false;
       // this.applyForce( new Victor(0.0, 0));
       this.vec.acceleration.multiply(Victor(0,0));
    }

    private applyForce (force):void{
        this.vec.acceleration.add(force);
    }

    private rr = 0;
    public render (t:number){
        super.render(t);
        this.rr++;
        //&& this.rr % 5 == 4
        if(this.currentCell ){
            //console.log("KKKK")
            let cell = this.cells[this.currentCell.x][this.currentCell.y];
            //neibors
            let tl = this.cells[this.currentCell.x - 1][this.currentCell.y - 1];
            let t = this.cells[this.currentCell.x][this.currentCell.y - 1];
            let tr = this.cells[this.currentCell.x + 1][this.currentCell.y - 1];
            let l = this.cells[this.currentCell.x - 1][this.currentCell.y];
            let r = this.cells[this.currentCell.x + 1][this.currentCell.y];
            let bl = this.cells[this.currentCell.x - 1][this.currentCell.y + 1];
            let b = this.cells[this.currentCell.x][this.currentCell.y + 1];
            let br = this.cells[this.currentCell.x + 1][this.currentCell.y + 1];

            //sample dir get sum
            let dirs = {};
            dirs['tl'] = tl.color + l.color + t.color;
            dirs['t'] = tl.color + t.color + tr.color;
            dirs['tr'] = t.color + tr.color + l.color;
            dirs['l'] = l.color + tl.color + bl.color;
            dirs['r'] = r.color + tr.color + br.color;
            dirs['bl'] = bl.color + l.color + b.color;
            dirs['b'] = bl.color + b.color + br.color;
            dirs['br'] = br.color + b.color + r.color;

            let max, maxN = null;
            let hasSame:boolean = false;
            $.each(dirs, function(key, val){
                if(!max){
                    max = key;
                    maxN = val;
                }else{
                    let v = val  + Maths.getRandomNumber(0, 0.5);
                   // if(key == 'tl')console.log(val)
                    if(v > maxN){
                        max = key;
                        maxN = v;
                    }
                }

                $.each(dirs, function(key2, val2){
                    if(key2 != key){
                        if(val2 === val)hasSame = true;
                    }
                });
                //console.log(i)
            });
            //console.log(hasSame);
            let newCell;
            if(max === 'tl'){
                newCell = tl;
            }

            if(max === 't'){
                newCell = t;
            }

            if(max === 'tr'){
                newCell = tr;
            }


            if(max === 'l'){
                newCell = l;
            }

            if(max === 'r'){
                newCell = r;
            }

            if(max === 'bl'){
                newCell = bl;
            }

            if(max === 'b'){
                newCell = b;
            }

            if(max === 'br'){
                newCell = br;
            }
            
           // var sum = tl.color + t.color + tr.color + l.color + r.color + bl.color + b.color + br.color;
           
            
            $.each(this.balls, (i,b)=>{

                let c = 0.03;
                let speed = b.velocity.length();
                let sum = c * speed * speed;
                let drag = b.velocity.clone();
                drag.invert();
                drag.normalize();
                drag.multiply(Victor(sum, sum));
               // b.applyForce(drag);

                
                
                let gravity = new Victor(0, 0.1);
                gravity.multiply(Victor(b.mass, b.mass));
               // b.applyForce(gravity);

                let wind = new Victor(.05, 0);
                //b.applyForce(wind);
              
                if(i == 1){
                    let f = this.balls[0].attract(b );
                   // console.log(f)
                    b.applyForce(f);
                }
                

                b.update();
                b.checkEdges(this.stageWidth, this.stageHeight);
                b.display();
            });

        
            /*
            this.p1.update();
            this.p1.checkEdges(this.stageWidth, this.stageHeight);
            this.p1.display();
            //console.log(this.stageHeight, this.p1.y)
            //console.log(this.p1.y, ':', this.p1.velocity.y)
             if(this.p1.x > this.stageWidth){
                this.p1.velocity.x *= -1;
                this.p1.position.x = this.stageWidth;
                
            }
            //console.log( this.p1.velocity.x, "LOWER",  this.p1.velocity.x + wind.x)
          //  console.log(this.p1.x)

            if(this.p1.y > this.stageHeight || this.p1.y < 0){
                this.p1.velocity.y *= -1;

                if(this.p1.y > this.stageHeight){
                    this.p1.position.y = this.stageHeight;
                }
            } */
           // console.log(this.vec.acceleration, this[.vec.velocity)
           /*
            this.vec.velocity.add(this.vec.acceleration);
            this.vec.velocity.limit(5, 0.75)
            this.vec.pos.add(this.vec.velocity);
            this.point.x = this.vec.pos.x;
            this.point.y = this.vec.pos.y;

            
           let dir = Victor(this.mouse.x, this.mouse.y).subtract( Victor(this.vec.pos.x, this.vec.pos.y));
            console.log(dir.angleDeg())
            dir.normalize();
            dir.multiply(new Victor(0.5, 0.5));
            this.vec.acceleration = dir;
            this.vec.velocity.add(this.vec.acceleration);
            this.vec.velocity.limit(5, 0.75)
            this.vec.pos.add(this.vec.velocity);
            this.point.x = this.vec.pos.x;
            this.point.y = this.vec.pos.y;

            var cw = (this.rows - 1) * this.cellSize;
            var ch = (this.cols - 1) * this.cellSize;
         

          if(this.vec.pos.x > cw || this.vec.pos.x < 0){
                this.vec.velocity.x = this.vec.velocity.x * -1;
                this.vec.acceleration.x = this.vec.acceleration.x * -1;
            }
     
            if(this.vec.pos.y > ch || this.vec.pos.y < 0){
                this.vec.velocity.y = this.vec.velocity.y * -1;
                this.vec.acceleration.y = this.vec.acceleration.y * -1;
            } */

    } 

}
