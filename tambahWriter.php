<?php
  if($_SERVER['REQUEST_METHOD']=='POST'){
    
    $id = $_POST['Id'];
    $name = $_POST['name'];
    
    $sql = "INSERT INTO writer (id, name) VALUES ('id','name')";
    
    require_once('koneksi.php');
    
    if(mysqli_query($con,$sql)){
        echo 'Berhasil Menambahkan Penulis';
    }
    else{
        echo 'Gagal Menambahkan Penulis';
    }
    
    mysqli_close($con);
  }
?>