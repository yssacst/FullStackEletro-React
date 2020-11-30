import FormaPagamento from "../components/FormaPagamento";
import Menu from "../components/Menu";

function Index(){
    return(
        <div>
            <Menu />
            <main>
                <h1>Seja bem vindo(a)!</h1>
                <p>Aqui em nossa loja, programadores tem desconto nos produtos para sua casa!</p>  
            </main>
          <FormaPagamento img='/img/pagamento.jpg' footer="Recode Pro"/>

        </div>
    );
}

export default Index;