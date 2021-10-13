import React from 'react';

import Herder from './components/herder';
import Footer from './components/footer';

import Rotas from './Routes'

import './App.css';

//import Login from './pages/Login';

function App() {

  /*const [user, setUser] = useState(null);

  //Se não tiver logado
  if(user === null){////fnnbnbugugug
    return(
      <Login>
      </Login>
    )
  }*/
  //Se tiver logado
  //Aqui estão as rotas utilizadas dentro de herder e footer;
  return (
    /*
    <div>
        <h1>Hello World!!!</h1>
        <p>test</p>
    </div>
    */
   <>
        <Herder />

            <Rotas></Rotas>

        <Footer />
        </>
  );
}

export default App;
