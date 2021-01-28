<?php
$peticion=file_get_contents('index.html');

$servicios=array();
$servicios['maquinas']=20;
$servicios['piscina']=10;
$servicios['masajista']=15;

echo $servicios[$peticion];
?>