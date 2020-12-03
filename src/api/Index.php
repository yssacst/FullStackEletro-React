<?php 
	$servername = "localhost";
	$username = "root";
	$password = "";
	$database = "fullstackeletro";

	$tabela = $_GET['tabela'];
	
	if(!empty($_GET['categoria'])){
		$chavecategoria = $_GET['categoria'];
	}else{
		$chavecategoria = null;
	}
	
   //criando conexao
	$conn = mysqli_connect($servername,$username,$password,$database);

	// //verificando conexao
	if(!$conn){
		die("A conexao ao BD falhou" . mysqli_connect_error());
	}

	if($tabela == 'categorias' && $chavecategoria == null){

		$sql='select  categorias.*, count( categorias.nome) as qtd  from categorias 
				inner join produto_categoria on categorias.id_categoria = produto_categoria.id_categoria
				group by categorias.nome;';

	}else if($chavecategoria != null){

		$sql='select produtos.* from produtos 
				inner join produto_categoria on produtos.id_produtos = produto_categoria.id_produto 
				inner join categorias on categorias.id_categoria = produto_categoria.id_categoria
				where categorias.chave = "'.$chavecategoria.'";';

	}else{

		$sql = "select * from $tabela";
		
	}

	$result = $conn ->query($sql);
	
	header("Access-Control-Allow-Origin:*");
    header("Content-type: application/json");
	
	print_r(json_encode($result->fetch_all(MYSQLI_ASSOC)));
	 
	mysqli_close($conn);
?>