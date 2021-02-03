import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';
import { usuario } from '../../helpers/services';
import user from '../../img/user.JPG';
import { UsuarioApi } from '../Organismos/UsuarioApi';
import { UsuarioRegistrado } from '../Organismos/UsuarioRegistrado';

export const Resumen = ({registro, setRegistro}) => {

    const [registrado, setRegistrado] = useState(false);
    const [usuario_api, setUsuario_Api] = useState(false);
    const [errorapi, setErrorApi] = useState(false);

    let history = useHistory();

    useEffect(() => {
        if (Object.entries(registro).length === 0) {
            setRegistrado(false);
            history.push('/step1');
        } else{
            setRegistrado(true);
        }
    }, [registro, history])
    
    const usuarioapi = () => {
        setRegistrado(false);
        usuario('GET').then((response) => {
            setUsuario_Api(response.results[0]);
            setErrorApi(false);            
        }).catch((error) => {
            setErrorApi(true);
        });
    }

    const inicio = () => {
        setRegistro({});
        history.push('/step1');
    }

    return (
        <>                
        {registrado &&
            <UsuarioRegistrado 
                registro={registro} 
                inicio={inicio} 
                usuarioapi={usuarioapi}
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
            />
        }
        </>
    )
}
