function Comentario(props){
    return(
        <div className="card">
            <div className="card-header">
                <p>{props.data.nome}</p>
            </div>
            <div className="card-body">
                <p><small>{props.data.msg}</small></p>
            </div>
        </div>
    );
}

export default Comentario;