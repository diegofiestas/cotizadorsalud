import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom';
import { Exclusiones } from '../Atomos/Exclusiones';
import { Servicios } from '../Atomos/Servicios';
import { DetallePlan } from '../Moleculas/DetallePlan';
import { Plan } from '../Moleculas/Plan';

export const Step3 = ({ registro, setRegistro }) => {

    const [plan, setPlan] = useState([
        {
            id: 1, activo: false, nombre: "BÁSICO", precio: "160", cobertura: "3MM",
            detalle: { item1: true, item2: true, item3: true }
        },
        {
            id: 2, activo: false, nombre: "AVANZADO", precio: "200", cobertura: "5MM",
            detalle: { item1: true, item2: true, item3: true, item4: true }
        },
        {
            id: 3, activo: false, nombre: "PREMIUM", precio: "250", cobertura: "7MM",
            detalle: { item1: true, item2: true, item3: true, item4: true, item5: true }
        },
        {
            id: 4, activo: false, nombre: "FULL", precio: "500", cobertura: "9MM",
            detalle: { item1: true, item2: true, item3: true, item4: true, item5: true, item6: true }
        }
    ]);
    const [seleccionado, setSeleccionado] = useState();
    const [servicio, setServicio] = useState(false);
    const [exclusion, setExclusion] = useState(false);
    const [sw, setSw] = useState(false);

    let history = useHistory();

    const comprarplan = () => {        
        if(seleccionado){
            setRegistro({ ...registro, "plan": seleccionado })
            history.push('/step4');
        } else {
            setSw(true);
        }
    }

    useEffect(() => {
        if (Object.entries(registro).length === 0) {
            history.push('/step1');
        }
    }, [registro, history])

    const planseleccionado = (ps) => {
        const { id } = ps;
        setPlan(plan.map(p => {
            let item = { ...p };
            if (item.id === id) {
                item.activo = true;
            } else {
                item.activo = false;
            }
            return item;
        }));
        setSw(false);
        setSeleccionado(ps);
    }

    return (
        <div className="banner-dni">
            <div className="banner-planes">
                <p>
                    <Link to='/step2'>
                        <i className="far fa-arrow-alt-circle-left icon-s"></i>
                    </Link>
                &nbsp;Paso 2 de 2
            </p>
                <h2>Elige <label className="icon-s">tu protección</label></h2>
                <p>Selecciona tu plan de salud ideal</p>
                {sw &&
                    <>
                    <br />
                    <label className="error">Debes seleccionar un plan</label>
                    </>
                }
                <div className="planes">
                    {
                        plan.map((p) => (
                            <Plan p={p} planseleccionado={planseleccionado} key={p.id} />
                        ))
                    }
                </div>

                {seleccionado &&
                    <DetallePlan seleccionado={seleccionado} />
                }

                <div className="exclusiones">
                    <p>Revisa nuestros
                <br />
                        <label className="icon-s">Servicios y exclusiones</label>
                    </p>
                </div>
                <div className="exclusiones2">
                    <div>Servicios brindados</div>
                    <div onClick={(e) => setServicio(!servicio)}><i className="fas fa-caret-down puntero"></i></div>
                    {servicio &&
                        <Servicios />
                    }
                </div>
                <div className="exclusiones2">
                    <div>Exclusiones</div>
                    <div onClick={(e) => setExclusion(!exclusion)}><i className="fas fa-caret-down puntero"></i></div>
                    {exclusion &&
                        <Exclusiones />
                    }
                </div>

                <button type="submit" className="rimac-button" onClick={comprarplan}>Comprar plan</button>
            </div>
        </div>
    )
}
