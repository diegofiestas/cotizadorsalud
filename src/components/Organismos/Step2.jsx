import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom';
import { useForm2 } from '../../helpers/useForm';
import { Cobertura } from '../Atomos/Cobertura';
import { Genero } from '../Atomos/Genero';
import { validators2 } from './../../helpers/validators';

export const Step2 = ({ fechamaxima, registro, setRegistro }) => {

    const { handleChange, handleSubmit, errors, submitting } = useForm2(validators2, registro, setRegistro);
    const [leyenda, setLeyenda] = useState(false);
    const [nombre, setNombre] = useState("");
    let history = useHistory();

    useEffect(() => {
        if(registro.step === 0) {
            history.push('/step1');
        } else {
            if (Object.keys(errors).length === 0 && submitting) {
                setRegistro({...registro, step: 2})
                history.push('/step3');}
        }
    }, [errors, submitting, registro.step, history, registro, setRegistro])

    return (
        <div className="banner-dni">
            <form onSubmit={handleSubmit} className="animate__animated animate__bounce animate__fadeInDown">
                <p>
                    <Link to='/step1'>
                        <i className="far fa-arrow-alt-circle-left icon-s"></i>
                    </Link>
                    &nbsp;Paso 1 de 2
                </p>
                <h2>Hola, <label className="icon-s">{nombre ? nombre : ""}</label></h2>
                <p>Valida que los datos sean correctos</p>

                {/* Tipo de Documento */}
                <div className="form-control">
                    <select
                        className="control"
                        name="tipo_doc"
                        id="tipo_doc"
                        value={registro.tipo_doc}
                        onChange={handleChange}

                    >
                        <option value=""> -Selecciona- </option>
                        <option value="DNI"> DNI </option>
                        <option value="CE"> Carnet de Extranjería </option>
                    </select>
                </div>
                {errors.tipo_doc && <span className="error">{errors.tipo_doc}</span>}

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
                        onBlur={(e) => { setLeyenda(false) }}
                        value={registro.num_doc}
                        onChange={handleChange}
                    />
                    {errors.num_doc && <span className="error">{errors.num_doc}</span>}
                    {leyenda && <label className="fixed">Nro de Documento</label>}
                </div>

                {/* Nombres */}
                <div className="form-control">
                    <input
                        type="text"
                        className="control"
                        placeholder="Nombres"
                        name="nombres"
                        id="nombres"
                        onFocus={(e) => { setLeyenda(true) }}
                        onBlur={(e) => { setLeyenda(false); setNombre(e.target.value) }}
                        autoComplete="off"
                        value={registro.nombres}
                        onChange={handleChange}
                    />
                    {errors.nombres && <span className="error">{errors.nombres}</span>}
                    {leyenda && <label className="fixed">Nombres</label>}
                </div>

                {/* Apellido Paterno */}
                <div className="form-control">
                    <input
                        type="text"
                        className="control"
                        placeholder="Apellido Paterno"
                        name="paterno"
                        id="paterno"
                        onFocus={(e) => { setLeyenda(true) }}
                        onBlur={(e) => { setLeyenda(false) }}
                        autoComplete="off"
                        value={registro.paterno}
                        onChange={handleChange}
                    />
                    {errors.paterno && <span className="error">{errors.paterno}</span>}
                    {leyenda && <label className="fixed">Apellido Paterno</label>}
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
                        autoComplete="off"
                        value={registro.materno}
                        onChange={handleChange}
                    />
                    {errors.materno && <span className="error">{errors.materno}</span>}
                    {leyenda && <label className="fixed">Apellido Materno</label>}
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
                        }}
                        onBlur={(e) => { setLeyenda(false) }}
                        value={registro.fecha_nacimiento}
                        onChange={handleChange}
                    />
                    {errors.fecha_nacimiento && <span className="error">{errors.fecha_nacimiento}</span>}
                    {leyenda && <label className="fixed">Fecha de Nacimiento</label>}
                </div>

                <br />
                {/* Genero y cobertura */}
                <Genero registro={registro} setRegistro={setRegistro} />
                <Cobertura registro={registro} setRegistro={setRegistro} />
                <button type="submit" className="rimac-button">Continuar</button>
            </form>
        </div >
    )
}
