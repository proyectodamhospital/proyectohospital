import {
    saveTask
} from './firebase.js'

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






    saveTask(
        nombre.value,
        apellido.value,
        DNI.value,
        telefono.value,
        correo.value,
        usuario.value,
        contraseña.value)


})


/*
function sendEmail() {
	Email.send({
	Host: "smtp.gmail.com",
	Username : "<cerveramonzo@gmail.com>",
	Password : "<Jose93z4>",
	To : '<proyectodamhospital@gmail.com>',
	From : "<cerveramonzo@gmail.com>",
	Subject : "<email subject>",
	Body : "<eseeeeeee es>",
	}).then(
		message => alert("mail sent successfully")
	);
}

*/