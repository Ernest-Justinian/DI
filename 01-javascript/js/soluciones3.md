Clase utils:

```js
export const APP_NAME= "App";
export function mayusculas(texto){
    return texto.toUpperCase();
}
export default function stringPrimero(array){
    return array[0];
}
```

Clase saludos:
```js
export default function saludar(nombre){
    return `Hola ${nombre}`; 
}
```

Clase personas:
```js
export const Gabriel= "Gabriel";
export const Miguel= "Miguel";
export const Uriel= "Uriel";
export const Rafael= "Rafael";
```

Clase operaciones:
```js
export function sumar(a,b){
    return a+b;
}

export function restar(a,b){
    return a-b;
}

export function multiplicar(a,b){
    return a*b;
}

export function dividir(a,b){
    return a/b;
}
```

Clase matematicas:
```js
export function areaCirculo(radio){
    return Math.PI * radio * radio;
}

export function areaCuadrado(lado){
    return lado*lado;
}
```

Clase main:
```js
import { sumar, restar, multiplicar, dividir } from "./operaciones";
import { areaCirculo as circulo, areaCuadrado as cuadrado} from "./matematicas";
import * as nombres from "./personas.js";
console.log(sumar(2,3));
console.log(restar(3,2));
console.log(multiplicar(2,3));
console.log(dividir(5,2));
console.log(circulo(5));
console.log(cuadrado(4));
```

Clase index:
```js
import saludar from "./saludos";

console.log(saludar(Ernest));
```

Clase constantes:
```js
export const NOMBRE = "AppGuay";
export const VERSION = "2.4";
export const AUTOR = "Volkswagen";
```

Clase app:
```js
import { NOMBRE, AUTOR, VERSION } from "./constantes";
import stringPrimero, {mayusculas, APP_NAME}  from "./utils";
console.log(NOMBRE);
console.log(AUTOR);
console.log(VERSION)

console.log(APP_NAME);
console.log(mayusculas("esto a mayusculas, porfavor"));
console.log(stringPrimero(["Pepepç", "algo", "algo de mas"]));
```