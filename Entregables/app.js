window.addEventListener("load", function () {

    //al cargar se envia peticion al servidor de los datos del array
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
            console.log(datos);
            //creo array con los datos json de la respuesta ya parseados
            var arrayAlumnos = datos;

            //por cada alumno se creará un div con: header con su nombre, un textarea y un boton
            for (let i = 0; i < arrayAlumnos.length; i++) {
                let alumno = document.createElement("div");
                alumno.innerHTML =
                    "<header>" + arrayAlumnos[i] + '</header>' +
                    '<textarea id="" cols="30" rows="1"></textarea>';
                let boton = document.createElement("input");
                boton.setAttribute("type", "button");

                //añado atributo con el nombre del alumno para poder recogerlo facilmente en "enviarIncidencia()"
                boton.setAttribute("name", arrayAlumnos[i]);
                boton.value = "Enviar";

                //cada boton tiene un eventlistener para escribir al servidor
                boton.addEventListener("click", enviarIncidencia);
                alumno.appendChild(boton);

                document.body.appendChild(alumno);
            }
        })
})


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
            body: "option=escribir&nombre=" + nombre + "&texto=" + texto
        }

        fetch("server.php", params)
            .then(function (res) {
                return res.text();
            }).then(function (data) {
                console.log(data);
            })
    }
    this.previousSibling.value = "";
}