import React, { useEffect } from 'react'

export const Genero = ({setRegistro, registro}) => {

    useEffect(() => {
        if(registro?.genero){
            if (registro?.genero === "masculino") { document.getElementById("masculino").checked = true; }
            else { document.getElementById("femenino").checked = true; }
        }
    }, [registro?.genero])

    return (
        <>
            <p>Género</p>
            <div className="cobertura">
                <div>
                    <input  type="radio" name="genero" id="masculino" className="check" required 
                            onChange={(e) => setRegistro({ ...registro, [e.target.name]: e.target.id })}/>
                </div>
                <div><label>Masculino</label></div>
            </div>
            <div className="cobertura">
                <div>
                    <input  type="radio" name="genero" id="femenino" className="check" required 
                            onChange={(e) => setRegistro({ ...registro, [e.target.name]: e.target.id })}/>
                </div>
                <div><label>Femenino</label></div>
                <br />
            </div>
        </>
    )
}
