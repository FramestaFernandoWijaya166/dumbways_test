<?php 
 $id = $_GET['id'];
 
 require_once('koneksi.php');
 
 //Membuat SQL Query
 $sql = "DELETE FROM writer WHERE id=123;";
 
 
 //Menghapus Nilai pada Database 
 if(mysqli_query($con,$sql)){
   echo 'Berhasil Menghapus Penulis';
 }else{
   echo 'Gagal Menghapus Penulis';
 }
 
 mysqli_close($con);
 ?>