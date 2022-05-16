import {
    saveDoctor,
    deleteDoco

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


    const templateElement = (data, position) => {
        return (`
            <strong>Doctor - </strong> ${data}
            <button onclick="removeElement(event, ${position})">Alta</button>
        `)
    }
    $btnAdd.addEventListener("click", (event) => {
        if ($form.name.value != "" && $form.email.value != "" && $form.tlf.value != "" && $form.dni.value != "" && $form.pass.value != "") {
            let index = addJsonElement({
                name: $form.name.value,
                email: $form.email.value,
                tlf: $form.tlf.value,
                dni: $form.dni.value,
                lastName: $form.pass.value,


            })
            const $div = document.createElement("div")
            $div.classList.add("notification", "is-link", "is-light", "py-2", "my-1")
            $div.innerHTML = templateElement(`${$form.name.value}-${$form.email.value}-${$form.tlf.value}-${$form.dni.value}-${$form.pass.value}`, index)

            $divElements.insertBefore($div, $divElements.firstChild)
            //$form.reset()

        } else {
            alert("Complete los campos")
        }

    })


})()


const frmUsers = document.getElementById("frmUsers")

//fin menu dinamico
frmUsers.addEventListener('submit', (e) => {
    e.preventDefault()


    const nombre = frmUsers['nomform']
    const correo = frmUsers['emailform']
    const telefono = frmUsers['tfnform']
    const DNI = frmUsers['dniform']
    const contraseña = frmUsers['passform']

    console.log(nombre.value)
    console.log(DNI.value)
    saveDoctor(
        nombre.value,
        correo.value,
        telefono.value,
        DNI.value,
        contraseña.value
    )



})
const frmDelUsers = document.getElementById("frmDelUsers")


frmDelUsers.addEventListener('submit', (e) => {
    e.preventDefault()
    const dni = frmDelUsers['dni-delete']

    deleteDoco(

        dni.value

    )

    console.log(dni.value)

})


/*
frmDelUsers.addEventListener('submit', async (e) => {
    e.preventDefault()
    const dni = frmDelUsers['dni-delete']

    const querySnapshot = await getTaskDoctor()
    querySnapshot.forEach(doc => {
        if (dni.value == doc.data().dni) {
            x = true;
            console.log("soy el puto amo")
            deleteDoc(doc(db, "doctores", dni));

        } else {
            x = false;
            console.log("NOOOOOOOOOOOOO soy el puto amo")
        }



        
        COPIAR EL BLOQUE PARA EL ROOT POR QUE FALTA PRIORIZAR EL ORDEN DE BUSQUEDA POR TABLAS
        
        FALTA REDIRECCIONAMIENTO POR TIPO DE PERSONA
        

        // console.log(doc.data());

    });

*/