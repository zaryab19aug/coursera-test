<?php

require "header.php";

global $db, $vanshavali, $user;

$familyid = $_GET['familyid'];

$head = $vanshavali->getHeadofFamily($familyid);
$head = new member($head);

//Create a infovis struct
$finalkey = $vanshavali->createstruct($head->data);
$finalkey['children'] = $vanshavali->getwife($head->data['id']);

echo json_encode($finalkey);
?>