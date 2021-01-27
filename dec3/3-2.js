var arrayListado = document.getElementsByTagName("li");
console.log(arrayListado);

for (let i = 0; i < arrayListado.length; i++) {
    var texto = arrayListado[i].textContent;
    texto=texto.replace(texto,`[http//${texto}][${texto}]`)
    arrayListado[i].innerHTML=texto;
}