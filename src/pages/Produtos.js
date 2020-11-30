import React from 'react';
import CardProduto from '../components/CardProduto';

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

                { this.state.produtos.map(
                    produto =>
                    <CardProduto produto = { produto }/>
                )}
            </div>
        );
    }

}