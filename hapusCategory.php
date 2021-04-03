<?php 
 $id = $_GET['id'];
 
 require_once('koneksi.php');
 
 //Membuat SQL Query
 $sql = "DELETE FROM category_tb WHERE id=123;";
 
 
 //Menghapus Nilai pada Database 
 if(mysqli_query($con,$sql)){
   echo 'Berhasil Menghapus Kategori';
 }else{
   echo 'Gagal Menghapus Kategori';
 }
 
 mysqli_close($con);
 ?>