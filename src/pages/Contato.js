import React from 'react';
import Comentario from '../components/Comentario';
import Footer from "../components/Footer";
import Menu from "../components/Menu";
import '../css/Contato.css';

export default class Contato extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            nome:'',
            msg: '',
            comentarios:[]
        }

        this.getComentarios();
        this.setContato = this.setContato.bind(this);
        this.getInput = this.getInput.bind(this);
    }

    setContato(){
        // enviar pro api php
    }

    getComentarios(){//alterar nome da tabela para comentario
        fetch("http://localhost/react/api/index.php?tabela=contato")
        .then(( response ) => response.json())
        .then(( responseJson ) =>
        {
            this.setState({
                comentarios: responseJson
            });
        })
    }

    getInput(e){
        let nam = e.target.name;
        let val = e.target.value;
        this.setState({[nam]: val});
    }

    render(){
        return(
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12 p-0">
                        <Menu />
                    </div>
                </div>
                <div className="row ">
                    <div className="col-sm-12 mt-10 p-0 mx-0 justify-content-center ">
                        <h2 className="mt-3">Fale Conosco</h2>
                    </div>
                </div>
                <div className="row mt-10">
                    <div className="col-sm-6 d-flex justify-content-center">
                            <img src={ require('../img/email.png').default } alt="icone de email" width="50px"/>
                            <p>fullstack@eletro.com</p>
                    </div>
                    <div className="col-sm-6 d-flex  justify-content-center">
                            <img src={ require('../img/wpp.png').default }  alt="icone de whatsapp" width="50px"/>
                            <p>21 4932-4564</p>
                    </div>
                </div>

                <div className="row">
                    <div className="col-sm">

                        <form id="frmContato" method="post" onSubmit={this.setContato} className=" m-4">
                            
                            <div class="form-row justify-content-center">
                                <div class="col-7 ">
                                    
                                    <div className="form-group">
                                        <label htmlFor="nome">Nome:</label>
                                        <input type="text" id="nome" name="nome" onChange={this.getInput} className="form-control"/>
                                    </div>
                        
                                    <div className="form-group">
                                        <label htmlFor="msg">Mensagem:</label>
                                        <textarea type="text"  id="msg" name="msg" onChange={this.getInput} className="form-control"></textarea>
                                    </div>
                                    
                                    <input type="submit" value="Enviar" className="btn btn-light"/>
                                </div>
                            </div>

                        </form>

                    </div>
                </div>
                <div className="row">
                    <div className="col-sm">
                    <h5>Comentários</h5>
                    <div class="table-responsive ">
                        <table class="table table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Nome</th>
                                    <th scope="col">Comentário</th>
                                    <th scope="col">Data de Comentário</th>
                                </tr>
                            </thead>
                            <tbody>
                                { this.state.comentarios.map(
                                    comentario => 
                                    {
                                   return( <tr>
                                        <th scope="row">{comentario.id_contato}</th>
                                        <td>{comentario.nome}</td>
                                        <td>{comentario.msg}</td>
                                        <td>{comentario.data_cadastro}</td>
                                    </tr>)
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                        
                        
                        
                        {/* <h5>Comentários</h5>
                        { this.state.comentarios.map(
                                    comentario => 
                                    {
                                        console.log(this.state.comentario);
                                        if(this.state.comentarios === null){
                                            return <h3>Não há comentários cadastrados.</h3>
                                        }else{
                                            return <Comentario data = { comentario }/>
                                        }
                                    }
                                )} */}
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12 p-0">
                        <Footer img='pagamento.jpg' title="Formas de Pagamento"  footer="Recode Pro"/>
                    </div>
                </div>
            </div>
        );
    }
}
