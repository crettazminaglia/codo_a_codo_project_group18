// Probando funcionamiento del JS //

console.log("Hola mundo");

var_precio = 50;
var_oferta = var_precio * 0.5;

console.log(var_oferta);

class Auto{
    constructor(marca,color,año,modelo){
        this.marca = marca;
        this.color = color;
        this.año = año;
        this.modelo = modelo;
    }
}
let a1 = new Auto("Nissan","Gris",2019,"March");
console.log(a1);