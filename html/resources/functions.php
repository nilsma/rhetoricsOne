<?php
/**
 * Created by PhpStorm.
 * User: root
 * Date: 3/25/14
 * Time: 10:11 AM
 */

function getSlides() {
    $slides = array();
    $xml = simplexml_load_file("configs/showcase.xml");
    foreach($xml as $x) {
        $slide = array();
        $slide['top'] = $x->top_overlay;
        $slide['bottom'] = $x->bottom_overlay;
        $slide['start'] = $x->start_image;
        $slide['stop'] = $x->stop_image;
        $slides[] = $slide;
    }
    return $slides;
}

?>