import React from 'react'

export const Plan = ({p, planseleccionado}) => {
    return (
        <div className={p.activo === false ? "plan" : "plan-seleccionado"} onClick={(e) => { planseleccionado(p) }}>
            <div className="top-icon">
                <i className="fas fa-check-circle"></i>
            </div>
            <div className="titulo">{p.nombre}</div>
            <div className="precio"><span>S/ </span>{p.precio}</div>
            <div className="periodo">mensual</div>
        </div>
    )
}
