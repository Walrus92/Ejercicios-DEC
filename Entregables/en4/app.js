window.onload = init
var primer_click = true
var arrayRects = []
var arrayPuntos = []
localStorage.setItem("rectSaved", JSON.stringify(arrayRects))

function cargarRectangulos() {
    let rectSaved = localStorage.getItem("rectSaved")
    let rectSavedJSON = JSON.parse(rectSaved)
    for (const rect of rectSavedJSON) {
        rect.dibujar()
        console.log("NO FUNCA");
    }
}

function init() {
    cargarRectangulos()
    let canvas = document.querySelector("canvas")
    let ctxt = canvas.getContext("2d")

    canvas.onclick = function (ev) {
        let punto = new Punto(ev.offsetX, ev.offsetY)
        punto.imprimir()

        if (primer_click) {
            arrayPuntos['puntoA'] = punto
            primer_click = false
        } else {
            arrayPuntos['puntoB'] = punto
            primer_click = true

            var rect = new Rectangulo(arrayPuntos['puntoA'], arrayPuntos['puntoB'])
            rect.dibujar();
            arrayRects.push(rect)
            localStorage.setItem("rectSaved", JSON.stringify(arrayRects))
        }
    }
    class Punto {
        constructor(x, y) {
            this.x = x
            this.y = y
        }
        imprimir() {
            // ctxt.clearRect(0, 0, 800, 600)
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

            /*  ctxt.clearRect(0, 0, 800, 600) */
            ctxt.strokeRect(Math.abs(this.a.x), Math.abs(this.a.y), anchura, altura)
        }
    }

}