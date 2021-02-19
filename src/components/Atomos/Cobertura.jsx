import React, { useEffect } from 'react'

export const Cobertura = ({setRegistro, registro}) => {

    useEffect(() => {
        if(registro?.cobertura){
            if (registro?.cobertura === "cobertura_personal") { document.getElementById("cobertura_personal").checked = true; }
            else { document.getElementById("cobertura_familiar").checked = true; }
        }
    }, [registro?.cobertura])

    return (
        <>
            <p>¿A quien vamos a asegurar?</p>
            <div className="cobertura">
                <div>
                    <input  type="radio" name="cobertura" id="cobertura_personal" className="check" required 
                            onChange={(e) => setRegistro({ ...registro, [e.target.name]: e.target.id })}/>
                </div>
                <div><label>Sólo a mi</label></div><br />
            </div>
            <div className="cobertura">
                <div>
                    <input  type="radio" name="cobertura" id="cobertura_familiar" className="check" required 
                            onChange={(e) => setRegistro({ ...registro, [e.target.name]: e.target.id })}/>
                </div>
                <div><label>A mí y a mi familia</label></div>
            </div>
        </>
    )
}
