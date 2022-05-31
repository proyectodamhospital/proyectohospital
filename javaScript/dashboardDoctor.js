import {
    changePassword,
    changePasswordAuth,
    sessionActiva,
    saveComment,
    EnviarEmail,

} from './firebase.js'


window.addEventListener('DOMContentLoaded', async() => {
    sessionActiva();
})


//inicio desplegable izquierda
const toggle = document.querySelector(".toggle")
const menuDashboard = document.querySelector(".menu-dashboard")
const iconoMenu = toggle.querySelector("i")
const enlacesMenu = document.querySelectorAll(".enlace")

toggle.addEventListener("click", () => {
    menuDashboard.classList.toggle("open")

    if (iconoMenu.classList.contains("bx-menu")) {
        iconoMenu.classList.replace("bx-menu", "bx-x")
    } else {
        iconoMenu.classList.replace("bx-x", "bx-menu")
    }
})

enlacesMenu.forEach(enlace => {
        enlace.addEventListener("click", () => {
            menuDashboard.classList.add("open")
            iconoMenu.classList.replace("bx-menu", "bx-x")
        })
    })
    //fin de desplegable izquierda


//inicio menu dinamico
let parameters = []

//AQUI ESTAN LA FUNCION QUE HACE 
function removeElement(event, position) {
    event.target.parentElement.remove()
    delete parameters[position]
}
//FIN

const addJsonElement = json => {
    parameters.push(json)
    return parameters.length - 1
}

(function load() {
    const $form = document.getElementById("frmUsers")
    const $divElements = document.getElementById("divElements")
    const $btnAdd = document.getElementById("btnAdd")

    const templateElement = (data, position) => {
        return (`
            <strong>Doctor - </strong> ${data}
            <button onclick="removeElement(event, ${position})">Eliminar</button>
        `)
    }
    $btnAdd.addEventListener("click", (event) => {
        if ($form.name.value != "" && $form.HoraCita.value != "" && $form.dni.value != "" && $form.pais.value != "") {
            let index = addJsonElement({
                name: $form.name.value,
                dni: $form.dni.value,
                pais: $form.pais.value,
                HoraCita: $form.HoraCita.value
            })
            const $div = document.createElement("div")
            $div.classList.add("notification", "is-link", "is-light", "py-2", "my-1")
            $div.innerHTML = templateElement(`${$form.name.value}-${$form.dni.value}-${$form.pais.value}-${$form.HoraCita.value}`, index)

            $divElements.insertBefore($div, $divElements.firstChild)


            //$form.reset()
        } else {
            alert("Complete los campos")
        }
    })
})()

//fin menu dinamico

const frmChangeUsers = document.getElementById("frmChangeUsers")


frmChangeUsers.addEventListener('submit', (e) => {
    e.preventDefault()

    const oldPass = frmChangeUsers['oldPass']
    const newPAss = frmChangeUsers['newPAss']
    const newPAss2 = frmChangeUsers['newPAss2']

    changePassword(oldPass.value, newPAss.value);
    changePasswordAuth(newPAss.value);
    EnviarEmail();

})


const commentCita = document.getElementById("commentCita")
const opDoctor = document.getElementById("doctor")
const opHora = document.getElementById("hora2")
const opFecha = document.getElementById("fecha2")
const opComent = document.getElementById("comentario")
console.log(commentCita.getChildItem)

commentCita.addEventListener('submit', (e) => {
    e.preventDefault()

    const comentario = opComent.value;
    const hora = opHora.value;
    const fecha = opFecha.value;
    const doctor = opDoctor.value;


    saveComment(comentario, doctor, fecha, hora);
    commentCita.reset();


})

const misCitas = document.querySelector("#botonVer");

misCitas.addEventListener("click", verReserva);

var cita;
await verCitas().then(function(value) {
    cita = value;
});

const divElements = document.getElementById('divElements');
console.log(divElements)
console.log(localStorage.dni)

let lineas = "";

cita.forEach(elemento => {
    lineas += `<p>Comentario:  ${elemento.comentario} doctor: ${elemento.doctor} 
    fecha: ${elemento.fecha} hora: ${elemento.hora}   <p><br><br>`
});

divElements.innerHTML = lineas;