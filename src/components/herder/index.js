import React from 'react';
import { AreaHeader } from './styled';

function Herder() {
  return (
      /*
      <>
       Todos os direitos reservados
      </>
      */
     //container e logo sendo acessados do styled.js
     //Aqui foi decidido que os clicks fazem uma ação pra ir a outra página.
     <AreaHeader>
        <div className="container">
            <div className="logo">
                <img src="../../../logo.png"></img>
            </div>

            <nav>
              <ul>
                <li><a href="/">Inicio</a></li>
                <li><a href="/config">Configurações</a></li>
                <li><a href="/logout">Sair</a></li>
              </ul>
            </nav>
        </div>
     </AreaHeader>
  )
}

export default Herder;