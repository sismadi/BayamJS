<?php
// http://localhost/op/model/?path=master/data.php&mod=table
// echo "hhh";
include('bayam.php');
 class koneksi{
public $database=array(
'h'=>'localhost',
'u'=>'root',
'p'=>'usbw',
'n'=>'bayam'
);

function connect(){
  $db=$this->database ;
try {
  $conn = new PDO("mysql:host=$db[h];dbname=$db[n]", "$db[u]", "$db[p]");
  // $conn = new PDO("mysql:host=localhost;dbname=kuis", "root", "db@");
// $conn = new PDO("firebird:host=localhost;dbname=/var/lib/firebird/2.5/data/employee.fdb;charset=UTF8", "sysdba", "masterkey");
// $conn = new PDO("mssql:host='den1.mssql8.gear.host';dbname='apar', 'apar', 'db@'");
// $conn = new PDO("sybase:host=$host;dbname=$dbname, $user, $pass");
// $conn = new PDO("sqlite:my/database/path/database.db");
// $conn = new PDO("odbc:psbodbc");
// $conn = new PDO("dblib:host=localhost;dbname=psb", "ktupad","db@");
}
catch(PDOException $e) {  echo $e->getMessage(); }
return $conn;
}

function setup(){
// http://localhost/model/?mod=setup
  $conn=$this->connect();
  $query = file_get_contents("op.sql");
  $setup = $conn->prepare($query);
  if ($setup->execute()) $info="Success";
  else  $info="Fail";
  $out = array('Info' =>$info);
  echo json_encode($out);
}
}
$app = new mod();
$app->init();
?>
