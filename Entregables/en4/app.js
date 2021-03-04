window.onload = init


var primer_click = true
if (localStorage.rectSaved) {
    var arrayRects = JSON.parse(localStorage.rectSaved)
} else {
    var arrayRects = []
}
var arrayPuntos = []


function cargarRectangulos(ctxt) {
    if (localStorage.rectSaved) {
        let rectSaved = localStorage.rectSaved
        let rectSavedJSON = JSON.parse(rectSaved)
        for (let i = 0; i < rectSavedJSON.length; i++) {
            let anchura = (rectSavedJSON[i].b.x - rectSavedJSON[i].a.x)
            let altura = (rectSavedJSON[i].b.y - rectSavedJSON[i].a.y)
            ctxt.fillRect(Math.abs(rectSavedJSON[i].a.x), Math.abs(rectSavedJSON[i].a.y), anchura, altura)
        }
    } else return
}

function init() {
    let canvas = document.querySelector("canvas")
    let ctxt = canvas.getContext("2d")

    cargarRectangulos(ctxt)

    canvas.onclick = function (ev) {
        let punto = new Punto(ev.offsetX, ev.offsetY)
        punto.imprimir()

        if (primer_click) {
            arrayPuntos['puntoA'] = punto
            primer_click = false
        } else {
            arrayPuntos['puntoB'] = punto
            primer_click = true

            let rect = new Rectangulo(arrayPuntos['puntoA'], arrayPuntos['puntoB'])
            rect.dibujar(arrayPuntos['puntoA'], arrayPuntos['puntoB']);
            arrayRects.push(rect)
            localStorage.setItem("rectSaved", JSON.stringify(arrayRects))
            console.log(arrayRects);
        }
    }
    class Punto {
        constructor(x, y) {
            this.x = x
            this.y = y
        }
        imprimir() {
            ctxt.beginPath()
            ctxt.arc(this.x, this.y, 0.8, 0, 2 * Math.PI)
            ctxt.fill()
        }
    }

    class Rectangulo {
        constructor(puntoA, puntoB) {
            this.a = puntoA
            this.b = puntoB
        }
        dibujar() {
            let anchura = (this.b.x - this.a.x)
            let altura = (this.b.y - this.a.y)
            ctxt.fillStyle = "rgba(125, 48, 48, 0.534)"
            ctxt.fillRect(Math.abs(this.a.x), Math.abs(this.a.y), anchura, altura)
        }
    }

}