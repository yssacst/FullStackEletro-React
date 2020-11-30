
<?php
    include("Conexao.php");

    class ClassProdutos extends Conexao{
        
        public function exibeProdutos(){
        
       // $path="../img/";//caminho da pasta local das imagens

        $con = $this->conectaBD();
        $sql = 'select * from produtos';
        $result = $con->query($sql);

        $produtos=[];
        $i=0;

        if($result->num_rows > 0){
            while($rows = $result->fetch_assoc()){
                $produtos[$i]=[
                    "id_produtos"=>$rows["id_produtos"],
                    "descricao"=>$rows["descricao"],
                    "preco"=>$rows["preco"],
                    "preco_venda"=>$rows["preco_venda"],
                  //  "nome_imagem"=>$path+$rows["nome_imagem"],
                    "nome_imagem"=>$rows["nome_imagem"],
                    "categoria"=>$rows["categoria"]
                ];
                $i++;
            }
        }

            header("Access-Control-Allow-Origin:*");
            header("Content-type: application/json");
            echo json_encode($produtos);
        }
    }
?>