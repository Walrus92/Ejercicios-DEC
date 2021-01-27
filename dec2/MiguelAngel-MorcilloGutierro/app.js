//array estatico
var arrayCoches = [{
        marca: 'Volvo',
        modelo: 'S40',
        estado: 'Disponible',
        km: 150000
    }, {
        marca: 'Seat',
        modelo: 'Ibiza',
        estado: 'Reservado',
        km: 7685
    }, {
        marca: 'Volkswagen',
        modelo: 'Golf',
        estado: 'Reservado',
        km: 85501
    },
    {
        marca: 'Honda',
        modelo: 'Civic',
        estado: 'Reservado',
        km: 137846
    }, {
        marca: 'Ford',
        modelo: 'Fiesta',
        estado: 'Disponible',
        km: 75080
    }, {
        marca: 'Audi',
        modelo: 'A8',
        estado: 'En uso',
        km: 15000
    }, {
        marca: 'Fiat',
        modelo: 'Panda',
        estado: 'Reservado',
        km: 220000
    }
]

//Punto 1. Mostrar tabla

document.writeln('<h2>Punto 1. Mostrar tabla</h2>');
function mostrarTabla(arrayCoches) {
    document.writeln("<table>");
    document.writeln(`<tr>
<th>Marca</th>
<th>Modelo</th>
<th>Estado</th>
<th>Kilometros</th>
</tr>`);
    for (let i = 0; i < arrayCoches.length; i++) {
        document.writeln(`<tr>`)
        document.writeln(
            `
            <td>${arrayCoches[i].marca}</td>
            <td>${arrayCoches[i].modelo}</td>
            <td>${arrayCoches[i].estado}</td>
            <td>${arrayCoches[i].km}</td>
            </tr>`);
    }
    document.writeln('</table>');
}
mostrarTabla(arrayCoches);

//Punto 2
document.writeln('<hr><h2>Punto 2. Ordenar por km</h2>');
arrayCoches.sort(function (a, b) {
    if (a.km < b.km) {
        return 1;
    } else if (a.km > b.km) {
        return -1;
    } else {
        return 0;
    }
})

mostrarTabla(arrayCoches);

//Punto 3
document.writeln('<hr><h2>Punto 3. Renombra >100000km a "jubilado"</h2>');
arrayCoches.map(function (car) {
    if (car.km > 100000) {
        car.estado = 'Jubilado';
    };
});
mostrarTabla(arrayCoches);

//Punto 4
document.writeln('<hr><h2>Punto 4. Lista</h2>');
document.writeln('<ul>');
var filtrado = arrayCoches.filter(function (coche) {
    return coche.estado == "Reservado"
});
for (let i = 0; i < filtrado.length; i++) {
    document.writeln(`<li>Marca: ${filtrado[i].marca} Modelo:${filtrado[i].modelo}</li>`)
}
document.writeln('</ul>');