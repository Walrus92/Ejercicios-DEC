var boton = document.getElementById("boton");
var req;

boton.addEventListener("click", peticion);

function peticion() {
    event.preventDefault();
    console.log("hi");
    if (window.XMLHttpRequest) {
        req = new XMLHttpRequest();
    } else if (window.ActiveXObject) {
        req = new ActiveXObject("Microsoft.XMLHTTP")
    }

    req.addEventListener("readystatechange", function () {
        if (req.readyState == 4) {
            if (req.status == 200) {
                document.getElementById("f_password").value = req.responseText;
            }
        }
    });
    req.open("POST", "change_password.php");
    req.send(null);
}