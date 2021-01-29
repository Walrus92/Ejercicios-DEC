<?php

$servicios=array();
$servicios['maquinas']=20;
$servicios['piscina']=10;
$servicios['masajista']=15;

$peticion=$_POST['servicio'];
echo $servicios[$peticion];
