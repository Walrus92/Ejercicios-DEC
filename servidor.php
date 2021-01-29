<?php

$servicio=file_get_contents('index.html');

$lista=$array = array(
    "padel" => 3,
    "tenis" => 3,
    "natacion" => 6,
    "aerobic" => 8,
    "sauna" => 4,
    "acuagim" => 8,
    "cardio" => 4,
);


echo $lista[$servicio];
