//EJERCICIO 1**************************************************************

/*let nombre = "Miguel",
    edad = 27,
    sexo = "H";
document.write(`el nombre es ${nombre}, la edad ${edad} y el sexo ${sexo}.`);
*/

//EJERCICIO 2**************************************************************

/* let nombre = prompt("escribe tu nombre");
alert(`tu nombre es ${nombre}.`);
document.write(`tu nombre es ${nombre}.`);
 */

//EJERCICIO 3**************************************************************

/* let frase='esto es una frase';
let longitud= frase.length;
let numPalabras= frase.split(" ").length;
document.write(longitud);
document.write(numPalabras);
 */

//EJERCICIO 4**************************************************************

/* 
let frase = prompt('escribe una frase');
let longitud = frase.length;
let numPalabras = frase.split(" ");
if (longitud >= 10) alert("La frase tiene mas de 10 palabras");
if (numPalabras[0] == 'Aviso' || numPalabras[0] == 'Noticia' || numPalabras[0] == 'Error') alert("Cuidaao");
 */

//EJERCICIO 5**************************************************************

//OJO PREGUNTAR, puse array de prompts, pero no me salia lo demas(identico codigo),porque??
/* let max = 0;
let arrayNum = [
    5,
    67,
    26
];
for (let i = 0; i < arrayNum.length; i++) {
    if (arrayNum[i] >= max) {
        max = arrayNum[i];
    }
}
document.write(`<h3>${max}</h3>`); 
*/

//EJERCICIO 6**************************************************************

/* 
let fecha = new Date();
let year = fecha.getFullYear();
if ((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)) {
    alert('este año es bisiesto');
} else {
    alert('este año no es bisiesto :(')
} 
*/

//EJERCICIO 7**************************************************************

/* 
let n = (prompt('escribe un número'));
let cont = 0;
for (let i = 0; i <= n; i++) {
    cont += i;
}
document.write(`<p>la suma hasta el número ${n} es ${cont}</p>`)

cont = 1;
for (let i = 2; i <= n; i++) {
    cont *= i;
}
document.write(`<p>el factorial del número ${n} es ${cont}</p>`);

cont = 0;
for (let i = 2; i <= n; i =i+ 2) {
    cont += i;
}
document.write(`<p>la suma de los pares hasta el número ${n} es ${cont}</p>`);
*/

//EJERCICIO 8***************************************************************

//OJIMETRO, CON VAR ME DEJA, CON LET NO. EL ALCANCE??
/* 
do {
    var nombre = prompt("Escribe tu nombre");
} while (!(nombre.startsWith("a") || nombre.startsWith("e"))); //  && nombre.length<4          <<<<<<<<<<<<<<<<< ?????
 */

/* *****************   EJERCICIO 9    **********************  */

/* 
What?
*/

//EJERCICIO 10 OBJETOS
/*
let corredor = {
    nombre: "usain",
    apellidos: "bolt",
    velocidad: 5
}
 *************TAMBIEN VALE ASI**********
let corredor = new Object();
corredor.nombre='usain';
corredor.apellidos='bolt';
corredor.velocidad=5;
*/

//EJERCICIO 11
/* 
let corredor1 = {
    nombre: "usain",
    apellidos: "bolt",
    velocidad: 2
}
let corredor2 = {
    nombre: "jaime",
    apellidos: "caravaca",
    velocidad: 4
}
let corredor3 = {
    nombre: "alex",
    apellidos: "fernandez",
    velocidad: 1
} */

/* tambien vale asi *****
  
let corredores = [{
    nombre: "alex",
    apellidos: "fernandez",
    velocidad: 1
} {
    nombre: "jaime",
    apellidos: "caravaca",
    velocidad: 4
} {
    nombre: "usain",
    apellidos: "bolt",
    velocidad: 2
}] 
*/

//recorro array y asigno nuevo valor 'ttotal' a cada objeto 
/* 
var menor = 100000; //valor mas grande que 41*5
let arrayCorr = [corredor1, corredor2, corredor3];
for (let i = 0; i < arrayCorr.length; i++) {
    arrayCorr[i].ttotal = arrayCorr[i].velocidad * 41;
    if (arrayCorr[i].ttotal < menor) {
        menor = arrayCorr[i].ttotal;
    }
}
//Este metodo vale cuando son pocas variables
//let menor = Math.min(corredor1.ttotal, corredor2.ttotal, corredor3.ttotal);

//https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/findI

let faster = arrayCorr.findI(function(corredor){
    return corredor.ttotal == menor
});

alert(`El corredor más rápido es ${arrayCorr[faster].nombre}.`);
 */

