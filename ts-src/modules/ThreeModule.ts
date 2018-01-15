declare var THREE:any;
declare var TweenMax:any;
declare var Victor:any;
declare var $:any;

import Maths from '../utils/Maths';
import ScreenQuad from '../utils/ScreenQuads';
import AbstractThreeModule from '../abstract/AbstractThreeModule';


export default class ThreeModule extends AbstractThreeModule{
    private plane;
    private plane2;
    private container;
    private quad;

    constructor (){
        super();
        let baseW = 0.2
        let baseH = 0.2;
        var geometry = new THREE.PlaneGeometry( baseW, baseH, 2 );
        var material = new THREE.MeshBasicMaterial( {color: 0xffff00, side: THREE.DoubleSide} );
        var material2 = new THREE.MeshBasicMaterial( {color: 0xff0000, side: THREE.DoubleSide} );

        this.container = new THREE.Object3D();
       // this.container.rotation.x = Math.PI;

        this.plane = new THREE.Mesh( geometry, material2 );
        this.scene.add( this.plane );
        this.plane.rotation.x = Math.PI;

        this.plane2 = new THREE.Mesh( geometry, material);
        //this.container.add( this.plane2 );
        //this.plane2.position.x += 200;
        //this.plane2.position.y -= 100;
     
        /* this.scene.add( this.container );
        this.quad = new ScreenQuad({width:1, height:1, texture: new THREE.TextureLoader().load( "noise.png" ), left:0, top:0});
        //this.camera.position.set( 0 , 0 , -10 );
        this.quad.setScreenSize( this.renderer.getSize().width , this.renderer.getSize().height );
        this.scene.add(this.quad); */

        this.camera.position.set( 0 , 0 , 1 );

    }

    public render(t:number){
        super.render(t);
      // this.plane.rotation.x += 0.01;
       
        //console.log(this.plane.rotation.x)
    }

    public resize (){
        super.resize();

        /* var vFOV = this.camera.fov * Math.PI / 180;;
        var h = 2 * Math.tan( vFOV / 2 ) * (this.camera.position.z - this.plane.position.z);
        var aspect = window.innerWidth / window.innerHeight;
        var w = h * aspect; */


        //console.log(w  , h, this.plane.position.z);

        // this.quad.setScreenSize( window.innerWidth , window.innerHeight );
        // this.quad.resize();
        // this.container.position.x = -((window.innerWidth * 0.5)) ;
        // this.container.position.y = ((window.innerHeight * 0.5) ) ;
    }
}