import React from 'react';
import CardProduto from '../components/CardProduto';
import Footer from '../components/Footer';
import Menu from '../components/Menu';
import '../css/Produtos.css'

export default class Produtos extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            produtos: [],
            categoria:'todos',
        }
        this.exibirProdutos();
        this.getCategoria = this.getCategoria.bind(this);
    }
    
    exibirProdutos(){
        fetch("http://localhost/react/api/index.php?tabela=produtos")
        .then(( response ) => response.json())
        .then(( responseJson ) =>
        {
            console.log(responseJson);
            this.setState({
                produtos: responseJson
            });
        })
    }

    getCategoria(e){
        this.setState({
            categoria: e.target.value
        });
    }
    
    render(){
        return(
            <div className="container-fluid">
                
                <div className="row">
                    <div className="col-12 p-0">
                        <Menu />
                    </div>
                </div>
                
                <div className="row mt-10">
                    <div className="col">
                        <h3 className="mt-3 mb-3">Produtos</h3>
                        {
                            this.state.categoria != 'todos'?
                            <small>Filtrando por {this.state.categoria}</small>    :
                                <span></span>
                        }
                    </div>
                </div>

                <div className="row">
                    <div className="col-sm-3">
                        <div className="list-group p-2">
                            <button type="button" className="list-group-item list-group-item-action" value='geladeira' onClick={this.getCategoria } >Geladeiras (3)</button>
                            <button type="button" className="list-group-item list-group-item-action" value='fogao' onClick={this.getCategoria }>Fogões (2)</button>
                            <button type="button" className="list-group-item list-group-item-action" value='microondas' onClick={this.getCategoria }>Microondas (1)</button>
                            <button type="button" className="list-group-item list-group-item-action" value='lavaroupas' onClick={this.getCategoria }>Lavadoura de Roupas (2)</button>
                            <button type="button" className="list-group-item list-group-item-action" value='lavaloucas' onClick={this.getCategoria }>Lava-Louças (2)</button>
                            <button type="button" className="list-group-item list-group-item-action" value='todos' onClick={this.getCategoria }>Todos</button>
                        </div>
                    </div>

                    <div className="col-sm col-9 p-0">
                        <div className="row d-flex justify-content-center mr-2 ">
                                { this.state.produtos.map(
                                    produto => 
                                    {
                                        // console.log(produto);
                                        // console.log(produto);
                                        if(this.state.categoria === "todos"){
                                           return <CardProduto data = { produto }/>
                                        }else if(this.state.categoria === produto.categoria){
                                            return <CardProduto data = { produto }/>
                                        }else{
                                            <h3>Não há produtos nessa categoria.</h3>
                                        }
                                    }
                                )}
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 p-0">
                    <Footer img='pagamento.jpg' title="Formas de Pagamento" footer="Recode Pro"/>
                    </div>
                </div>
            </div>
        );
    }

}