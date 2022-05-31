import {
    saveTask,
    CrearAuthUser,
    sessionActiva,
} from './firebase.js'

window.addEventListener('DOMContentLoaded', () => {

    sessionActiva();
})

const formAlta = document.getElementById('formAlta')

formAlta.addEventListener('submit', (e) => {
    e.preventDefault()

    const nombre = formAlta['altaUsu-nombre']
    const apellido = formAlta['altaUsu-ape']
    const direccion = formAlta['altaUsu-dire']
    const poblacion = formAlta['altaUsu-pobla']
    const provincia = formAlta['altaUsu-provi']
    const pais = formAlta['altaUsu-pais']
    const DNI = formAlta['altaUsu-DNI']
    const telefono = formAlta['altaUsu-tfn']
    const correo = formAlta['altaUsu-email']
    const usuario = formAlta['altaUsu-usu']
    const contraseña = formAlta['altaUsu-contra']
    const contraseña2 = formAlta['altaUsu-contra2']

    saveTask(
        nombre.value,
        apellido.value,
        direccion.value,
        poblacion.value,
        provincia.value,
        pais.value,
        DNI.value,
        telefono.value,
        correo.value,
        usuario.value,
        contraseña.value)

    CrearAuthUser(correo.value, contraseña.value);





})