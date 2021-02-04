<?php
//si se ha dado a cualquiera de los boton de "enviar" se inicia funcion escritora
if ($_POST['option'] == "escribir") {
    $nombre = $_POST['nombre'];
    $texto = $_POST['texto'];

    $file = fopen("./data.txt", "a");
    fwrite($file, $nombre . "\t" . "\t" . $texto . "\n");
}

//al cargarse la página se inicia la descarga de datos
elseif ($_POST['option'] == "descargar") {
    $alumnos = array("Maria", "Miguel", "Matias", "Lorena", "Pedro");
    $alumnos = json_encode($alumnos);
    echo $alumnos;
}
