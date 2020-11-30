<?php 

    abstract class Conexao {

        protected function conectaBD(){
            $servername = "localhost";
            $username = "root";
            $password = "";
            $database = "fullstackeletro";
    
           //criando conexao
            $conn = mysqli_connect($servername,$username,$password,$database);

            //verificando conexao
            if(!$conn){
                die("A conexao ao BD falhou" . mysqli_connect_error());
            }
            return $conn;
        }
    }
?>