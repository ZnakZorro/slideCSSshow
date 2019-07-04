<?php
$posty = file_get_contents("php://input");
if (empty($posty)) $posty=$_GET['step'];
$jsonurl = "/var/www/html/WI/tvinfo/tv/refresh.json";
//echo substr(sprintf('%o', fileperms($jsonurl)), -4);
//$cmod = chmod($jsonurl, 0777);
//sleep(1);
//file_put_contents($jsonurl,$posty);
//if (!is_file($jsonurl))
$fp = fopen($jsonurl, 'w');
if(fwrite($fp, $posty)==1) echo $posty; else echo 0;
fclose($fp);
?>