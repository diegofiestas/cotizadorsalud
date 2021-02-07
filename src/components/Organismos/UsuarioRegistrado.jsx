import React from 'react'

export const UsuarioRegistrado = ({registro, inicio, usuarioapi, user, errorapi, eliminarusuario}) => {
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
                    <button className="inicio-button" onClick={inicio} title="Ir a Inicio"><i className="fas fa-home"></i></button>
                    <button className="generauser-button" onClick={usuarioapi} title="Agregar Usuario API"><i className="fas fa-user-plus"></i></button>
                    <button className="eliminar-button" onClick={eliminarusuario} title="Eliminar Usuario"><i className="fas fa-trash-alt"></i></button>
                </div>
        </div>
    )
}
