import Footer from "../components/Footer";
import Menu from "../components/Menu";
import '../css/Index.css';

function Index(){
    return(
        <div className="container-fluid">
            <div className="row">
                <div className="col-12 p-0">
                    <Menu />
                </div>
            </div>
            <div className="row ">
                <div className="col-sm-12 mt-10 p-0 mx-0 justify-content-center ">
                
                    <h1>Seja bem vindo(a)!</h1>
                
                    <div id="carouselExampleControls" className="carousel slide carroselbox" data-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                            <img className="d-block w-100" src={require('../img/blackfriday.webp').default} alt="First slide"/>
                            </div>
                            <div className="carousel-item">
                                <img className="d-block w-100" src={require('../img/ofertageladeira.jpg').default} alt="Second slide"/>
                            </div>
                            <div className="carousel-item">
                                <img className="d-block w-100" src={require('../img/ofertafogao.jpg').default} alt="Third slide"/>
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                
                    <p>Aqui em nossa loja, programadores tem desconto nos produtos para sua casa!</p>  
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

export default Index;