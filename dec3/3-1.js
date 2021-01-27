var arrayListado = document.getElementsByTagName("li");
var boton = document.createElement("button");
boton.textContent="Execute";
document.body.appendChild(boton);
boton.onclick = conversion;
console.log(document.getElementsByTagName("span"));
function conversion(ev) {
  console.log(this);
console.log(ev.target);
  for (let i = 0; i < arrayListado.length; i++) {
    var texto = arrayListado[i].textContent;
    let enlace = document.createElement("a");
    enlace.innerHTML = texto;
    enlace.setAttribute("href", texto);
    arrayListado[i].innerHTML = "";
    arrayListado[i].appendChild(enlace);
  }
}