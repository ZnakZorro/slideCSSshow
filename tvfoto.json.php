<?php
$path="/var/www/html/WI/tvinfo/tv/tvfoto/*.jpg";
$arr = array();
foreach (glob($path) as $filename) {
    //echo "$filename size " . filesize($filename) . "\n";
	//echo str_replace("/var/www/html/WI/","/",$filename);
	$arr[]=str_replace("/var/www/html/WI/","/",$filename);
}
$json=json_encode($arr);
header('Content-Type: application/json');
echo $json;


?>
