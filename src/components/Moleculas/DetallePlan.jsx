import React from 'react'

export const DetallePlan = ({seleccionado}) => {
    return (
        <div className="plan-detallado animate__animated animate__fadeInDown">
        <div className="plan-detallado-titulo">Cuentas con estos beneficios:</div>
        <div className="plan-detallado-cobertura">
            <div className="cobertura-left">
                <p>Cobertura máxima</p>
                <p className="cobertura-left-monto">S/ {seleccionado.cobertura}</p>
            </div>
            <div className="cobertura-right"></div>
        </div>
        <div className="plan-detallado-items">
            <ul>
                <li className={seleccionado.detalle?.item1 ? "li-activo" : "li-inactivo"}><i className="fas fa-heart"></i> Lima (zona de cobertura </li>
                <li className={seleccionado.detalle?.item2 ? "li-activo" : "li-inactivo"}><i className="fas fa-heart"></i> +30 Clínicas (en red afiliada) </li>
                <li className={seleccionado.detalle?.item3 ? "li-activo" : "li-inactivo"}><i className="fas fa-heart"></i> Médico a domicilio </li>
                <li className={seleccionado.detalle?.item4 ? "li-activo" : "li-inactivo"}><i className="fas fa-heart"></i> Chequeos preventivo </li>
                <li className={seleccionado.detalle?.item5 ? "li-activo" : "li-inactivo"}><i className="fas fa-heart"></i> Reembolso nacional </li>
                <li className={seleccionado.detalle?.item6 ? "li-activo" : "li-inactivo"}><i className="fas fa-heart"></i> Reembolso internacional </li>
            </ul>
        </div>
    </div>
    )
}
