import React, { useState} from "react";
import usuarioService from '../../services/UsuarioService';

import { AreaLogin } from './styled';

import { BtnDefaultIcons, BtnDefault } from '../../components/Styled';
import { BrowserRouter, Switch, Route } from "react-router-dom";

//pode reproveitar com const
const Page = () => {

    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)

    const entrar = () =>{
        console.log("Clicou em entrar");

        console.log("Email: "+email);
        console.log("Senha: "+password);

        let data = {
            email: email,
            password: password
        }
    
        usuarioService.login(data)
        .then((response) => {
            let telaCargo = usuarioService.retornaTipoCargo(response.data.job);
            if(telaCargo != null){
                console.log("Cargo encontrado: " +telaCargo);
            }else{
                console.log("Não encontrado!");
            }
        })
        .catch((error) => {
        })

    }

    return (

        <BrowserRouter>
             <Switch>
                <Route exact path="*">
                    <AreaLogin>
                        <h1>Login</h1>

                        <BtnDefaultIcons>
                            <div className="center"> Fazer login com o facebook</div>
                        </BtnDefaultIcons>

                        <p>OU</p>

                        <form>
                            <div className="form--input">
                                <label>E-email
                                </label>
                                <input 
                                    type="email" 
                                    placeholder="Digite seu email"
                                    onChange={(e) => setEmail(e.target.value)}>
                                </input>
                            </div>
                            <div className="form--input">
                                <label>Senha</label>
                                <input 
                                    type="password" 
                                    placeholder="Digite sua senha"
                                    onChange={(e) => setPassword(e.target.value)}>
                                </input>
                            </div>
                        </form>
                        <BtnDefault onClick={entrar}>           
                            Entrar
                        </BtnDefault>
                        <div>
                            Não tem conta? 
                            <a href="/registrar"> Registre-se!</a>
                        </div>
                    </AreaLogin>
                </Route>
                <Route exact path="/registrar">
                    <AreaLogin>
                        <p><a href="/">Voltar pra a tela anterior</a></p>
                        <h1 className= "organize">
                            Cria sua conta
                        </h1>

                        <form>
                            <div className="form--input">
                                <label>Nome</label>
                                <input type="text"></input>
                            </div>  
                            <div className="form--input">
                                <label>E-email</label>
                                <input type="email" 
                                        placeholder= "Digite seu email">                                            
                                </input>
                            </div>
                            <div className="form--input">
                                <label>Senha</label>
                                <input type="password"
                                        placeholder= "Digite seu email">
                                </input>
                            </div>

                            <div>
                                Já tem uma conta? 
                                <a href="/"> Fazer login</a>
                            </div>
                        </form>
                        
                        <BtnDefault>
                            Começar agora
                            <a href="/"></a>
                        </BtnDefault>
                    </AreaLogin>
                 </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default Page;