import {
    saveCita
} from './firebase.js'


window.addEventListener('DOMContentLoaded', async () => {


})

const formCita = document.getElementById('formCita')


formCita.addEventListener('submit', (e) => {
    e.preventDefault()

    const fecha = formCita['fecha']
    const hora = formCita['hora']
    const doctor = formCita['doctor']
    const especilidad = formCita['especilidad']
    saveCita(
        fecha.value,
        hora.value,
        doctor.value,
        especilidad.value

    )











})