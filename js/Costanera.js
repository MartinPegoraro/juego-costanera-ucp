/// <reference path="../tsDefinitions/phaser.d.ts" />
/// <reference path="./Personaje.ts" />
/// <reference path="./Beer.ts" />
/// <reference path="./Bonus.ts" />
var JuegoCostanera;
(function (JuegoCostanera) {
    var Costanera = /** @class */ (function () {
        //setEmitter(value: Phaser.Particles.Arcade.Emitter){
        //					this.emitter = value
        //				}
        //getEmitter(){
        //					return this.emitter;
        //	}
        function Costanera(ancho, alto) {
            // create our phaser game
            // 800 - width
            // 600 - height
            // Phaser.AUTO - determine the renderer automatically (canvas, webgl)
            // 'content' - the name of the container to add our game to
            // { preload:this.preload, create:this.create} - functions to call for our states
            this.setGame(new Phaser.Game(ancho, alto, Phaser.CANVAS, 'content', {
                preload: this.preload,
                create: this.create,
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
                setBonus: this.setBonus,
                getBonus: this.getBonus,
                setCursores: this.setCursores,
                getCursores: this.getCursores,
                setSaltarBtn: this.setSaltarBtn,
                getSaltarBtn: this.getSaltarBtn,
                getDobleSalto: this.getDobleSalto,
                setDobleSalto: this.setDobleSalto,
                getEmitterBeer: this.getEmitterBeer,
                setEmitterBeer: this.setEmitterBeer,
                getEmitterBonus: this.getEmitterBonus,
                setEmitterBonus: this.setEmitterBonus,
                collisionBeer: this.collisionBeer,
                collisionBonus: this.collisionBonus,
                listenerJump: this.listenerJump,
                listenerLeft: this.listenerLeft,
                listenerRight: this.listenerRight,
                getTextoPuntos: this.getTextoPuntos,
                setTextoPuntos: this.setTextoPuntos,
                getTextoVidas: this.getTextoVidas,
                setTextoVidas: this.setTextoVidas,
                setJump: this.setJump,
                getJump: this.getJump,
                setLeft: this.setLeft,
                getLeft: this.getLeft,
                setRight: this.setRight,
                getRight: this.getRight,
                goFull: this.goFull
            }));
        }
        //--------------------setters y getters --------------------------------------
        Costanera.prototype.setGame = function (game) {
            this.game = game;
        };
        Costanera.prototype.getGame = function () {
            return this.game;
        };
        Costanera.prototype.setAncho = function (ancho) {
            this.ancho = ancho;
        };
        Costanera.prototype.getAncho = function () {
            return this.ancho;
        };
        Costanera.prototype.setAlto = function (alto) {
            this.alto = alto;
        };
        Costanera.prototype.getAlto = function () {
            return this.alto;
        };
        Costanera.prototype.setPersonaje = function (personaje) {
            this.personaje = personaje;
        };
        Costanera.prototype.getPersonaje = function () {
            return this.personaje;
        };
        Costanera.prototype.setCursores = function (cursores) {
            this.cursores = cursores;
        };
        Costanera.prototype.getCursores = function () {
            return this.cursores;
        };
        Costanera.prototype.setSaltarBtn = function (saltarBtn) {
            this.saltarBtn = saltarBtn;
        };
        Costanera.prototype.getSaltarBtn = function () {
            return this.saltarBtn;
        };
        Costanera.prototype.getDobleSalto = function () {
            return this.doblesalto;
        };
        Costanera.prototype.setDobleSalto = function (valor) {
            this.doblesalto = valor;
        };
        Costanera.prototype.setBeer = function (value) {
            this.beer = value;
        };
        Costanera.prototype.getBeer = function () {
            return this.beer;
        };
        Costanera.prototype.setBonus = function (value) {
            this.bonus = value;
        };
        Costanera.prototype.getBonus = function () {
            return this.bonus;
        };
        Costanera.prototype.setEmitterBeer = function (value) {
            this.emitterBeer = value;
        };
        Costanera.prototype.getEmitterBeer = function () {
            return this.emitterBeer;
        };
        Costanera.prototype.setEmitterBonus = function (value) {
            this.emitterBonus = value;
        };
        Costanera.prototype.getEmitterBonus = function () {
            return this.emitterBonus;
        };
        Costanera.prototype.getTextoPuntos = function () {
            return this.textoPuntos;
        };
        Costanera.prototype.setTextoPuntos = function (value) {
            this.textoPuntos = value;
        };
        Costanera.prototype.getTextoVidas = function () {
            return this.textoVidas;
        };
        Costanera.prototype.setTextoVidas = function (value) {
            this.textoVidas = value;
        };
        Costanera.prototype.setJump = function (value) {
            this.jump = value;
        };
        Costanera.prototype.getJump = function () {
            return this.jump;
        };
        Costanera.prototype.setLeft = function (value) {
            this.left = value;
        };
        Costanera.prototype.getLeft = function () {
            return this.left;
        };
        Costanera.prototype.setRight = function (value) {
            this.right = value;
        };
        Costanera.prototype.getRight = function () {
            return this.right;
        };
        Costanera.prototype.preload = function () {
            // add our logo image to the assets class under the
            // key 'logo'. We're also setting the background colour
            // so it's the same as the background colour in the image
            this.getGame().load.image('beer', 'assets/birra.png');
            this.getGame().load.image('bonus', 'assets/rosquilla.png');
            this.getGame().load.image('player', 'assets/homero2.png');
            this.getGame().load.image('costanera', "assets/costanera.jpg");
            this.getGame().load.image('gameover', 'assets/gameover.png');
            //Agregamos un comentario para probar subir cambios a GIT desde el editor
            //hacemos un cambio en el archivo
            this.getGame().load.spritesheet('buttonvertical', 'assets/button-vertical.png', 64, 64);
            this.getGame().load.spritesheet('buttonhorizontal', 'assets/button-horizontal.png', 96, 64);
            this.getGame().load.spritesheet('buttonjump', 'assets/button-round.png', 96, 96);
        };
        Costanera.prototype.create = function () {
            // add the 'logo' sprite to the game, position it in the
            // center of the screen, and set the anchor to the center of
            // the image so it's centered properly. There's a lot of
            // centering in that last sentence
            //Seteamos la imagen del juego en la posicion '0,0'
            //y el ancho y alto de la misma según el tamaño de la ventana actual
            if (!this.getGame().device.desktop) {
                this.getGame().input.onDown.add(this.goFull, this);
            }
            var logo = this.getGame().add.sprite(this.getGame().world.centerX, this.getGame().world.centerY, 'costanera');
            logo.x = 0;
            logo.y = 0;
            logo.height = this.getGame().height;
            logo.width = this.getGame().width;
            this.getGame().physics.startSystem(Phaser.Physics.ARCADE);
            this.getGame().time.desiredFps = 30;
            this.getGame().physics.arcade.gravity.y = 250;
            //Personaje
            var personaje = new JuegoCostanera.Personaje(this.getGame(), this.getGame().world.centerX, this.getGame().world.top, 'player');
            this.setPersonaje(personaje);
            //Mover
            this.setCursores(this.getGame().input.keyboard.createCursorKeys());
            this.setSaltarBtn(this.getGame().input.keyboard.addKey(Phaser.Keyboard.SPACEBAR));
            //  Puntos
            var scoreString = 'Puntos: ';
            var scoreText = this.getGame().add.text(10, 10, scoreString + this.getPersonaje().getPuntos(), { font: '34px Arial', fill: '#fff' });
            this.setTextoPuntos(scoreText);
            //  Vidas
            var vidasString = 'Vidas: ';
            var vidasText = this.getGame().add.text(this.getGame().world.width - 140, 10, vidasString + this.getPersonaje().getVidas(), { font: '34px Arial', fill: '#fff' });
            this.setTextoVidas(vidasText);
            //Cerveza	
            var beer = this.getGame().add.sprite(300, 50, 'beer');
            this.setBeer(beer);
            this.getBeer().name = 'beer';
            //this.getObstaculo().body.gravity.y = 500;
            this.getGame().physics.enable(this.getBeer(), Phaser.Physics.ARCADE);
            this.getBeer().body.setSize(10, 10, 0, 0);
            //Click event
            //logo.inputEnabled = true;
            //logo.events.onInputDown.add(this.listener, this);
            //this.getObstaculo().body.velocity.y = 10;
            //  This adjusts the collision body size.
            //  220x10 is the new width/height.
            //  See the offset bounding box for another example.
            //emitterBeer
            var emitter = this.getGame().add.emitter(this.getGame().world.centerX, 5, 5);
            this.setEmitterBeer(emitter);
            this.getEmitterBeer().width = this.getGame().world.width;
            this.getEmitterBeer().makeParticles('beer', null, 1, true);
            this.getEmitterBeer().setYSpeed(400, 500);
            this.getEmitterBeer().setXSpeed(-5, 5);
            this.getEmitterBeer().start(false, 1600, 1, 0);
            // emitter.minParticleScale = 0.1;
            // emitter.maxParticleScale = 0.5;
            //emitter bonus
            var emitter = this.getGame().add.emitter(this.getGame().world.centerX, 5, 5);
            this.setEmitterBonus(emitter);
            this.getEmitterBonus().width = this.getGame().world.width;
            this.getEmitterBonus().makeParticles('bonus', null, 1, true);
            this.getEmitterBonus().setYSpeed(400, 500);
            this.getEmitterBonus().setXSpeed(-5, 5);
            this.getEmitterBonus().start(false, 1600, 1, 0);
            //var emitterBonus = this.getGame().add.emitter(this.getGame().world.width,this.getGame().world.bottom - 100, 5);
            //this.setEmitterBonus(emitterBonus);
            //this.getEmitterBonus().makeParticles('bonus',null,1,true);
            //this.getEmitterBonus().setYSpeed(-100, 0);
            //this.getEmitterBonus().setXSpeed(-1000, -500);
            //this.getEmitterBonus().gravity.y = -100;
            //this.getEmitterBonus().start(false, 1600, 1, 0);
            // create our virtual game controller buttons 
            //Boton de salto
            var buttonjump = this.getGame().add.button(this.getGame().world.width - 140, this.getGame().world.height - 140, 'buttonjump', null, this, 0, 1, 0, 1); //game, x, y, key, callback, callbackContext, overFrame, outFrame, downFrame, upFrame
            buttonjump.fixedToCamera = true; //our buttons should stay on the same place  
            buttonjump.events.onInputOver.add(this.listenerJump, this, 0, true);
            buttonjump.events.onInputOut.add(this.listenerJump, this, 0, false);
            buttonjump.events.onInputDown.add(this.listenerJump, this, 0, true);
            buttonjump.events.onInputUp.add(this.listenerJump, this, 0, false);
            //Boton izquierda
            var buttonleft = this.getGame().add.button(30, this.getGame().world.height - 140, 'buttonhorizontal', null, this, 0, 1, 0, 1);
            buttonleft.fixedToCamera = true;
            buttonleft.events.onInputOver.add(this.listenerLeft, this, 0, true);
            buttonleft.events.onInputOut.add(this.listenerLeft, this, 0, false);
            buttonleft.events.onInputDown.add(this.listenerLeft, this, 0, true);
            buttonleft.events.onInputUp.add(this.listenerLeft, this, 0, false);
            //Boton derecha
            var buttonright = this.getGame().add.button(190, this.getGame().world.height - 140, 'buttonhorizontal', null, this, 0, 1, 0, 1);
            buttonright.fixedToCamera = true;
            buttonright.events.onInputOver.add(this.listenerRight, this, 0, true);
            buttonright.events.onInputOut.add(this.listenerRight, this, 0, false);
            buttonright.events.onInputDown.add(this.listenerRight, this, 0, true);
            buttonright.events.onInputUp.add(this.listenerRight, this, 0, false);
        };
        Costanera.prototype.update = function () {
            // this.game.physics.arcade.collide(this.player, platforms);
            //this.getGame().physics.arcade.collide(this.getBeer(), this.getPersonaje(), this.collisionHandler, null, this);
            this.getGame().physics.arcade.collide(this.getEmitterBeer(), this.getPersonaje(), this.collisionBeer, null, this);
            this.getGame().physics.arcade.collide(this.getEmitterBonus(), this.getPersonaje(), this.collisionBonus, null, this);
            this.getPersonaje().body.velocity.x = 0;
            if (this.getCursores().left.isDown) {
                this.getPersonaje().body.velocity.x = -500;
            }
            else if (this.getCursores().right.isDown) {
                this.getPersonaje().body.velocity.x = 500;
            }
            if (this.getSaltarBtn().isDown && (this.getPersonaje().body.onFloor() || this.getPersonaje().body.touching.down)) {
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
            if (this.getGame().input.totalActivePointers == 0 && !this.getGame().input.activePointer.isMouse) {
                this.setRight(false);
                this.setLeft(false);
                this.setJump(false);
            }
        };
        Costanera.prototype.collisionBeer = function (beer, personaje) {
            personaje.kill();
            //  Reduce the lives
            if (this.getPersonaje().getVidas() > 0) {
                this.getPersonaje().setVidas(this.getPersonaje().getVidas() - 1);
                this.getTextoVidas().text = "Vidas: " + this.getPersonaje().getVidas().toString();
            }
            else {
                beer.kill();
                var gameOver = this.getGame().add.sprite(this.getGame().world.centerX - 400, this.getGame().world.centerY - 200, 'gameover');
            }
        };
        Costanera.prototype.collisionBonus = function (hamburguesas, personaje) {
            personaje.kill();
            //  Increase the score
            this.getPersonaje().setPuntos(this.getPersonaje().getPuntos() + 20);
            this.getPersonaje().setPBonus(this.getPersonaje().getPBonus() + 20);
            this.getTextoPuntos().text = "Puntos: " + this.getPersonaje().getPuntos().toString();
            if (this.getPersonaje().getPBonus() == 200) {
                this.getPersonaje().setVidas(this.getPersonaje().getVidas() + 1);
                this.getTextoVidas().text = "Vidas: " + this.getPersonaje().getVidas().toString();
                this.getPersonaje().setPBonus(0);
            }
        };
        //some useful functions
        Costanera.prototype.goFull = function () { this.getGame().scale.startFullScreen(false); };
        Costanera.prototype.listenerJump = function (key, arg, arg2) {
            this.setJump(arg2);
        };
        Costanera.prototype.listenerLeft = function (key, arg, arg2) {
            this.setLeft(arg2);
        };
        Costanera.prototype.listenerRight = function (key, arg, arg2) {
            this.setRight(arg2);
        };
        return Costanera;
    }());
    JuegoCostanera.Costanera = Costanera;
    // when the page has finished loading, create our game
    window.onload = function () {
        var game = new Costanera(window.innerWidth, window.innerHeight);
    };
})(JuegoCostanera || (JuegoCostanera = {}));
