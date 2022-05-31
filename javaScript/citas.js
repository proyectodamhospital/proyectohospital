import {
    saveCita,
    sessionActiva,
    EnviarEmail
} from './firebase.js'


window.addEventListener('DOMContentLoaded', async() => {
    sessionActiva();
})

const formCita = document.getElementById('formCita')
formCita.addEventListener('submit', (e) => {
    e.preventDefault()


    const dni = formCita['dni']
    const fecha = formCita['fecha']
    const hora = formCita['hora']
    const doctor = formCita['doctor']
    const especilidad = formCita['especilidad']

    // console.log(hora.value) funciona

    saveCita(
        // console.log(fecha.value),
        // console.log(hora.value),

        fecha.value,
        hora.value,
        doctor.value,
        especilidad.value,
        dni.value
    )
})

const botonVer = document.querySelector("#botonVer");

botonVer.addEventListener("click", verReserva);
async function verReserva() {
    const textodni = document.getElementById('dni');
    localStorage.dni = dni.value;
    window.location.href = "verReservas.html"

}