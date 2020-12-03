<?php
	$servername = "localhost";
	$username = "root";
	$password = "";
	$database = "fullstackeletro";
	
	 //criando conexao
	$conn = mysqli_connect($servername,$username,$password,$database);
	// //verificando conexao
	if(!$conn){
		die("A conexao ao BD falhou" . mysqli_connect_error());
	}

	if($_SERVER['REQUEST_METHOD'] === 'GET') {

        $nome = $_GET['nome'];
        $msg = $_GET['msg'];
     
     
        $sql = "INSERT INTO `fullstackeletro`.`comentarios` (`nome`, `msg`) VALUES ('$nome', '$msg')";
		$result = $conn ->query($sql);
       
		if($result == true){
			echo "New record created successfully";
		}else{
			echo "Error: " . $sql . "<br>" . $conn->error;
		}
	}
	
	mysqli_close($conn);

?>