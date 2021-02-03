import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';
import { numeros, validadni, validacelular } from './../../helpers/validators';

export const Step1 = ({ fechamaxima, registro, setRegistro }) => {

    const [leyenda, setLeyenda] = useState(false);
    const [dni, setDni] = useState("");
    const [celular, setCelular] = useState("");
    const [tipodoc, setTipoDoc] = useState();    
    let history = useHistory();

    const onSubmit = (e) => {
        console.log(dni,celular);
        e.preventDefault();
        if (dni !== "" || celular !== "") {
            //No permitimos avanzar
        } else {
            history.push('/step2')
        }
    }

    useEffect(() => {
        if (Object.entries(registro).length !== 0) {    
            if(registro?.tipo_doc){document.getElementById("tipo_doc").value = registro?.tipo_doc;}
            if(registro?.num_doc){document.getElementById("num_doc").value = registro?.num_doc;}
            if(registro?.fecha_nacimiento){document.getElementById("fecha_nacimiento").value = registro?.fecha_nacimiento;}
            if(registro?.cel){document.getElementById("cel").value = registro?.cel;}
        }
    },[registro])

    return (        
            <div className="banner-dni">
                <form onSubmit={onSubmit}>
                    <h2>Obtén tu <label className="icon-s">seguro ahora</label></h2>
                    <p>Ingresa los datos para comenzar</p>
                    <div className="form-control">
                        {/* Tipo de Dni */}
                        <select
                            className="control"
                            name="tipo_doc"
                            id="tipo_doc"
                            onChange={(e) => {
                                setTipoDoc(e.target.value);
                                setRegistro({ ...registro, [e.target.name]: e.target.value })
                            }}
                            required
                        >
                            <option value=""> -Selecciona- </option>
                            <option value="DNI"> DNI </option>
                            <option value="CE"> Carnet de Extranjería </option>
                        </select>
                    </div>

                    {/* Nro de Documento */}
                    <div className="form-control">
                        <input
                            type="text"
                            className="control"
                            placeholder={leyenda ? "" : "Nro de Documento"}
                            autoComplete="off"
                            name="num_doc"
                            id="num_doc"
                            onFocus={(e) => { setLeyenda(true) }}
                            onBlur={(e) => {
                                setLeyenda(false);
                                validadni(e, setDni, tipodoc)
                            }}
                            onKeyUp={(e) => { numeros(e) }}
                            onChange={(e) => setRegistro({ ...registro, [e.target.name]: e.target.value })}
                            required
                        />
                        <span className="error">
                            {dni && <span>{dni}</span>}
                        </span>
                        {leyenda &&
                            <label className="fixed">Nro de Documento</label>
                        }
                    </div>

                    {/* Fecha de Nacimiento */}
                    <div className="form-control">
                        <input
                            type="text"
                            className="control"
                            placeholder={leyenda ? "" : "Fecha de nacimiento"}
                            name="fecha_nacimiento"
                            id="fecha_nacimiento"
                            max={fechamaxima()}
                            onFocus={(e) => {
                                e.currentTarget.type = "date";
                                e.currentTarget.focus();
                                setLeyenda(true);
                            }
                            }
                            onBlur={(e) => { setLeyenda(false) }}
                            onChange={(e) => setRegistro({ ...registro, [e.target.name]: e.target.value })}
                            required
                        />
                        {leyenda &&
                            <label className="fixed">Fecha de Nacimiento</label>
                        }
                    </div>

                    {/* Celular */}
                    <div className="form-control">
                        <input
                            type="text"
                            className="control"
                            placeholder="Celular"
                            name="cel"
                            id="cel"
                            onFocus={(e) => { setLeyenda(true) }}
                            onBlur={(e) => { setLeyenda(false); numeros(e); validacelular(e, setCelular) }}
                            onChange={(e) => setRegistro({ ...registro, [e.target.name]: e.target.value })}
                            autoComplete="off"
                            required
                        />
                        <span className="error">
                            {celular && celular}
                        </span>
                        {leyenda &&
                            <label className="fixed">Celular</label>
                        }
                    </div>
                    {/* Politicas */}
                    <div className="politicas">
                        <div>
                            <input type="checkbox" name="politica1" id="politica1" className="check" required
                                onChange={(e) => setRegistro({ ...registro, [e.target.name]: e.target.value })}
                            />
                        </div>
                        <div>
                            <label>
                                Acepto la <a href=" #">Política de Protección de Datos Personales y los Términos y Condiciones</a>
                            </label>
                        </div>
                    </div>
                    <div className="politicas">
                        <div>
                            <input type="checkbox" name="politica2" id="politica2" className="check" required
                                onChange={(e) => setRegistro({ ...registro, [e.target.name]: e.target.value })}
                            />
                        </div>
                        <div>
                            <label>
                                Acepto la <a href=" #">Política de Envío de Comunicaciones Comerciales</a>
                            </label>
                        </div>
                    </div>
                    <button type="submit" className="rimac-button">Comencemos</button>
                </form>
            </div>
    )
}
