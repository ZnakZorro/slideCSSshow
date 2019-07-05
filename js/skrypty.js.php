<?php
error_reporting(E_ALL);
include_once("/var/www/html/WI/app/CDN/IP/ip.inc.php");
defined('___WIP___') or die;
header("Content-type: text/javascript");
//echo 'var isip = "--------------is my IP===========";'.PHP_EOL;
//echo 'console.log(isip);'.PHP_EOL;
echo file_get_contents("/var/www/html/WI/tvinfo/tv/js/tylkodlaswoich.js");
?>