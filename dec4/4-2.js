let cuota = 0;
let req = null;


function actualizaCuota() {
    let precio = document.getElementById('resultado');
    precio.innerHTML = "<br>La cuota mensual es de: " + cuota + "€";
}

window.addEventListener('load', function () {
    actualizaCuota();

    var checks = document.querySelectorAll('input');
    for (let i = 0; i < checks.length; i++) {
        checks[i].onchange = function () {
            var servicio = this.value;
            var marcado = this.checked == 1;
            console.log(servicio + ' tiene el valor de ' + marcado);

            
            /* req = new XMLHttpRequest();

            if (req) {
                req.onreadystatechange = function () {
                    if (req.readyState == 4) {
                        if (req.status == 200) {
                            if (marcado) {
                                cuota += parseInt(req.responseText);
                                actualizaCuota();
                            } else {
                                cuota -= parseInt(req.responseText);
                                actualizaCuota();
                            }
                        }

                    }
                };
                req.open('POST', '4-2.php');
                req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
                req.send('servicio=' + servicio +
                        "&nocache=" + Math.random());
            } */
        }
    }
})