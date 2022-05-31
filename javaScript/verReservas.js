import {
    verReservas
} from './firebase.js'


var reserva;
await verReservas().then(function(value) {
    reserva = value;
});

const infosacada = document.getElementById('infoSacada');
console.log(reserva)
console.log(localStorage.dni)

let lineas = "";

reserva.forEach(infosacada => {
    lineas += `<p>dni: ${infosacada.dni} doctor: ${infosacada.doctor} 
    especialidad: ${infosacada.especialidad} fecha: ${infosacada.fecha}
    hora: ${infosacada.hora}   <p><br><br>`
});

infosacada.innerHTML = lineas;