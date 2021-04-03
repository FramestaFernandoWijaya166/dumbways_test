<?php 
 $id = $_GET['id'];
 
 require_once('koneksi.php');
 
 //Membuat SQL Query
 $sql = "DELETE FROM book_tb WHERE id=123;";
 
 
 //Menghapus Nilai pada Database 
 if(mysqli_query($con,$sql)){
   echo 'Berhasil Menghapus Buku';
 }else{
   echo 'Gagal Menghapus Buku';
 }
 
 mysqli_close($con);
 ?>