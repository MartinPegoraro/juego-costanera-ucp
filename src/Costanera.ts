/// <reference path="../tsDefinitions/phaser.d.ts" />

import {Personaje} from './Personaje'
import {Beer} from './Beer'

export class Costanera
{
	game:Phaser.Game;
	ancho: number;
	alto:number;
	personaje: Personaje;
	beer: Beer;
	cursores:Phaser.CursorKeys;
	saltarBtn:Phaser.Key;
	doblesalto:number;
	emitter: Phaser.Particles.Arcade.Emitter;
//--------------------setters y getters --------------------------------------
	
	
	setGame(game: Phaser.Game ){
		this.game = game;
	}

	getGame (){
		return this.game;
	}

	setAncho(ancho: number ){
		this.ancho = ancho;
	}

	getAncho (){
		return this.ancho;
	}

	setAlto(alto: number ){
		this.alto = alto;
	}

	getAlto (){
		return this.alto;
	}

	setPersonaje(personaje: Personaje ){
		this.personaje = personaje;
	}

	getPersonaje ():Personaje{
		return this.personaje;
	}

	setCursores(cursores: Phaser.CursorKeys ){
		this.cursores = cursores;
	}

	getCursores (){
		return this.cursores;
	}

	setSaltarBtn(saltarBtn: Phaser.Key ){
		this.saltarBtn = saltarBtn;
	}

	getSaltarBtn (){
		return this.saltarBtn;
	}
	getDobleSalto(){
		return this.doblesalto
	}

	setDobleSalto(valor){
		this.doblesalto=valor;
	}
	setBeer(value:Beer){
		this.beer = value;
	 }

	getBeer ():Beer{
		return this.beer;
	}
	
	setEmitter(value: Phaser.Particles.Arcade.Emitter){
						this.emitter = value
					}
				
	getEmitter(){
						return this.emitter;
		}


	constructor(ancho: number,alto:number)
	{
		// create our phaser game
		// 800 - width
		// 600 - height
		// Phaser.AUTO - determine the renderer automatically (canvas, webgl)
		// 'content' - the name of the container to add our game to
		// { preload:this.preload, create:this.create} - functions to call for our states
		this.setGame(new Phaser.Game( ancho, alto, Phaser.CANVAS, 'content', { 
			preload:this.preload, 
			create:this.create, 
			update: this.update,
			setGame: this.setGame,
			getGame: this.getGame,
			setAncho: this.setAncho,
			getAncho: this.getAncho,
			setAlto: this.setAlto,
			getAlto: this.getAlto,
			setBeer: this.setBeer,
			getBeer: this.getBeer,
			setPersonaje: this.setPersonaje,
			getPersonaje: this.getPersonaje,
			setCursores: this.setCursores,
			getCursores: this.getCursores,
			setSaltarBtn: this.setSaltarBtn,
			getSaltarBtn: this.getSaltarBtn,
			getDobleSalto: this.getDobleSalto,
			setDobleSalto: this.setDobleSalto,
			getEmitter: this.getEmitter,
			setEmitter: this.setEmitter,
			collisionHandler: this.collisionHandler,
			listener: this.listener
		} ));
	}
	
	preload()
	{
		// add our logo image to the assets class under the
		// key 'logo'. We're also setting the background colour
		// so it's the same as the background colour in the image
		this.getGame().load.image('beer', 'assets/birra.png');
		this.getGame().load.image('player', 'assets/homero2.png');
		this.getGame().load.image( 'costanera', "assets/costanera.jpg" );
		
		//Agregamos un comentario para probar subir cambios a GIT desde el editor
		//hacemos un cambio en el archivo
		
	}
	
