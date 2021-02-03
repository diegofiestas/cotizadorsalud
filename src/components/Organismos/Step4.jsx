import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'

export const Step4 = ({registro}) => {

    let history = useHistory();

    useEffect(() => {
        if (Object.entries(registro).length === 0) {
            history.push('/step1');
        }
    }, [registro, history])

    const FichaResumen = () => {
        history.push('/resumen');
    }

    return (
        <div className="banner-dni">
            <div className="mensaje-final">
               <div className="titulo-final">¡Gracias por <span>confiar en nosotros!</span></div> 
                Queremos conocer mejor la salud de los asegurados. Un asesor <b>se pondrá en contacto</b> contigo en las siguientes <b>48 horas.</b>
                <div><button className="boton-final" onClick={FichaResumen}>Ir a Salud</button></div>
            </div>            
        </div>
    )
}
