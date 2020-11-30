function Contato(props){
    return(
        <div className="container-fluid">
            <div className="row p-5">
                    <h2>Fale Conosco</h2>
                    <hr/>
                </div>
            <div className="row">
               <div className="col-sm-6 d-flex  justify-content-center">
                    <img src={'/img/email.png'} alt="icone de email" width="50px"/>
                    <p>fullstack@eletro.com</p>
               </div>
               <div className="col-sm-6 d-flex  justify-content-center">
                    <img src={ '/img/wpp.png' } alt="icone de whatsapp" width="50px"/>
                    <p>21 4932-4564</p>
               </div>
            </div>
            <div className="row">
                <form className="m-4">
                    <div className="form-group">
                        <label for="nome">Nome:</label>
                        <input type="text" id="nome" className="form-control"/>
                    </div>
        
                    <div className="form-group">
                        <label for="msg">Mensagem:</label>
                        <textarea type="text"  id="msg" className="form-control"></textarea>
                    </div>
                    
                    <input type="submit" value="Enviar" class="btn btn-light"/>
                </form>
            </div>
        </div>
    );
}

export default Contato;