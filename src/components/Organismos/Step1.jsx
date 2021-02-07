import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';
import { useForm1 } from '../../helpers/useForm';
import { Politicas } from '../Atomos/Politicas';
import {validators1} from './../../helpers/validators';

export const Step1 = ({ fechamaxima, registro, setRegistro }) => {

    const {handleChange, handleSubmit, errors, submitting} = useForm1(validators1, registro, setRegistro);

    const [leyenda, setLeyenda] = useState(false);
    let history = useHistory();

    useEffect(() => {
        if(Object.keys(errors).length === 0 && submitting){
            setRegistro({...registro, step: 1})
            history.push('/step2');
        }
    }, [errors, submitting, registro, setRegistro, history])

    return (        
            <div className="banner-dni">
                <form onSubmit={handleSubmit}>
                    <h2>Obtén tu <label className="icon-s">seguro ahora</label></h2>
                    <p>Ingresa los datos para comenzar</p>
                    <div className="form-control">
                        {/* Tipo de Documento */}
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
                                setLeyenda(true);}}
                            onBlur={(e) => { setLeyenda(false) }}
                            value={registro.fecha_nacimiento}
                            onChange={handleChange}
                        />
                        {errors.fecha_nacimiento && <span className="error">{errors.fecha_nacimiento}</span>}
                        {leyenda && <label className="fixed">Fecha de Nacimiento</label>}
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
                            onBlur={(e) => { setLeyenda(false); }}
                            value={registro.cel}
                            onChange={handleChange}
                            autoComplete="off"
                        />
                        {errors.cel && <span className="error">{errors.cel}</span>}
                        {leyenda && <label className="fixed">Celular</label>}
                    </div>

                    {/* Politicas Obligatorias*/}
                    <Politicas />
                    <button type="submit" className="rimac-button">Comencemos</button>
                </form>
            </div>
    )
}
