let boton = document.getElementById("boton");
let lista = document.getElementById("lista");
let ficha = document.getElementById("ficha");
let arrayContactos = [];
let cId = 0;

//PARTE A
/* boton.addEventListener("click", function (ev) {
    ev.preventDefault();
    
    let li = document.createElement("LI");
    li.innerHTML = `${nombre.value} ------ ${mail.value} ------ ${telefono.value}` ;
    lista.appendChild(li);
    document.body.appendChild(lista);
}) */

//PARTE B 

boton.addEventListener("click", function (ev) {
    ev.preventDefault();

    let nombre = document.getElementById("nombre");
    let telefono = document.getElementById("telefono");
    let email = document.getElementById("mail");
    if ((nombre.value != "") || (telefono.value != "") || (email.value != "")) {
        var contacto = {
            name: nombre.value,
            tel: telefono.value,
            mail: email.value
        }
    }
    guardarContacto(contacto);
    mostrarContacto(contacto);
    //limpio campos input
    nombre.value = "";
    telefono.value = "";
    email.value = "";
    //

})


function mostrarContacto(contacto) {

    let li = document.createElement("LI");
    li.setAttribute("id", contacto.id);
    li.innerHTML = `${contacto.name}`;
    let butModificar = document.createElement("BUTTON");
    butModificar.innerHTML = "Modificar";
    li.appendChild(butModificar);
    lista.appendChild(li);

    li.addEventListener("click", mostrarFicha);
    butModificar.addEventListener("click", modificarDatos);

}

/* PREGUNTAR COMO LANZAR EXCEPCIONES??
  if (empty(nombre) || empty(telefono) || empty(email)) {
      throw Error("campos vacios");
  } */

function guardarContacto(contacto) {
    arrayContactos[cId] = contacto;
    arrayContactos[cId].id = cId;
    cId++;
}

function mostrarFicha() {
    ficha.innerHTML = "";
    let id = this.getAttribute("id");

    let name = document.createElement("LI");
    let email = document.createElement("LI");
    let tel = document.createElement("LI");
    name.innerHTML = `${arrayContactos[id].name}`;
    email.innerHTML = `${arrayContactos[id].mail}`;
    tel.innerHTML = `${arrayContactos[id].tel}`;
    ficha.appendChild(name);
    ficha.appendChild(email);
    ficha.appendChild(tel);
    document.body.appendChild(ficha);
}

function modificarDatos(ev) {
    ev.preventDefault();
    ev.stopPropagation();

    boton.setAttribute("value", "Modificar");

    let id = this.parentNode.getAttribute("id");
    console.log(id);

    boton.addEventListener("click", function (ev) {

        ev.preventDefault();
        ev.stopPropagation();
        boton.setAttribute("value", "Añadir");

        let liC = document.getElementById(id);
        liC.innerHTML = "";

        let nombre = document.getElementById("nombre");
        let telefono = document.getElementById("telefono");
        let email = document.getElementById("mail");

        if ((nombre.value != "") || (telefono.value != "") || (email.value != "")) {
            let changeContact = {
                name: nombre.value,
                tel: telefono.value,
                mail: email.value,
                id: id
            }
            arrayContactos[id] = changeContact;
            liC.parentNode.removeChild(liC);
        }

        nombre.value = "";
        telefono.value = "";
        email.value = "";

    })

}

/*   Crea una sencilla aplicacion para la gestion de contactos y amigos. 
La aplicacion debe tener en la parte
superior un formulario donde se vayan introduciendo los datos de tus contactos (nombre, telefono y mail).
Ve a~nadiendo la siguiente funcionalidad a tu aplicacion de forma progresiva:
Bajo este formulario debes ir mostrando en una lista los diferentes contactos a~nadidos. En cada lnea
muestra el nombre, el email y el telefono)
Ahora en tu lista solo ha de aparecer el nombre del contacto. Crea la posibilidad de clickear sobre
cada nombre y haz que en la parte derecha aparezca una cha con el resto de datos de ese contacto.
Crea ahora junto a cada nombre de la lista un boton o enlace que permita editar los campos de ese
contacto (Todos o todos menos el nombre a tu eleccion)
Crea junto a cada nombre un boton o enlace que permita eliminar un contacto de la lista
5.  */