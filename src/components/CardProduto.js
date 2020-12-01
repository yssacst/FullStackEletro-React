import React from 'react';

export default class cardProduto extends React.Component{
    render(){
        return(
            <div className="card">
                <img className="card-img-top" src={require('../img/'+this.props.produto.nome_imagem).default} alt={ "Imagem da " + this.props.produto.descricao}/>
                 <div className="card-header">
                     <p>{this.props.produto.descricao}</p>
                 </div>
                 <div className="card-body">
                     <p><small><strike>R$ {this.props.produto.preco}</strike></small></p>
                     <h5 className="text-danger">R$ {this.props.produto.preco_venda}</h5>
                 </div>
             </div>
        );
    }
}
