let arrayTasks = [];
let idTask = 0;
let botonCrear = document.getElementById("botonCrear");

botonCrear.addEventListener("click", guardarTarea);

function guardarTarea() {
    let tituloTarea = document.getElementById("tituloTarea");

    let textoTarea = document.getElementById("textoTarea");

    let task = {
        name: tituloTarea.value,
        descr: textoTarea.value
    }
    addTask(task, arrayTasks);
    mostrarTarea(task);
    tituloTarea.value = "";
    textoTarea.value = "";
}

function addTask(task, arrayTasks) {
    arrayTasks[idTask] = task;
    task.id = idTask;
    idTask++;
}

function mostrarTarea(task) {
    let lista = document.getElementById("listaTareas");
    let li = document.createElement("LI");
    li.setAttribute("id", task.id);
    li.innerHTML = task.name;
    li.addEventListener("click", mostrarInfo);
    lista.appendChild(li);
}
let botonBorrar = document.createElement("input");

function mostrarInfo() {
    botonBorrar.innerHTML = "";
    botonBorrar.style.display = "block";
    let id = this.getAttribute("id");
    let tarea = getTask(id);
    console.log(tarea);
    let cabecera = document.getElementById("cabeceraTarea");
    cabecera.innerHTML = tarea.name.toUpperCase();
    let descr = document.getElementById("textoDescripcion");
    descr.innerHTML = tarea.descr;

    document.getElementsByClassName("right")[0].appendChild(botonBorrar);

    botonBorrar.setAttribute("type", "button");
    botonBorrar.setAttribute("class", "borrador");
    botonBorrar.setAttribute("value", "Borrar");
    botonBorrar.setAttribute("id", `borrar-${id}`);
    botonBorrar.addEventListener("click", borrarTarea);
}

function borrarTarea() {
    idTask--;
    botonBorrar.style.display = "none";
    let id = parseInt(this.getAttribute("id").split("-")[1]);
    limpiarDerecha();
    limpiarLista(id);
    limpiarArray(id);
}

function limpiarDerecha() {
    let cabecera = document.getElementById("cabeceraTarea");
    cabecera.innerHTML = "";
    let descr = document.getElementById("textoDescripcion");
    descr.innerHTML = "";
}

function limpiarLista(id) {
    let padre = document.getElementById(id).parentNode;
    padre.removeChild(document.getElementById(id));
}

function limpiarArray(id) {

    let lis = document.getElementById("listaTareas").children;
    console.log(lis);

    arrayTasks.splice(id, 1);
    for (let i = 0; i < arrayTasks.length; i++) {
        if (arrayTasks[i] != undefined) {
            arrayTasks[i].id = i;
        }
    }
    for (let i = 0; i < lis.length; i++) {
        if (lis.length == 0) {
            botonBorrar.innerHTML = "";
        }
        lis[i].setAttribute("id", i);
    }
}

function getTask(id) {
    return arrayTasks[id];
}