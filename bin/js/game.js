var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// import {Bonus} from './Bonus'
var JuegoCostanera;
(function (JuegoCostanera) {
    var Beer = /** @class */ (function (_super) {
        __extends(Beer, _super);
        function Beer() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return Beer;
    }(JuegoCostanera.Bonus));
    JuegoCostanera.Beer = Beer;
})(JuegoCostanera || (JuegoCostanera = {}));
var JuegoCostanera;
(function (JuegoCostanera) {
    var Bonus = /** @class */ (function (_super) {
        __extends(Bonus, _super);
        function Bonus() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return Bonus;
    }(Phaser.Sprite));
    JuegoCostanera.Bonus = Bonus;
})(JuegoCostanera || (JuegoCostanera = {}));
/// //<reference path="../tsDefinitions/phaser.d.ts" />
var JuegoCostanera;
(function (JuegoCostanera) {
    var Personaje = /** @class */ (function (_super) {
        __extends(Personaje, _super);
        //orientacion: string;
        function Personaje(game, x, y, frame) {
            var _this = _super.call(this, game, x, y, frame) || this;
            _this.height = 200;
            _this.width = 100;
            game.physics.enable(_this, Phaser.Physics.ARCADE);
            _this.body.collideWorldBounds = true;
            _this.body.gravity.y = 500;
            _this.body.setSize(200, 335);
            //this.animations.add('left', [0, 1, 2, 3], 10, true);
            //this.animations.add('turn', [4], 20, true);
            // this.animations.add('right', [5, 6, 7, 8], 10, true);
            //this.setOrientacion('left');  
            _this.setPuntos(0);
            _this.setVidas(3);
            game.add.existing(_this);
            return _this;
        }
        Personaje.prototype.getPuntos = function () {
            return this.puntos;
        };
        Personaje.prototype.setPuntos = function (value) {
            this.puntos = value;
        };
        // setOrientacion(value: string){
        //         this.orientacion = value;
        //      }
        //  getOrientacion(){
        //     return this.orientacion;
        // }
        Personaje.prototype.getVidas = function () {
            return this.vidas;
        };
        Personaje.prototype.setVidas = function (value) {
            this.vidas = value;
        };
        return Personaje;
    }(Phaser.Sprite));
    JuegoCostanera.Personaje = Personaje;
})(JuegoCostanera || (JuegoCostanera = {}));
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
                listener: this.listener,
                getTextoPuntos: this.getTextoPuntos,
                setTextoPuntos: this.setTextoPuntos,
                getTextoVidas: this.getTextoVidas,
                setTextoVidas: this.setTextoVidas
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
        };
        Costanera.prototype.create = function () {
            // add the 'logo' sprite to the game, position it in the
            // center of the screen, and set the anchor to the center of
            // the image so it's centered properly. There's a lot of
            // centering in that last sentence
            //Seteamos la imagen del juego en la posicion '0,0'
            //y el ancho y alto de la misma según el tamaño de la ventana actual
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
            logo.inputEnabled = true;
            logo.events.onInputDown.add(this.listener, this);
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
            this.getTextoPuntos().text = "Puntos: " + this.getPersonaje().getPuntos().toString();
        };
        Costanera.prototype.listener = function () {
            this.getPersonaje().revive();
        };
        return Costanera;
    }());
    JuegoCostanera.Costanera = Costanera;
    // when the page has finished loading, create our game
    window.onload = function () {
        var game = new Costanera(window.innerWidth, window.innerHeight);
    };
})(JuegoCostanera || (JuegoCostanera = {}));
