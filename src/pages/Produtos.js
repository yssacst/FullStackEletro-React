import React from 'react';
import CardProduto from '../components/CardProduto';
import FormaPagamento from '../components/FormaPagamento';
import Menu from '../components/Menu';
import '../css/produtos.css'


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
        fetch("http://localhost/react/api/")
        .then(( response ) => response.json())
        .then(( responseJson ) =>
        {
            this.setState({
                produtos: responseJson
            });
        })
    }

    getCategoria(e){
        // console.log('clicou');
        // console.log( e.target.value);


        this.setState({
            categoria: e.target.value
        });
    }

    render(){
        return(
            <div className="container-fluid">
                <div className='row'>
                    <div className='col-12'>
                        <Menu />
                    </div>
                </div>
                
                <div className="row">
                    <div className="col-sm-3">
                        <div>
                            <ul>
                                <li><button value='geladeira' onClick={this.getCategoria } >Geladeiras (3)</button></li>
                                <li><button value='fogao' onClick={this.getCategoria }>Fogões (2)</button></li>
                                <li><button value='microondas' onClick={this.getCategoria }>Microondas (1)</button></li>
                                <li><button value='lavaroupas' onClick={this.getCategoria }>Lavadoura de Roupas (2)</button></li>
                                <li><button value='lavaloucas' onClick={this.getCategoria }>Lava-Louças (2)</button></li>
                                <li><button value='todos' onClick={this.getCategoria }>Todos</button></li>
                            </ul>
                        </div>
                    </div>
                    {/* transformar em componente */}
                    <div className="col-sm-9">
                        <div className="row d-flex justify-content-center">
                            <div className="boxProduto text-center">
                                { this.state.produtos.map(
                                    produto => 
                                    {
                                        console.log(this.state.categoria);

                                        if(this.state.categoria === "todos"){
                                           return <CardProduto produto = { produto }/>
                                        }else if(this.state.categoria === produto.categoria){
                                            return <CardProduto produto = { produto }/>
                                        }else{
                                            <h3>Não há produtos nessa categoria.</h3>
                                        }
                                    }
                                )}
                            </div>
                        </div>
                    </div>
                </div>
        
              <FormaPagamento img='/img/pagamento.jpg' footer="Recode Pro"/>

            </div>
        );
    }

}