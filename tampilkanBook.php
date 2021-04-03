<?php
  require_once('koneksi.php');

  $sql = "SELECT * FROM book_tb";

  $r = mysqli_query($con,$sql);
  
  $result = array();
  
  while($row = mysqli_fetch_array($r)){
    array_push($result,array(
      "id"=>$row['id'],
      "name"=>$row['nama']
      //perwakilan 2 data itu saja karena cuma miniatur
    ));
  }
  
  echo json_encode(array('result'=>$result));
  
  mysqli_close($con);
?>