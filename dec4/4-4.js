let valores = document.getElementsByClassName('valor')

function iniciarValores() {
    if (valores[0].value == undefined) {
        for (let i = 0; i < valores.length; i++) {
            valores[i].innerHTML =
                Math.floor(Math.random() * (100 - (-100))) + (-100);
        }
    }
}

function actualizarTabla() {

}

function refrescar() {
    event.preventDefault();
    let filaData = this.parentNode.parentNode.children;
    let valor = filaData[4].innerHTML;
    let nombre = filaData[0].innerHTML;
    //Con FETCH

    let params = {
        method: "POST",
        body: JSON.stringify({
            valor
        })
    }
    fetch('./4-4.php', params).then(function (respuesta) {
        return respuesta.json()
    }).then(function (datos) {
        console.log(datos.valor);
    })
    //    con XHR
    /*  let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.status == 200 && xhr.readyState == 4) {
            //TO DO request
            console.log(xhr.responseText);
        }
    }
    xhr.open("POST", "./4-4.php");
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")
    xhr.send('valor=' + valor); */

}

window.onload = function () {
    iniciarValores();
    botones = document.getElementsByClassName('boton');
    for (let i = 0; i < botones.length; i++) {
        botones[i].onclick = refrescar;
    }

    // window.setInterval(actualizarTabla, 10000);
}