import {
    deleteDoco,
    saveDoctor,
    saveSecret,

} from './firebase.js'

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

function ModifyElement(event, position) {
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
    const $btnChange = document.getElementById("btnChange")


    const templateElement = (data, position) => {
        return (`
            <strong>Doctor - </strong> ${data}
            <button onclick="removeElement(event, ${position})">Alta</button>
        `)
    }
    $btnAdd.addEventListener("click", (event) => {
        if ($form.name.value != "") {
            let index = addJsonElement({
                name: $form.name.value,
                dni: $form.dni.value,
                email: $form.email.value,
                tlf: $form.tlf.value,
                provincia: $form.provincia.value,
                poblacion: $form.poblacion.value,
                pais: $form.pais.value,
                direccion: $form.direccion.value,
                especialidad: $form.especialidad.value,
                despacho: $form.despacho.value,
                //  hora: $form.hora.value
            })
            const $div = document.createElement("div")
            $div.classList.add("notification", "is-link", "is-light", "py-2", "my-1")
            $div.innerHTML = templateElement(`${$form.name.value}-${$form.dni.value}-${$form.email.value}-${$form.tlf.value}`, index)

            //   $divElements.insertBefore($div, $divElements.firstChild)


            //$form.reset()
        } else {
            alert("Complete los campos")
        }
    })
})()


//guardar doctor

const frmUsers = document.getElementById("frmDoc")

frmUsers.addEventListener('submit', (e) => {
    e.preventDefault()


    const nombre = frmUsers['nomform']
    const provincia = frmUsers['provinform']
    const poblacion = frmUsers['poblaform']
    const correo = frmUsers['emailform']
    const telefono = frmUsers['tfnform']
    const DNI = frmUsers['dniform']
    const pais = frmUsers['paisform']
    const direccion = frmUsers['direccform']
    const especialidad = frmUsers['espeform']
    const despacho = frmUsers['despform']
    const hora = frmUsers['horaform']

    saveDoctor(
        nombre.value,
        provincia.value,
        poblacion.value,
        correo.value,
        telefono.value,
        DNI.value,
        pais.value,
        direccion.value,
        especialidad.value,
        despacho.value,
        hora.value,
    )
})


const frmUsers2 = document.getElementById("frmDoc2")

frmUsers2.addEventListener('submit', (e) => {
    e.preventDefault()


    const nombre = frmUsers2['nomform']
    const provincia = frmUsers2['provinform']
    const poblacion = frmUsers2['poblaform']
    const correo = frmUsers2['emailform']
    const telefono = frmUsers2['tfnform']
    const DNI = frmUsers2['dniform']
    const pais = frmUsers2['paisform']
    const direccion = frmUsers2['direccform']
    const especialidad = frmUsers2['espeform']
    const despacho = frmUsers2['despform']
    const hora = frmUsers2['horaform']

    saveDoctor(
        nombre.value,
        provincia.value,
        poblacion.value,
        correo.value,
        telefono.value,
        DNI.value,
        pais.value,
        direccion.value,
        especialidad.value,
        despacho.value,
        hora.value,
    )
})



const frmRecp = document.getElementById("frmRecp")

//fin menu dinamico
frmRecp.addEventListener('submit', (e) => {
    e.preventDefault()

    const nombre = frmRecp['nomform']
    const provincia = frmRecp['provinform']
    const poblacion = frmRecp['poblaform']
    const correo = frmRecp['emailform']
    const telefono = frmRecp['tfnform']
    const DNI = frmRecp['dniform']
    const pais = frmRecp['paisform']
    const direccion = frmRecp['direcform']

    saveSecret(
        nombre.value,
        provincia.value,
        poblacion.value,
        correo.value,
        telefono.value,
        DNI.value,
        pais.value,
        direccion.value
    )
})

const frmDelUsers = document.getElementById("frmDelUsers")


frmDelUsers.addEventListener('submit', (e) => {
    e.preventDefault()
    const dni = frmDelUsers['dni-delete']
    deleteDoco(
        dni.value
    )

})