<?php 
  if($_SERVER['REQUEST_METHOD']=='POST'){
    
    $id = $_POST['id'];
    $name = $_POST['name'];
    
    require_once('koneksi.php');
    
    $sql = "UPDATE writer SET nama = 'name'  WHERE id = 123;";
    
    if(mysqli_query($con,$sql)){
      echo 'Berhasil Update Data Penulis';
    }else{
      echo 'Gagal Update Data Penulis';
    }
    
    mysqli_close($con);
  }
?>