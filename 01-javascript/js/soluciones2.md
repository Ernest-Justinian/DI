```js
let nombres = ["Pepe", "Jesús", "Mariano", "Joerik", "Anita"];
nombres.push("Push");
nombres.shift;
nombres.includes("Pepe")

let numerosOrdenar= [4, 1, 9, 3, 7] ;
numerosOrdenar.sort((a,b) => a-b); //Ascendente
numerosOrdenar.sort((a,b) => b-a); //Descendente

let arrayExtraer= ["manzana", "pera", "plátano", "naranja"];
const [fruta1, fruta2, ...resto] = arrayExtraer;
console.log(fruta1);
console.log(fruta2);
console.log(resto);

let a=100;
let b=200;
[a, b]=[b, a];
console.log(a);
console.log(b);

let colores = ["rojo", ["verde", "azul", "amarillo"]];
[,[, color ]]= colores;
console.log(azul);


let numerosShow= [1, 2, 3, 4, 5];
for(let i=0; i<numerosShow.length;i++){
    console.log(`${numerosShow[i]}`);
}

for(let num of numerosShow){
    console.log(num);
}

for(let i in numerosShow){
    console.log(`${numerosShow[i]}`);
}


let arrayHCJR= ["HTML", "CSS", "JavaScript", "React"];
for(let i=0;i<arrayHCJR.length;i++){
    console.log(`Posición ${i}: Valor ${numeros[i]}`);
}

for(let i=arrayHCJR.length;i>0;i--){
    console.log(`Posición ${i}: Valor ${numeros[i]}`);
}


let nombres2=  ["Ana", "Luis", "Marta", "Pedro"];
nombres2.forEach(nombre => console.log(nombre));


let numeros = [2, 4, 6, 8];
numeros.forEach(numero => console.log(numero * 2));

let numeros2= [5, 12, 8, 130, 44];
let masDiez= numeros2.filter(n => n>10);

let nombres3= ["Ana", "Alberto", "Bea", "Carlos"];
let filtroA= nombres3.filter(n => n.startsWith("A"));

let edades= [15, 18, 21, 12, 30];
let mayorEdad= edades.filter(n => n>=18);

let numeros3= [1, 2, 3, 4, 5];
let cuadrados= numeros3.map(num => num*2);

let precios= [10, 20, 30];
let preciosConIVA= precios.map(precio => precio*1.21);

let arrayHCJRMayus= arrayHCJR.map(arrayHCJR => arrayHCJR.toUpperCase());

let numeros4= [3, 8, 12, 5, 7, 20];
let numerosPares= numeros4.filter(n => n%2==0);
let pares10= numerosPares.map(num => num*10);

let alumnos = [
  { nombre: "Ana", nota: 7 },
  { nombre: "Luis", nota: 4 },
  { nombre: "Marta", nota: 9 }
];

let alumnosAprobados = alumnos.filter(n => n.nota >= 5);
let nombresAprobados = alumnosAprobados.map(n => n.nombre);
nombresAprobados.forEach(nombre => console.log(`Alumno aprobado: ${nombre}`));
```