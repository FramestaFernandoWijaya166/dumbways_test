<?php 
  if($_SERVER['REQUEST_METHOD']=='POST'){
    
    $id = $_POST['id'];
    $name = $_POST['name'];
    
    require_once('koneksi.php');
    
    $sql = "UPDATE category_tb SET nama = 'name'  WHERE id = 123;";
    
    if(mysqli_query($con,$sql)){
      echo 'Berhasil Update Data Kategori';
    }else{
      echo 'Gagal Update Data Kategori';
    }
    
    mysqli_close($con);
  }
?>