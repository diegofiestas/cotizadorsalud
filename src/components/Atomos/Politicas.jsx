import React from 'react'

export const Politicas = () => {
    return (
        <>
            <div className="politicas">
                <div>
                    <input type="checkbox" name="politica1" id="politica1" className="check" required/>
                </div>
                <div>
                    <label>
                        Acepto la <a href=" #">Política de Protección de Datos Personales y los Términos y Condiciones</a>
                    </label>
                </div>
            </div>
            <div className="politicas">
                <div>
                    <input type="checkbox" name="politica2" id="politica2" className="check" required/>
                </div>
                <div>
                    <label>
                        Acepto la <a href=" #">Política de Envío de Comunicaciones Comerciales</a>
                    </label>
                </div>
            </div>            
            <br />
        </>
    )
}
