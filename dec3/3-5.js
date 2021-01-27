
window.addEventListener("load", function () {
    let boton = document.getElementById("botonPost");
    boton.addEventListener("click", postear);

    function postear(ev) {
        ev.preventDefault();

        let texto = document.getElementById("textoMensaje");
        if (texto.value.trim().length == 0) {
            return;
        }
        let feed = document.getElementById("feed");
        let liPost = document.createElement("LI");
        let textoFecha = addFecha();

        let botonLike = document.createElement("BUTTON");
        botonLike.innerHTML = "Like";

        let botonDestacar = document.createElement("BUTTON");
        botonDestacar.innerHTML = "Destacar";

        let botonBorrar = document.createElement("BUTTON");
        botonBorrar.innerHTML = "Borrar";

        liPost.innerHTML = texto.value + textoFecha;


        liPost.appendChild(botonLike);
        liPost.appendChild(botonDestacar);
        liPost.appendChild(botonBorrar);

        texto.value = "";

        feed.appendChild(liPost);

        botonBorrar.addEventListener("click", borrarPost);
        botonDestacar.addEventListener("click", destacarPost);
        botonLike.addEventListener("click", gustarPost);

    }
})


function addFecha() {
    let fecha = new Date();
    let day = fecha.getDate();
    let month = fecha.getMonth() + 1;
    let year = fecha.getFullYear();

    let hora = fecha.getHours();
    if (hora < 10) {
        hora = "0" + hora;
    }
    let minuto = fecha.getMinutes();
    if (minuto < 10) {
        minuto = "0" + minuto;
    }
    let segundo = fecha.getSeconds();
    if (segundo < 10) {
        segundo = "0" + segundo;
    }
    return `<hr> <span>${day}/${month}/${year} ${hora}:${minuto}:${segundo}</span>`;
}

function borrarPost() {
    var post = this.parentElement;
    document.getElementById("feed").removeChild(post);
}

function destacarPost() {
    let arrayHermanos = this.parentNode.parentNode.children;
    let post = this.parentNode;
    for (hermano of arrayHermanos) {
        if (hermano != post) {
            hermano.setAttribute("class", "no-destacado");
        } else {
            hermano.setAttribute("class", "destacado");
        }
    }
}

function gustarPost() {
    if (this.style.color != "blue") {
        this.style.color = "blue";
        this.style.backgroundColor = "white";

    } else {
        this.style.color = "black";
        this.style.backgroundColor = "#FCFCFC";
    }
}