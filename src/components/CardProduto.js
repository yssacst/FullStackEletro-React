import React from 'react';

export default class cardProduto extends React.Component{
    render(){
        return(
            <div className="card">
                <img className="card-img-top" src={'/img/'+this.props.produto.nome_imagem} alt={ "Imagem da " + this.props.produto.descricao}/>
                 <div className="card-header">
                     <p>{this.props.produto.descricao}</p>
                     <h5>{this.props.produto.nome_imagem}</h5>
                 </div>
                 <div className="card-body">
                     <p><small><strike>R$ {this.props.produto.preco}</strike></small></p>
                     <h5 className="text-danger">R$ {this.props.produto.preco_venda}</h5>
                 </div>
             </div>
        );
    }
}
