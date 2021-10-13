import axios from "axios";
import Config from "../util/Config";

class UsuarioService {
    
    async cadastrar(data){
        return axios({
            url: Config.API_URL + "user",
            method: "POST",
            timeout: Config.TIMEOUT_REQUEST,
            data: data,
            headers: Config.HEADER_REQUEST
        }).then((response) => {
            return Promise.resolve(response)
        }).catch((error) => {
            return Promise.reject(error)
        })
    }
    
    async login(data){
        return axios({
            url: Config.REST_API_URL + "user/login",
            method: "POST",
            timeout: Config.TIMEOUT_REQUEST,
            data: data,
            headers: Config.HEADER_REQUEST
        }).then((response) => {
            return Promise.resolve(response)
        }).catch((error) => {
            return Promise.reject(error)
        })
    }
    
    retornaTipoCargo(cargo){
        if(cargo === "Administrador"){
            return "Principal ADM";
        }else if(cargo === "Chefe de Setor"){
            return "Principal Chefe de Setor";
        }
        else if(cargo === "Prestador"){
            return "Principal Prestador";
        }
        else if(cargo === "Gerente"){
            return "Principal Gerente";
        }
    }

}

const usuarioService = new UsuarioService()
export default usuarioService;