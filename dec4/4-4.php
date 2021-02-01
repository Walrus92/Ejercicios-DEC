<?php

$json = file_get_contents("php://input");
$valor = json_decode($json);
$valor = $valor * rand(-100, 100);

echo json_encode($valor);
