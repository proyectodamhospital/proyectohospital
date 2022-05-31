import {
    getTask,
    getTaskRecep,
    getTaskroot,
    getTaskDoct,
    EntrarConAuth,
    CrearAuthUser,


} from './firebase.js'

window.addEventListener('DOMContentLoaded', async() => {


})


const log = document.getElementById('loginform')

log.addEventListener('submit', async(e) => {
    e.preventDefault()
    var x = Boolean(false);
    const usuario = log['log-usu']
    const contraseña = log['log-contra']

    /**
     * comprobar root
     */
    const querySnapshot = await getTaskroot()
    querySnapshot.forEach(doc => {
        if (usuario.value == doc.data().usuario && contraseña.value == doc.data().contraseña) {
            x = true;
            window.location.href = '../html/dashboard.html';
        }
    })

    /**
     * comprobar recepcionista
     */
    const querySnapshot2 = await getTaskRecep()
    querySnapshot2.forEach(doc => {
        if (usuario.value == doc.data().usuario && contraseña.value == doc.data().contraseña) {
            x = true;
            CrearAuthUser(doc.data().correo, doc.data().contraseña);
            EntrarConAuth(doc.data().correo, doc.data().contraseña);

            window.location.href = '../html/dashboardRecepcionista.html';
        }
        //   console.log(doc.id, '=>', doc.data().usuario);
        //  console.log(doc.id, '=>', doc.data().contraseña);
    })

    /**
     * comprobar doctor
     */
    const querySnapshot3 = await getTaskDoct()
    querySnapshot3.forEach(doc => {
        if (usuario.value == doc.data().usuario && contraseña.value == doc.data().contraseña) {
            x = true;
            CrearAuthUser(doc.data().correo, doc.data().contraseña);
            EntrarConAuth(doc.data().correo, doc.data().contraseña);

            window.location.href = '../html/dashboardDoctor.html';
        }
        //   console.log(doc.id, '=>', doc.data().usuario);
        //  console.log(doc.id, '=>', doc.data().contraseña);
    })



    /**
     * comprobar cliente
     */
    const querySnapshot4 = await getTask()
    querySnapshot4.forEach(doc => {
        if (usuario.value == doc.data().usuario && contraseña.value == doc.data().contraseña) {
            x = true;
            EntrarConAuth(doc.data().correo, doc.data().contraseña);
            //  console.log(usuario.value)
            // console.log(contraseña.value)
            window.location.href = '../html/citas.html';
        }

    })

})