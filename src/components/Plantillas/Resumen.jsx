import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';
import { obtenerusuario } from '../../helpers/services';
import user from '../../img/user.JPG';
import { UsuarioApi } from '../Organismos/UsuarioApi';
import { UsuarioRegistrado } from '../Organismos/UsuarioRegistrado';

export const Resumen = ({registro, setRegistro}) => {

    const [usuario, setUsuario] = useState();
    const [toggle, setToggle] = useState(false);
    const [usuario_api, setUsuario_Api] = useState(false);
    const [errorapi, setErrorApi] = useState(false);
    let history = useHistory();

    useEffect(() => {        
            if(registro.step === 0) { history.push('/step1') }
            else if(registro.step === 1) { history.push('/step2') }
            else if(registro.step === 2) { history.push('/step3') }   
            else { setToggle(true); setUsuario(JSON.parse(sessionStorage.getItem("usuario"))); }         
    }, [registro.step, history])
    
    const usuarioapi = () => {
        setToggle(false);
        obtenerusuario('GET').then((response) => {
            setUsuario_Api(response.results[0]);
            setErrorApi(false);            
        }).catch((error) => {
            setErrorApi(true);
        });
    }

    const eliminarusuario = () => {
        /* En caso hubiera API rest para eliminar habilitada, enviaria el id del usuario para eliminarlo */ 
        /* obtenerusuario(id, 'DELETE').then((response) => {
            setRegistro({});
            sessionStorage.removeItem("usuario");
            history.push('/step1');      
        }).catch((error) => {
            setErrorApi(true);
        }); */

        if(toggle){
            inicio();
        } else {
            /* Si tratamos de eliminar un usuario API, muestra el usuario grabado en sesion */
            setToggle(true);
            setUsuario_Api(false);
        }
    }    

    const inicio = () => {
        setRegistro({});
        sessionStorage.removeItem("usuario");
        history.push('/step1');
    }

    return (
        <>                
        {toggle &&
            <UsuarioRegistrado 
                registro={usuario} 
                inicio={inicio} 
                usuarioapi={usuarioapi}
                eliminarusuario={eliminarusuario}
                user={user} 
                errorapi={errorapi}
            />
        }
        
        {usuario_api &&
            <UsuarioApi 
                inicio={inicio} 
                usuario_api={usuario_api}   
                usuarioapi = {usuarioapi}             
                errorapi={errorapi}
                eliminarusuario={eliminarusuario}
            />
        }
        </>
    )
}
