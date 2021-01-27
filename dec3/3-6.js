let boton = document.getElementById("boton");
boton.addEventListener("click", engineApp);

function engineApp(ev) {
    ev.preventDefault();
    //split por lineas
    let texto = document.getElementById("textoCsv").value;
    var arrayFilas = texto.split("\n");
    let i = 0;
    let arrayComas = [];
    for (fila of arrayFilas) {
        arrayComas[i] = fila.split(";");

        i++
    }

    console.log(arrayComas[0]);
    console.log(arrayComas);

    let tabla = document.getElementById("tabla");
    for (let i = 0; i < arrayComas.length; i++) {
        let tr = document.createElement("TR");
        for (let j = 0; j < arrayComas[i].length; j++) {
            let td = document.createElement("TD");
            td.innerHTML = arrayComas[i][j];
            tr.appendChild(td);
        }
        tabla.appendChild(tr);
    }


}