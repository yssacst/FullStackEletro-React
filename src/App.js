import React from 'react';
import Menu from './components/Menu';
import Contato from './pages/Contato';
import Produtos from './pages/Produtos';
import NossasLojas from './pages/NossasLojas';
import FormaPagamento from './components/FormaPagamento';

export default class App extends React.Component{

  render(){
    return(
      <div className="App">
        <Menu/>
        <NossasLojas/>
        <footer className="page-footer">
          <FormaPagamento title="Formas de Pagamento" img={ '/img/pagamento.jpg'} footer="Recode Pro"/>
        </footer>
      </div>
    )
  }
}