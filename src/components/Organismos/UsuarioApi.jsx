import React from 'react'

export const UsuarioApi = ({inicio, usuario_api, usuarioapi, errorapi, eliminarusuario}) => {
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
                    <button className="inicio-button" onClick={inicio} title="Ir a Inicio"><i className="fas fa-home"></i></button>
                    <button className="generauser-button" onClick={usuarioapi} title="Agregar Usuario API"><i className="fas fa-user-plus"></i></button>
                    <button className="eliminar-button" onClick={eliminarusuario} title="Eliminar Usuario"><i className="fas fa-trash-alt"></i></button>
                </div>
        </div>
    )
}
