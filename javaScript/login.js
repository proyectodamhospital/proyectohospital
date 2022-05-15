import {
    getTask,
    getTaskroot
} from './firebase.js'

window.addEventListener('DOMContentLoaded', async () => {


})

const log = document.getElementById('loginform')

log.addEventListener('submit', async (e) => {
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
        } else {
            x = false;
        }
    });


    /**
     * comprobar cliente
     */

    const querySnapshot2 = await getTask()
    querySnapshot2.forEach(doc => {
        if (usuario.value == doc.data().usuario && contraseña.value == doc.data().contraseña) {
            x = true;
            console.log("soy el puto amo")
        } else {
            x = false;
            console.log("NOOOOOOOOOOOOO soy el puto amo")
        }
        console.log(doc.id, '=>', doc.data().usuario);
        console.log(doc.id, '=>', doc.data().contraseña);


        /*
        COPIAR EL BLOQUE PARA EL ROOT POR QUE FALTA PRIORIZAR EL ORDEN DE BUSQUEDA POR TABLAS
        
        FALTA REDIRECCIONAMIENTO POR TIPO DE PERSONA
        */

        // console.log(doc.data());

    });



})