<?php 
  if($_SERVER['REQUEST_METHOD']=='POST'){
    
    $id = $_POST['id'];
    $name = $_POST['name'];
    $category_id = $_POST['category_id'];
    $writer_id = $_POST['writer_id'];
    $publication_year = $_POST['publication_year'];
    $img = $_POST['img'];
    
    require_once('koneksi.php');
    
    $sql = "UPDATE book_tb SET nama = 'name'  WHERE id = 123;";
    
    if(mysqli_query($con,$sql)){
      echo 'Berhasil Update Data Buku';
    }else{
      echo 'Gagal Update Data Buku';
    }
    
    mysqli_close($con);
  }
?>