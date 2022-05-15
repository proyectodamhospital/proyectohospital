import {
    saveTask
} from './firebase.js';



window.addEventListener('DOMContentLoaded', () => {


})

const formAlta = document.getElementById('formAlta')

formAlta.addEventListener('submit', (e) => {
    e.preventDefault()

    const nombre = formAlta['altaUsu-nombre']
    const apellido = formAlta['altaUsu-ape']
    const DNI = formAlta['altaUsu-DNI']
    const telefono = formAlta['altaUsu-tfn']
    const correo = formAlta['altaUsu-email']
    const usuario = formAlta['altaUsu-usu']
    const contraseña = formAlta['altaUsu-contra']
    const contraseña2 = formAlta['altaUsu-contra2']


    if (contraseña.value != contraseña2.value) {
        alert("las contraseñas no coinciden");
    } else if (!correo.value.includes("@") && !correo.value.includes(".com") || !correo.value.includes(".es")) {
        alert("el correo debe de contener @ y acabar en .com o .es");
    } else {
        saveTask(
            nombre.value,
            apellido.value,
            DNI.value,
            telefono.value,
            correo.value,
            usuario.value,
            contraseña.value
        )



    }







})