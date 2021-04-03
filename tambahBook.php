<?php
  if($_SERVER['REQUEST_METHOD']=='POST'){
    
    $id = $_POST['id'];
    $name = $_POST['name'];
    $category_id = $_POST['category_id'];
    $writer_id = $_POST['writer_id'];
    $publication_year = $_POST['publication_year'];
    $img = $_POST['img'];
    
    $sql = "INSERT INTO book_tb (id, name, category_id, writer_id, publication years, img) VALUES ('id','name','category_id', 'writer_id', 'publication_years','img')";
    
    require_once('koneksi.php');
    
    if(mysqli_query($con,$sql)){
        echo 'Berhasil Menambahkan Buku';
    }
    else{
        echo 'Gagal Menambahkan Buku';
    }
    
    mysqli_close($con);
  }
?>