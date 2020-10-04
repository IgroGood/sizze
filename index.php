<?php

header('Access-Control-Allow-Credentials: true');
header('Access-Control-Allow-Origin: *');

//print_r($_POST);
    if (!(isset($_POST["appName"]) && isset($_POST["data"]))){
				echo "Что-то пошло не так :(";
        return;
		}
  $appName = $_POST["appName"];
  $data = $_POST["data"];
  $file = 'lastApp.txt';
  
  $current = file_get_contents($file);
  $current .= "$appName\n";
  $current .= "$data\n";
  file_put_contents($file, $current);
  $response = array("status" => "success", "viewing" => "http://sizze.igrogood.ru/37482965", "applink" => "none");
  print_r(json_encode($response));
?>