/* EJERCICIO 12 Y 13 */
/* 
let alumnos = [{
    nombre: 'antonio',
    apellidos: 'marin',
    nota: 2
}, {
    nombre: 'mario',
    apellidos: 'tyamukueni',
    nota: 9
}, {
    nombre: 'ivan',
    apellidos: 'nomeacuerdo',
    nota: 6
}]

document.writeln("<table border=\"1px\" style=\"border-collapse: collapse\">");
document.writeln(`<tr>
<th>Nombre</th>
<th>Apellidos</th>
<th>Nota</th>
</tr>`);
for (let i = 0; i < alumnos.length; i++) {
    if (alumnos[i].nota == 6 || alumnos[i].nota == 7) {
        alumnos.delete[i]; //alumnos.splice(i,i) ESTE PARA BORRAR LA POSICION ENTERAMENTE DEL ARRAY
    }
    if (alumnos[i].nota < 5) {
        document.writeln(`<tr style="color: red;">`)
    } else {
        document.writeln(`<tr>`)
    }
    document.writeln(
        `
<td>${alumnos[i].nombre}</td>
<td>${alumnos[i].apellidos}</td>
<td>${alumnos[i].nota}</td>
</tr>`);
}
document.writeln("</table>"); */

// EJERCICIO 14

/* var frase = ["lorem", "ipsum", "no", "se", "que", "no", "se", "cuantos"];


function transforma(frase, callback) {
    for (var i = 0; i < frase.length; i++) {
        frase[i] = callback(frase[i]);
    }
}

function mayuscula(palabra) {
    return palabra[0].toUpperCase() + palabra.substr(1, palabra.length);
}

function borrar(palabra) {
    return palabra.trim().substring(0, palabra.length - 1);
}

function guiones(palabra) {
    return palabra + "-";
}

console.log(frase);
transforma(frase, mayuscula);
console.log(frase);

transforma(frase, borrar);
console.log(frase);

transforma(frase, guiones);
console.log(frase); */

//EJERCICIO 15

let alumnos = [{
    nombre: 'antonio',
    apellidos: 'marin',
    nota: 2
}, {
    nombre: 'mario',
    apellidos: 'tyamukueni',
    nota: 9
}, {
    nombre: 'ivan de maria',
    apellidos: 'gomez',
    nota: 6
}, {
    nombre: 'mario',
    apellidos: 'tyamukueni',
    nota: 5
}]


function mostrarTabla(alumnos) {
    document.writeln("<table border=\"1px\" style=\"border-collapse: collapse\">");
    document.writeln(`<tr>
<th>Nombre</th>
<th>Apellidos</th>
<th>Nota</th>
</tr>`);
    for (let i = 0; i < alumnos.length; i++) {
        document.writeln(`<tr>`)
        document.writeln(
            `
            <td>${alumnos[i].nombre}</td>
            <td>${alumnos[i].apellidos}</td>
            <td>${alumnos[i].nota}</td>
            </tr>`);
    }
    document.writeln("</table>");
}
mostrarTabla(alumnos);

//Punto B
document.writeln("<br>");

function seleccionaAlumnos(alumnos, callback) {
    var nAlumnos = [];
    for (let i = 0; i < alumnos.length; i++) {
        var inputAl = callback(alumnos[i]);
        if (inputAl) {
            nAlumnos.push(alumnos[i]);
        }
    }
    return nAlumnos;
}

function alumnosSuspensos(alumn) {
    if (alumn.nota < 5) {
        return true;
    }
}

function alumnosConSobresaliente(alumn) {
    if (alumn.nota > 8) {
        return true;
    }
}

function alumnosConNombresCompuesto(alumn) {
    if (alumn.nombre.split(" ").length > 1) {
        return true;
    }
}

/* 
nAlumnos = seleccionaAlumnos(alumnos, alumnosSuspensos);
nAlumnos = seleccionaAlumnos(alumnos, alumnosConNombresCompuesto);
nAlumnos = seleccionaAlumnos(alumnos, alumnosConSobresaliente); 

mostrarTabla(nAlumnos);
*/

//Punto C


function buscaRepetidos(alumnos, callback) {
    var repetidos = [];
    for (let i = 0; i < alumnos.length; i++) {
        for (let j = 0; j < alumnos.length; j++) {
            if (i != j) {
                if (alumnos[i].apellidos == alumnos[j].apellidos) {
                    repetidos.push(i);
                }
            }
        }
    }
    var repeAlumnos = callback(alumnos, repetidos);
    mostrarTabla(repeAlumnos);
}

function fuusion(alumnos, repetidos) {
    document.writeln("<p>Alumnos repetidos fusionados</p>");
    var mayor = 0;
    for (let i = 0; i < repetidos.length; i++) {
        if (alumnos[repetidos[i]].nota > mayor) {
            mayor = alumnos[repetidos[i]].nota;
        }
    }
    for (let i = 0; i < alumnos.length; i++) {
        if (alumnos[repetidos[i]].nota != mayor) {
            delete alumnos[repetidos[i]];
        }
    }


    return alumnos;
}

function borrarRepes(alumnos, repetidos) {
    document.writeln("<p>Alumnos repetidos borrados</p>");
    for (let i = 0; i < repetidos.length; i++) {
        delete alumnos[repetidos[i]];
    }
    for (let i = 0; i < alumnos.length; i++) {
        if (alumnos[i] == undefined) {
            alumnos.splice(i, 1);
            i--;
        }
    }

    return alumnos;
}

function mostrarError(alumnos, repetidos) {
    alert(`El alumno ${alumnos[repetidos[0]].nombre} esta repetido ${repetidos.length} veces`);
}
buscaRepetidos(alumnos, fuusion);

/* 
buscaRepetidos(alumnos, mostrarError); 
buscaRepetidos(alumnos, borrarRepes);
*/