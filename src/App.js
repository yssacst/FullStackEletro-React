import React from 'react';
import Router from './Router'
import Menu from './components/Menu';
import FormaPagamento from './components/FormaPagamento';
import './App.css';


export default class App extends React.Component{

  render(){
    return(
      <div className="container-fluid App">
          <Menu />
          <Router />
          <FormaPagamento img='/img/pagamento.jpg' footer="Recode Pro"/>
      </div>
    )
  }
}