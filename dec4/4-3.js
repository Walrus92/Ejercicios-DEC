function descargarServidor() {
    var req = new XMLHttpRequest();

    req.onreadystatechange = function () {
        if ((req.readyState == 4) && (req.status == 200)) {
            document.getElementById('texto').value = req.responseText;
            console.log('descargado bien');
        }
    }
    req.open("POST", "4-3.php");
    req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    req.send("option=descarga");
}

function escribirServidor() {
    var req = new XMLHttpRequest();
    var time = new Date(Date.now());

    req.onreadystatechange = function () {
        if (req.status == 200 && req.readyState == 4) {
            document.getElementById('hora').innerHTML = "La hora es: " + time;
        }
    }

    let texto = document.getElementById('texto');
    req.open("POST", "4-3.php");
    req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    req.send("option=subida&texto=" + encodeURIComponent(texto.value));

}


window.onload = function () {
    let texto = document.getElementById('texto');
    texto.value = "";
    descargarServidor();
    setInterval(escribirServidor, 5000);
}