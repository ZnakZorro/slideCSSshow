<?php
error_reporting(E_ALL);
include_once("/var/www/html/WI/app/CDN/IP/ip.inc.php");
defined('___WIP___') or die;
	$posty = file_get_contents("php://input");
	$obj   = json_decode($posty);
	$json = json_encode($posty);
	file_put_contents('/var/www/html/WI/tvinfo/tvparter/'.$obj->info->budynek.'.json',$posty);
	header('Content-type: application/json');
	echo $posty;

?>