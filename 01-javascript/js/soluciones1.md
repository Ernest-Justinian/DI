```js 
let nombre1= "Ernest";
console.log(nombre1);
const PI= 3.1416;
//PI=2;
let edad1;
edad1=12;
console.log(edad1);



let flag=true;
let nulo= null;
let indefinido;
console.log(nombre1+" "+ typeof nombre1);
console.log(edad1+" "+ typeof edad1);
console.log(flag+" "+ typeof flag);
console.log(nulo+" "+ typeof nulo);
console.log(indefinido+" "+ typeof indefinido );
let numero=43;
let cadena="56";
String(numero);
Number(cadena);




let persona = {
    nombre: "Pepeç",
    edad: 35,
    ciudad: "Medina"
};

console.log(persona.nombre);
console.log(persona["ciudad"]);
persona.profesion="Vendedor ambulante"
const { nombre, edad } = persona;
console.log(nombre);
console.log(edad);

function saludar(nombre){
    console.log("Hola, "+nombre);
}
saludar(nombre);



function suma(a, b){
    console.log(a+b);
}
suma(2, 3);
const multiplicar = (a, b) => a * b;
console.log(multiplicar(2, 4));



function esMayorDeEdad(edad){
    if(edad>=18){
        return true;
    }else{
        return false;
    }
}
```