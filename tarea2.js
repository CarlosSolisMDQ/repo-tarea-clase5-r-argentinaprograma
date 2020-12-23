//TAREA: En otro archivo distinto,
// Por cada clase de r/argentina programa existente, vamos a pedir:
// horas, minutos y segundos de cada video. Ej. Si un video dura
// 2 horas, 38 minutos y 20 segundos, vamos a rellenar 3 campos de texto con
// cada dato.
// al apretar el botón "Calcular tiempo total", debe mostrar en un
// <strong> pre-creado el tiempo total de los videos.



//content = document.querySelector("#content");

let horas = 0;
let minutos = 0;
let segundos = 0;

const $horas = document.querySelectorAll("#horas");
const $minutos = document.querySelectorAll("#minutos");
const $segundos = document.querySelectorAll("#segundos");
const $totalTiempoDeVideo = document.querySelector("#total");
const $button = document.querySelector("#calcular");

$button.onclick = () => {
    for(let i = 0; i < 5; i++){
        horas = horas + Number($horas[i].value);
        minutos = minutos + Number($minutos[i].value);
        segundos = segundos + Number($segundos[i].value);
    }

    let totalSegundos = (horas * 3600) + (minutos * 60) + segundos;

    horas = Math.trunc(totalSegundos / 3600);
    let resto = totalSegundos % 3600;
    console.log(resto)
    minutos = Math.trunc(resto / 60);
    resto = resto % 60
    console.log(resto)
    segundos = resto

    $totalTiempoDeVideo.innerText = "El tiempo total de video es: " + horas + " horas, " + minutos + " minutos, " + segundos + " segundos."

console.log(horas, minutos, segundos);
}



  
  
  


