import React from 'react'

export const UsuarioRegistrado = ({registro, inicio, usuarioapi, user, errorapi}) => {
    return (
        <div className="banner-resumen">                      
                <div className="r-imagen">
                <div className="titulo-final"><span>Ficha Resumen</span></div> 
                    <img src={user} alt="user" />
                </div>
                <div className="r-datos">
                    <div>Nombre: </div>
                    <div>{registro?.nombres + ' ' + registro?.paterno + ' ' + registro?.materno}</div>
                    <div>Nro Doc: </div>
                    <div>{registro?.num_doc}</div>
                    <div>Celular: </div>
                    <div>{registro?.cel}</div>                    
                    <div className="division">Plan: </div>
                    <div className="division">{registro?.plan?.nombre + ' S/. ' + registro?.plan?.precio}</div>
                </div>
                {errorapi && <label className="error mensaje-error">* Error con  API por favor intentalo nuevamente</label>}
                <div className="r-botones">
                    <button className="genera-user" onClick={inicio}>Ir al Inicio</button>
                    <button className="genera-user" onClick={usuarioapi}>Generar Usuario API</button>
                </div>
        </div>
    )
}
