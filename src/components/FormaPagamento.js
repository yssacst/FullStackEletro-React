function FormaPagamento(props){
    return(        
            <div className="row">
                <div className="col-sm-12 text-center text-danger"><h4>{props.title}</h4></div>
                <div className="col-sm-12 text-center"><img src={ require('../img/'+props.img).default } width="300px" alt="Formas de pagamento"/></div>
                <div className="col-sm-12 text-center text-monospace"><span>&copy; {props.footer}</span></div>
            </div>
    );
}

export default FormaPagamento;