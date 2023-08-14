<?php
class mod extends ktupad {
  public $conf2= array(
  'tb' => 'master_doc',
  'mn' => 'doc',
  );

  public function main(){
  $d=$this->conf;
  $sql = "SELECT * FROM master_doc where label='$d[label]'";
  $data = $this->getData($sql);
  $out=array(
  'data'=>  $data,
  'mod' =>  'Main');
  echo json_encode($out);
  }

}

?>
