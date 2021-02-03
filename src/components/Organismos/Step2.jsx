import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom';
import { numeros, letras, validadni } from './../../helpers/validators';

export const Step2 = ({ fechamaxima, registro, setRegistro }) => {

    const [leyenda, setLeyenda] = useState(false);
    const [nombre, setNombre] = useState("");
    const [dni, setDni] = useState();
    const [tipodoc, setTipoDoc] = useState();
    let history = useHistory();

    const onSubmit = (e) => {
        e.preventDefault();
        history.push('/step3')
    }

    useEffect(() => {
        if (Object.entries(registro).length === 0) {            
            history.push('/step1');
        } else {
            const { tipo_doc, num_doc, fecha_nacimiento } = registro;
            document.getElementById("tipo_doc").value = tipo_doc;
            document.getElementById("num_doc").value = num_doc;
            document.getElementById("fecha_nacimiento").value = fecha_nacimiento;
            if(registro?.nombres){document.getElementById("nombres").value = registro?.nombres; setNombre(registro?.nombres)}
            if(registro?.paterno){document.getElementById("paterno").value = registro?.paterno;}
            if(registro?.materno){document.getElementById("materno").value = registro?.materno;}
            if(registro?.genero){
                if(registro?.genero === "masculino"){document.getElementById("masculino").checked = true;}
                    else{document.getElementById("femenino").checked = true;}
            }
            if(registro?.cobertura){
                if(registro?.cobertura === "cobertura_personal"){document.getElementById("cobertura_personal").checked = true;}
                    else{document.getElementById("cobertura_familiar").checked = true;}            
            }
        }
    }, [registro, setNombre, history])

    return (
        <div className="banner-dni">
            <form onSubmit={onSubmit}>
                <p>
                    <Link to='/step1'>
                        <i className="far fa-arrow-alt-circle-left icon-s"></i>
                    </Link>
                    &nbsp;Paso 1 de 2
                </p>
                <h2>Hola, <label className="icon-s">{nombre ? nombre : ""}</label></h2>
                <p>Valida que los datos sean correctos</p>

                {/* Tipo de Doc */}
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

                {/* Nombres */}
                <div className="form-control">
                    <input
                        type="text"
                        className="control"
                        placeholder="Nombres"
                        name="nombres"
                        id= "nombres"
                        onFocus={(e) => { setLeyenda(true) }}
                        onBlur={(e) => { setLeyenda(false) }}
                        onChange={(e) => {  setNombre(e.target.value);
                                            setRegistro({ ...registro, [e.target.name]: e.target.value })
                                        }}
                        onKeyUp={(e) => { letras(e) }}
                        autoComplete="off"
                        required
                    />
                    <span className="error">

                    </span>
                    {leyenda &&
                        <label className="fixed">Nombres</label>
                    }
                </div>
                {/* Apellido Paterno */}
                <div className="form-control">
                    <input
                        type="text"
                        className="control"
                        placeholder="Apellido Paterno"
                        name="paterno"
                        id= "paterno"
                        onFocus={(e) => { setLeyenda(true) }}
                        onBlur={(e) => { setLeyenda(false) }}
                        onChange={(e) => setRegistro({ ...registro, [e.target.name]: e.target.value })}
                        onKeyUp={(e) => { letras(e) }}
                        autoComplete="off"
                        required
                    />
                    <span className="error">

                    </span>
                    {leyenda &&
                        <label className="fixed">Apellido Paterno</label>
                    }
                </div>
                {/* Apellido Materno */}
                <div className="form-control">
                    <input
                        type="text"
                        className="control"
                        placeholder="Apellido Materno"
                        name="materno"
                        id="materno"
                        onFocus={(e) => { setLeyenda(true) }}
                        onBlur={(e) => { setLeyenda(false) }}
                        onChange={(e) => setRegistro({ ...registro, [e.target.name]: e.target.value })}
                        onKeyUp={(e) => { letras(e) }}
                        autoComplete="off"
                        required
                    />
                    <span className="error">

                    </span>
                    {leyenda &&
                        <label className="fixed">Apellido Materno</label>
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

                <br />
                {/* Genero y cobertura */}
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
                <button type="submit" className="rimac-button">Continuar</button>
            </form>
        </div>
    )
}
