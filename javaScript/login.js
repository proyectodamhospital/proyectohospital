import {
    getTask,
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
            //      const uid = user.uid;

            window.location.href = '../html/citas.html';


        } else {
            x = false;
        }
        console.log(doc.id, '=>', doc.data().usuario);
        console.log(doc.id, '=>', doc.data().contraseña);


    });
    /*    onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/firebase.User
                const uid = user.uid;
                // ...
            } else {
                // User is signed out
                // ...
            }
        });
    */

})