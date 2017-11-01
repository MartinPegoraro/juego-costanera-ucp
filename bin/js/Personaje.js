/// //<reference path="../tsDefinitions/phaser.d.ts" />
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
            _this.setPBonus(0);
            game.add.existing(_this);
            return _this;
        }
        Personaje.prototype.getPBonus = function () {
            return this.bonus;
        };
        Personaje.prototype.setPBonus = function (value) {
            this.bonus = value;
        };
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
