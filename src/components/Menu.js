import React from 'react';

export default class Menu extends React.Component{
    render(){
    return(
          <nav class="navbar navbar-expand-lg navbar-light menu" style={{ backgroundColor:"red" }}>
              <a class="navbar-brand" href="#" >
                  <img src={ '/img/logo.png' } alt="logo full stack eletro" width="150px"/>
              </a>
              
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                  </button>
  
              <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
                  <ul class="navbar-nav ">
                      <li class="nav-item active">
                          <a href="#"  class="nav-link text-white">Nossos Produtos</a>
                      </li>
                      <li class="nav-item active">
                          <a href="./lojas.html" class="nav-link text-white">Nossos Lojas</a>
                      </li>
  
                      <li class="nav-item active">
                          <a href="./fale_conosco.html" class="nav-link text-white">Fale Conosco</a>
                      </li>
                  </ul>
              </div>
          </nav>
    );
  }
}