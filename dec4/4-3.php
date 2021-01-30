<?php

if (isset($_POST['option']) && $_POST['option'] == 'descarga') {
    $texto = file_get_contents("./4-3.txt");
    echo $texto;
}
if (isset($_POST['option']) && $_POST['option'] == 'subida') {
    $file = fopen("./4-3.txt", "w");
    fwrite($file, $_POST['texto']);
}
