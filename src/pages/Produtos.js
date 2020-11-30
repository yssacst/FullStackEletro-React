import React from 'react';
import CardProduto from '../components/CardProduto';
import FormaPagamento from '../components/FormaPagamento';
import Menu from '../components/Menu';

export default class Produtos extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            produtos: []
        }
        this.exibirProdutos();
    }

    exibirProdutos(){
        fetch("http://localhost/react/api/")
        .then(( response ) => response.json())
        .then(( responseJson ) =>
        {
            this.setState({
                produtos: responseJson
            });
        })
    }

    render(){
        return(
            <div>
                <Menu />

                { this.state.produtos.map(
                    produto =>
                    <CardProduto produto = { produto }/>
                )}
        
              <FormaPagamento img='/img/pagamento.jpg' footer="Recode Pro"/>

            </div>
        );
    }

}