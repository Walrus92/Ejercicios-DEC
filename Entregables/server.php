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
    class Alumno
    {
        public $nombre;
    }

    $a1 = new Alumno();
    $a1->nombre = "Manuel";

    $a2 = new Alumno();
    $a2->nombre = "Sandra";

    $a3 = new Alumno();
    $a3->nombre = "Luis";

    $a4 = new Alumno();
    $a4->nombre = "Elena";

    $a5 = new Alumno();
    $a5->nombre = "Nicolas";

    $alumnos = array($a1, $a2, $a3, $a4, $a5);

    $alumnos = json_encode($alumnos);
    echo $alumnos;
}
