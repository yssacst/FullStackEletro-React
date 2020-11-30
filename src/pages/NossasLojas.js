import React from 'react';
import Menu from '../components/Menu';
import FormaPagamento from '../components/FormaPagamento';

export default class NossasLojas extends React.Component{
    render(){
        return(
            <div>
                <Menu />

                <header>
                    <h2>Nossas Lojas</h2>        
                </header>   
                <div className='d-flex justify-content-around'>
                    <div>
                        <h3>Rio de Janeiro</h3>
                        <p> Rua Luigi Galvani, 70</p>
                        <p>4 &ordm;</p>
                        <p>Centro</p>
                        <p>(21) 4004-4044</p>   
                    </div>
                    <div>
                        <h3>São Paulo</h3>
                        <p> Rua Luigi Galvani, 70</p>
                        <p>4 &ordm;</p>
                        <p>Centro</p>
                        <p>(21) 4004-4044</p>
                    </div>
                    <div>
                        <h3>Santa Catarina</h3>
                        <p> Rua Luigi Galvani, 70</p>
                        <p>4 &ordm;</p>
                        <p>Centro</p>
                        <p>(21) 4004-4044</p>
                    </div>
                </div>
                  <FormaPagamento img='/img/pagamento.jpg' footer="Recode Pro"/>
            </div>
        );
    }
}