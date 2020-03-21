//Spread Operator ... los tres puntos
//permite combinar arreglos

 let lenguajes = ['Javascript', 'PHP', 'Python'];
let framworks = ['ReactJS','Laravel','Django'];

// //forma antigua de concatenar es utilizando la palabra reservada concat
// let combinacion = lenguajes.concat(framworks);

// console.log(combinacion);

//la forma nueva de unir arreglos es la siguiente los tres pntos ...

// let nuevoArreglo = [...lenguajes,...framworks]; //Forma nueva de unir arreglos

// console.log(nuevoArreglo);

//PARA COPIAR UN ARREGLO 

// let copiaArreglo = [...lenguajes];

// console.log(copiaArreglo);

//Con esto traemos el ultimo dato de nuestro arreglo lenguajes
// esto no afecta el orden del arreglo, una vez finalizado nuestro arreglo
// quedaria de la misma forma como fue creado y no se invierte.

// let [ultimo] = [...lenguajes].reverse();

// console.log(ultimo);
// console.log(lenguajes);

// A diferencia de la siguiente opcion que si desordena nuestro arreglo

// let [ultimo2] = lenguajes.reverse();


// console.log(ultimo2);

// ultimo uso de un spread operator

// function suma(a,b,c){

//     console.log(a+b+c);
// }
// const numeros = [1,2,3];
// suma(...numeros);
