import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter , Switch, Route } from "react-router-dom";
import NossasLojas from './pages/NossasLojas';
import Index from './pages/Index';
import Contato from './pages/Contato';
import Produtos from './pages/Produtos';

ReactDOM.render(
    <BrowserRouter>
      <Switch>
          <Route path="/contato" component = { Contato }/>
          <Route path="/lojas" component = { NossasLojas }/>
          <Route path = "/produtos" component = { Produtos }/>
          <Route path = "/" exact={true} component = { Index }/>
      </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
