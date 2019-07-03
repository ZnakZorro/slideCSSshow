<?php
$ips=array('82.145.73.193');
$sekip = '82.145.73.193';
$myip  = $_SERVER['REMOTE_ADDR'];
//print('<pre>');print_r($sekip); print_r($myip); exit;
if ($sekip != $myip) exit;
install scripts
?>