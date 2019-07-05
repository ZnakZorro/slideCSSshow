<?php
error_reporting(E_ALL);
include_once("/var/www/html/WI/app/CDN/IP/ip.inc.php");
defined('___WIP___') or die;
header("Content-type: text/css");
echo file_get_contents("/var/www/html/WI/tvinfo/tvparter/css/tylkodlaswoich.css");
?>