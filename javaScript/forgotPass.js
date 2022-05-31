import {
    ResetPass
} from './firebase.js'

window.addEventListener('DOMContentLoaded', () => {


})

const ForgotPass = document.getElementById('ForgotPass')

ForgotPass.addEventListener('submit', (e) => {
    e.preventDefault()


    const correo = ForgotPass['correo']
    ResetPass(correo);



})