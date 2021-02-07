import React from 'react';
import { useState } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { Banner } from '../Organismos/Banner';
import { Step1 } from '../Organismos/Step1';
import { Step2 } from '../Organismos/Step2';
import { Step3 } from '../Organismos/Step3';
import { Step4 } from '../Organismos/Step4';
import { Resumen } from '../Plantillas/Resumen';

export const RegistroPage = () => {
    const [registro, setRegistro] = useState({
        step: 0,
        tipo_doc: "",
        num_doc: "",
        fecha_nacimiento: "",
        cel: "",
        nombres: "",
        paterno: "",
        materno: ""
    });

    const [registrados, setRegistrados] = useState([]);
    
    const fechamaxima = () => {
        const FechaActual =  new Date();      
        const FechaMaxima = FechaActual.getFullYear()+'-'+("0"+(FechaActual.getMonth()+1)).slice(-2)+'-'+("0" + FechaActual.getDate()).slice(-2);
        return FechaMaxima;
    }
    return (    
        <BrowserRouter>
            <Banner />
        <Switch>
            <Route path={`/step1`}>
                <Step1 fechamaxima={fechamaxima} registro={registro} setRegistro={setRegistro} />
            </Route>
            <Route path={`/step2`}>
                <Step2 fechamaxima={fechamaxima} registro={registro} setRegistro={setRegistro} />
            </Route>
            <Route path={`/step3`}>
                <Step3 registro={registro} setRegistro={setRegistro} />    
            </Route>
            <Route path={`/step4`}>
                <Step4 registro={registro} />    
            </Route>
            <Route path={`/resumen`}>
                <Resumen registro={registro} setRegistro={setRegistro} />    
            </Route>
            <Redirect to='/step1' />
        </Switch>  
        </BrowserRouter>      
    )
}
