window.addEventListener("load", init);

function init() {

    //al cargar inicialmente se envia peticion al servidor de los datos del array
    var params = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
        },
        body: "option=descargar"
    }
    fetch("server.php", params)
        .then(function (respuesta) {
            return respuesta.json();
        }).then(function (datos) {
            //llamo a funcion escritora, pasando como parametro los datos devueltos del servidor
            escribirTabla(datos);
        })

    function escribirTabla(arrayAlumnos) {

        //por cada alumno se creará un div con: header con su nombre, un textarea y un boton
        //console.log(arrayAlumnos)
        for (let i = 0; i < arrayAlumnos.length; i++) {
            let alumno = document.createElement("div");
            //console.log(arrayAlumnos[i].nombre)
            alumno.innerHTML =
                "<header>" + arrayAlumnos[i].nombre + '</header>' +
                '<textarea id="" cols="30" rows="1"></textarea>';
            let boton = document.createElement("input");
            boton.setAttribute("type", "button");

            //añado atributo con el nombre del alumno para poder recogerlo en "enviarIncidencia()"
            boton.setAttribute("name", arrayAlumnos[i].nombre);
            boton.value = "Enviar";

            //cada boton tiene un eventlistener para escribir al servidor
            boton.addEventListener("click", enviarIncidencia);
            alumno.appendChild(boton);

            document.body.appendChild(alumno);
        }

    }
}

function enviarIncidencia() {
    //recojo valor del atributo con el nombre
    var nombre = encodeURIComponent(this.getAttribute("name"));

    //si el textarea no está vacio entonces se ejecutará toda la aplicación
    if (this.previousSibling.value != "") {

        //recojo valor del texto,que es el nodo anterior
        var texto = encodeURIComponent(this.previousSibling.value);

        var params = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
            },
            //option=escribir para controlar la operacion en php
            body: "option=escribir&nombre=" + nombre + "&texto=" + texto
        }

        fetch("server.php", params)
    }

    //limpio el campo de texto
    this.previousSibling.value = "";
}