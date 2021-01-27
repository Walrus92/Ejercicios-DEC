function aleatorio() {
    return Math.floor(Math.random() * 10);
}

//recorro todas las filas, y sus td internos los relleno con funcion aleatorio
var filas = document.querySelectorAll("tr:not(.cabecera)");
for (let i = 0; i < filas.length; i++) {
    var td = filas[i].childNodes;
    for (let j = 0; j < td.length; j++) {
        td[j].innerHTML = aleatorio();
    }
}
var filaSumatorio = document.createElement("TR");
var tabla = document.querySelector("table")

for (let i = 0; i < 5; i++) {
    var celda = document.createElement("TD");
    celda.innerHTML = sumar(i);
    filaSumatorio.appendChild(celda);
}
tabla.appendChild(filaSumatorio);

function sumar(i) {

    var sumaCeldas = 0;
    var filas= document.querySelectorAll("tr:not(.cabecera)");
    for (let index = 0; index < filas.length; index++) {
        sumaCeldas += parseInt(filas[index].children[i].innerHTML,10);
    }
    return sumaCeldas;
}