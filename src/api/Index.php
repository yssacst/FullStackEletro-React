<?php 
	$servername = "localhost";
	$username = "root";
	$password = "";
	$database = "fullstackeletro";

	$tabela = $_GET['tabela'];
	
   //criando conexao
	$conn = mysqli_connect($servername,$username,$password,$database);

	// //verificando conexao
	if(!$conn){
		die("A conexao ao BD falhou" . mysqli_connect_error());
	}

	$sql = "select * from $tabela";
	$result = $conn ->query($sql);
	
	header("Access-Control-Allow-Origin:*");
    header("Content-type: application/json");
	
	print_r(json_encode($result->fetch_all(MYSQLI_ASSOC)));
	 
	mysqli_close($conn);
?>