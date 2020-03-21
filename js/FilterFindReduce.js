// //metodos en arreglos 

// const personas = [

//     {nombre: 'Alex', edad: 32, aprendiendo: 'Javascript'},
//     {nombre: 'Miguel', edad: 22, aprendiendo: 'PHP'},
//     {nombre: 'juan', edad: 42, aprendiendo: 'Laravel'},
//     {nombre: 'Pablo', edad: 18, aprendiendo: 'Python'},
//     {nombre: 'Patrik', edad: 30, aprendiendo: 'ReactJS'}
// ]
// console.log(personas);

// //mayores de 28 añps
// // se crea una variable para poder obtener el valor de las personas
// const mayores = personas.filter(persona => { //esta funcion filtra las personas mayores de 28

//     return persona.edad > 28;
// })
// console.log(mayores);

// // que está aprendiendo patrik

// const aprender = personas.find(persona =>{

//     return persona.nombre = 'Patrik';
// })

// console.log(`el señor ${aprender.nombre} esta aprendiendo ${aprender.aprendiendo}`);

// const buscarPhp = personas.find(persona =>{

//     return persona.aprendiendo === 'PHP'
// })
// console.log(buscarPhp.nombre);

// let total = personas.reduce((edadtotal, persona) =>{

//     return edadtotal + persona.edad;
// }, 0);
// console.log(total / personas.length); // calcula el promedio de edad de las personas
