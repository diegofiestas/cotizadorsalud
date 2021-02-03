import React from 'react'

export const UsuarioApi = ({inicio, usuario_api, usuarioapi, errorapi}) => {
    return (
        <div className="banner-resumen">                      
                <div className="r-imagen">
                <div className="titulo-final"><span>Ficha Resumen</span></div> 
                    <img src={usuario_api?.picture?.thumbnail} alt="user" />
                </div>
                <div className="r-datos">
                    <div>Nombre: </div>
                    <div>{usuario_api?.name?.title + ' ' + usuario_api?.name?.first + ' ' + usuario_api?.name?.last}</div>
                    <div>Email: </div>
                    <div>{usuario_api?.email}</div>
                    <div>Celular: </div>
                    <div>{usuario_api?.cell}</div>                    
                    <div className="division">Direccion: </div>
                    <div className="division">{usuario_api?.location?.state + ' / ' + usuario_api?.location?.street?.name}</div>
                </div>
                {errorapi && <label className="error mensaje-error">* Error con  API por favor intentalo nuevamente</label>}
                <div className="r-botones">
                    <button className="genera-user" onClick={inicio}>Ir al Inicio</button>
                    <button className="genera-user" onClick={usuarioapi}>Generar Usuario API</button>
                </div>
        </div>
    )
}
