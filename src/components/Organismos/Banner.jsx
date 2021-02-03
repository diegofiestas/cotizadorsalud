import React from 'react'

export const Banner = () => {
    return (
        <div className="banner-izquierdo">
            <div className="banner-text">
            <h1>Seguro de Salud</h1>
            <ul>
                <li><i className="fas fa-shield-alt"></i>Cómpralo de manera fácil y rápida</li>
                <li><i className="fas fa-mobile-alt"></i> Cotiza y compra tu seguro 100% digital</li>
                <li><i className="fas fa-money-bill-wave"></i>Hasta S/.12 millones de cobertura anual</li>
                <li><i className="fas fa-hospital"></i>Más de 300 clínicas en todo el Perú</li>
            </ul>
            <p className="copyright">© 2021 RIMAC Seguros y Reaseguros.</p>
            <div className="flotante"></div>
            </div>
        </div>
    )
}
