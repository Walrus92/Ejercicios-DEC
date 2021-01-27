<?php


$datos = json_decode(stripslashes($_POST['datos']));
if ($datos->nombre == ""){
   $datos->nombre=substr(md5(time()+rand()),0,10) ;
}

if ($datos->apellidos == ""){
   $datos->apellidos=substr(md5(time()+rand()),0,10) ;
}

if ($datos->telefono == ""){
   $datos->telefono=substr(md5(time()+rand()),0,10) ;
}

echo json_encode($datos);

?>
