let cuota = 0;
window.addEventListener('load', function () {
    document.getElementById('boton').onclick = function () {
        document.getElementById('resultado').innerHTML = "<br>La cuota mensual es de: " + cuota + "€";
    };

})