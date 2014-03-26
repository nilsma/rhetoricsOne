<?php
/**
 * Created by PhpStorm.
 * User: root
 * Date: 3/25/14
 * Time: 10:34 AM
 */
$slides = $_SESSION['slides'];
echo json_encode($slides);
/*
$counter = $_SESSION['counter'];

if($counter >= 2) {
    $counter = 0;
} else {
    $counter++;
}
$_SESSION['counter'] = $counter;

$slides = array();
$slides = $_SESSION['slides'];
echo $_SESSION['slides'][0];

/*
$slide = array();
$slide = $slides[0];

header('Content-type: application/json');
echo json_encode($slide);
*/
?>