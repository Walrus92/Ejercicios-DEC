let contactos = []
let total = 0

function insertaContacto(agenda, contacto) {
    agenda[total] = contacto
    contacto.id = total
    total++
}

function dameContacto(agenda, id) {
    return agenda[id]
}

/*
 
		======== Modificación del DOM ======== 
 
	 */



// Añade al DOM un nuevo item con el nombre del contacto
function muestroNombreContacto(contacto) {
    var li = document.createElement("li")
    rellenaElementoLista(li, contacto)
    document.getElementById("lista").appendChild(li)
}


function rellenaElementoLista(li, contacto) {
    var a1 = document.createElement("a")
    a1.innerHTML = contacto.nombre + " " + contacto.apellidos
    a1.href = "#"
    a1.setAttribute("id", "muestra-" + contacto.id)

    var a2 = document.createElement("a")
    a2.innerHTML = " [Edita] "
    a2.href = "#"
    a2.setAttribute("id", "edita-" + contacto.id)

    var a3 = document.createElement("a")
    a3.innerHTML = " [Borra] "
    a3.href = "#"
    a3.setAttribute("id", "borra-" + contacto.id)

    li.appendChild(a1)
    li.appendChild(a2)
    li.appendChild(a3)

    a1.addEventListener("click", muestraInfoContacto)
    a2.addEventListener("click", editaContacto)
    a3.addEventListener("click", borraContacto)
}




// Añade al DOM la info del contacto en la capa lateral

function muestraInfoContacto() {

    // Limpio la capa
    var info = document.getElementById("info")
    info.innerHTML = ""

    // Obtengo el contacto de la Agenda a través de su Id
    var id = parseInt(this.getAttribute("id").split("-")[1])
    var contacto = dameContacto(contactos, id)


    if (contacto == undefined) {
        return false
    }

    // Reconstruyo la capa de información
    var nombre = document.createElement("li")
    nombre.innerHTML = contacto.nombre
    var apellidos = document.createElement("li")
    apellidos.innerHTML = contacto.apellidos
    var email = document.createElement("li")
    email.innerHTML = contacto.email
    var tel = document.createElement("li")
    tel.innerHTML = contacto.tel

    info.appendChild(nombre)
    info.appendChild(apellidos)
    info.appendChild(email)
    info.appendChild(tel)
}



function editaContacto() {
    var id = this.id.replace(/edita-/, "")

    id = parseInt(id)
    var contacto = dameContacto(contactos, id)

    document.forms.nuevo.nombre.value = contacto.nombre
    document.forms.nuevo.apellidos.value = contacto.apellidos
    document.forms.nuevo.tel.value = contacto.tel
    document.forms.nuevo.email.value = contacto.email


    document.getElementById("nuevo_c").removeEventListener("click", accionGuardar)
    document.getElementById("nuevo_c").addEventListener("click", accionEditar)
    document.getElementById("nuevo_c").value = "Editar"

    function accionEditar() {
        // Limpio la capa info
        var info = document.getElementById("info")
        info.innerHTML = ""

        // Actualizo en el array
        contacto.nombre = document.forms.nuevo['nombre'].value
        contacto.apellidos = document.forms.nuevo['apellidos'].value
        contacto.email = document.forms.nuevo['email'].value
        contacto.tel = document.forms.nuevo['tel'].value

        // Actualizo en el dom
        var li = document.getElementById("edita-" + id).parentElement
        li.innerHTML = ""


        rellenaElementoLista(li, contacto)

        document.getElementById("nuevo_c").removeEventListener("click", accionEditar)
        document.getElementById("nuevo_c").addEventListener("click", accionGuardar)
        document.getElementById("nuevo_c").value = "Guardar"
    }


}



function borraContacto() {
    var padre = this.parentElement
    document.getElementById("lista").removeChild(padre)
}


// Manejador de evento de guardado
function accionGuardar() {

    var nombre = document.forms.nuevo['nombre'].value
    var apellidos = document.forms.nuevo['apellidos'].value
    var email = document.forms.nuevo['email'].value
    var tel = document.forms.nuevo['tel'].value
    var c = {
        nombre: nombre,
        apellidos: apellidos,
        email: email,
        tel: tel
    }
    insertaContacto(contactos, c)
    muestroNombreContacto(c)

}


/*
 
		======== Código principal ======== 
 
	 */


window.addEventListener("load", function init() {

    document.getElementById("nuevo_c").addEventListener("click", accionGuardar)

})


