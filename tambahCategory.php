<?php
  if($_SERVER['REQUEST_METHOD']=='POST'){
    
    $id = $_POST['id'];
    $name = $_POST['name'];
    
    $sql = "INSERT INTO category_tb (id, name) VALUES ('id','name')";
    
    require_once('koneksi.php');
    
    if(mysqli_query($con,$sql)){
        echo 'Berhasil Menambahkan Kategori';
    }
    else{
        echo 'Gagal Menambahkan Kategori';
    }
    
    mysqli_close($con);
  }
?>