	create()
	{
		// add the 'logo' sprite to the game, position it in the
		// center of the screen, and set the anchor to the center of
		// the image so it's centered properly. There's a lot of
		// centering in that last sentence

		//Seteamos la imagen del juego en la posicion '0,0'
	    //y el ancho y alto de la misma según el tamaño de la ventana actual
		var logo = this.getGame().add.sprite( this.getGame().world.centerX, this.getGame().world.centerY, 'costanera' );
		logo.x = 0;
		logo.y = 0;
		logo.height = this.getGame().height;
		logo.width = this.getGame().width;

		this.getGame().physics.startSystem(Phaser.Physics.ARCADE);
		this.getGame().physics.arcade.gravity.y = 250;

		var personaje = this.getGame().add.sprite(100, 200, 'player');
		personaje.height = 150;
		personaje.width = 75;
		this.setPersonaje(personaje);
		
		this.getGame().physics.enable(this.getPersonaje(),Phaser.Physics.ARCADE);
		
		this.getPersonaje().body.collideWorldBounds = true;
		this.getPersonaje().body.gravity.y = 500;
		
		this.setCursores(this.getGame().input.keyboard.createCursorKeys());
		this.setSaltarBtn(this.getGame().input.keyboard.addKey(Phaser.Keyboard.SPACEBAR));
	//Cerveza
		this.setBeer(this.getGame().add.sprite(300, 50, 'beer'));
		this.getBeer().name = 'beer';
	//this.getObstaculo().body.gravity.y = 500;
	
	
	
	this.getGame().physics.enable(this.getBeer(),Phaser.Physics.ARCADE);
	
	logo.inputEnabled = true;
	logo.events.onInputDown.add(this.listener, this);
	//this.getObstaculo().body.velocity.y = 10;
	
	//  This adjusts the collision body size.
	//  220x10 is the new width/height.
	//  See the offset bounding box for another example.
	this.getBeer().body.setSize(10, 10, 0, 0);
	
	//emitter
	var emitter = this.getGame().add.emitter(this.getGame().world.centerX, 5, 5);
	this.setEmitter(emitter);
	this.getEmitter().width = this.getGame().world.width;
	
	this.getEmitter().makeParticles('beer',null,1,true);
	// emitter.minParticleScale = 0.1;
	// emitter.maxParticleScale = 0.5;
	
	this.getEmitter().setYSpeed(100, 200);
	this.getEmitter().setXSpeed(-5, 5);
			
	this.getEmitter().start(false, 1600, 1, 0);


	}

	update () {
		
			// this.game.physics.arcade.collide(this.player, platforms);
		
			//this.getGame().physics.arcade.collide(this.getBeer(), this.getPersonaje(), this.collisionHandler, null, this);
 			this.getGame().physics.arcade.collide(this.getEmitter(),this.getPersonaje(),this.collisionHandler,null, this);
			this.getPersonaje().body.velocity.x = 0;


		
			if (this.getCursores().left.isDown)
			{
				this.getPersonaje().body.velocity.x = -500;
			}
			else if (this.getCursores().right.isDown)
			{
				this.getPersonaje().body.velocity.x = 500;
			}
		
			if (this.getSaltarBtn().isDown && (this.getPersonaje().body.onFloor() || this.getPersonaje().body.touching.down))
			{
				this.getPersonaje().body.velocity.y = -400;
		
			}
			if (this.getSaltarBtn().isDown && this.getPersonaje().body.onFloor()) {
			     this.getPersonaje().body.velocity.y = -400;
			     this.setDobleSalto(1);
			     this.getSaltarBtn().isDown = false;
			       console.log(this.getSaltarBtn(), "Primer Salto");
			    }
			if (this.getSaltarBtn().isDown && this.getDobleSalto() == 1) {
			     this.getPersonaje().body.velocity.y = -400;
			     this.setDobleSalto(2);
			     this.getSaltarBtn().isDown = false;
			       console.log(this.getDobleSalto, "Segundo salto");
			    }
		}
	
		collisionHandler (objetos, personaje) {
				
			// this.getGame().stage.backgroundColor = '#992d2d';
			// this.getPersonaje().body.velocity.y = -800;
			
			
			personaje.kill();
			//objetos.kill();
					
			}
			
					
			listener () {
				this.getPersonaje().revive()
						
			}
			

	}



// when the page has finished loading, create our game
window.onload = () => {
	var game = new Costanera(window.innerWidth,window.innerHeight);
}