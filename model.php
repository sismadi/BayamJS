<?php
class mod extends ktupad {
  public $conf2= array(
  'tb' => 'param',
  'mn' => 'param',
  );


  public function main(){
  $d=$this->conf;
  $sql = "SELECT * FROM master_doc";
  $data = $this->getData($sql);
  $out=array(
  'data'=>  $data,
  'mod' =>  'Main');
  echo json_encode($out);
  }


  public function uploada(){
  $d=$this->conf;
  $sql = "SELECT * FROM master_doc";
  $data = $this->getData($sql);
  $out=array(
  'data'=>  $data,
  'mod' =>  'Main');
  echo json_encode($out);
  }


}

?>
