import {
    getTask,
    getTaskRecep,
    getTaskroot,

} from './firebase.js'
/*
import {
    getAuth,
    onAuthStateChanged
} from "firebase/auth";
*/


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
            //      const uid = user.uid;

            window.location.href = '../html/dashboard.html';

        } else {}
    })



    /**
     * comprobar cliente
     */
    const querySnapshot4 = await getTask()
    querySnapshot4.forEach(doc => {
        if (usuario.value == doc.data().usuario && contraseña.value == doc.data().contraseña) {
            x = true;
            window.location.href = '../html/citas.html';
        } else {}
        console.log(doc.id, '=>', doc.data().usuario);
        console.log(doc.id, '=>', doc.data().contraseña);


    })


    /**
     * comprobar recepcionista
     */
    const querySnapshot3 = await getTaskRecep()
    querySnapshot3.forEach(doc => {
        if (usuario.value == doc.data().usuario && contraseña.value == doc.data().contraseña) {
            x = true;
            window.location.href = '../html/dashboardRecep.html';
        } else {}
        console.log(doc.id, '=>', doc.data().usuario);
        console.log(doc.id, '=>', doc.data().contraseña);
    })



})