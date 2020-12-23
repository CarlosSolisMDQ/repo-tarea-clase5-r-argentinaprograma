//TAREA: En otro archivo distinto,
// Crear una lista de <ol> y <li> que contengan sólo números.
// Convertir esos números a un array y:
// 1. calcular el promedio y mostrarlo en un <em> pre-creado con el texto "El promedio es..."
// 2. obtener el número más pequeño y mostrarlo en un <em> pre-creado con el texto "El número más pequeño es..."
// 3. obtener el número más grande y mostrarlo en un <em> pre-creado con el texto "El número más grande es..."
// 4. obtener el número que más se repite y mostrarlo en un <em> pre-creado con el texto "El número más frecuente es..."

/*
No hago una asignacion variable a la lista porque no tengo tiempo 
y en el item de la tarea la asignacion es univoca
*/


let arrayDeNumeros = (document.querySelectorAll("li"));
let array = [];

for(let i = 0; i < arrayDeNumeros.length; i++){
    //console.log(arrayDeNumeros[i]);
    array.push(Number(arrayDeNumeros[i].innerText));
}



//console.log(array);

let promedio = array.reduce((a,b) => a + b) / array.length;

let numeroMasPequeño = array.reduce((a, b) => a < b ? a : b);

let numeroMasGrande = array.reduce((a,b) => a > b ? a : b);

//uso una tablita de hash para contar los numeros guardando en un 
//objeto los numeros como key y las ocurrencias como value

let tabla = {};

array.forEach((item) => {
    if(tabla[item]){ 
        tabla[item]++;
    }else{
        tabla[item]=1;
    }
})
//hago un sort de los valores de las propiedades del objeto y me quedo con la mayor
//entries retorna key y value.

let numeroMasRepetido = Object.entries(tabla).reduce((a, b) => a[1] > b[1] ? a : b);

//casteo a numero la key de el en la entrada con el mayot valor.

numeroMasRepetido = Number(numeroMasRepetido[0]);
//console.log(promedio, numeroMasGrande, numeroMasPequeño, numeroMasRepetido);


//salgo a html.
document.querySelector("#promedio").innerText = "\nEl promedio es... " + promedio;
document.querySelector("#menor").innerText = "\nEl número más pequeño es... " + numeroMasPequeño;
document.querySelector("#mayor").innerText = "\nEl número más grande es... " + numeroMasGrande;
document.querySelector("#mas-frecuente").innerText = "\nEl número más frecuente es... " + numeroMasRepetido;