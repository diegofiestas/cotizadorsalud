
const validators1 = (registro, setRegistro) => {
    let errors = {}
    let numeros =  /[^0-9]/g;
        
    //Tipo de Documento
    if(!registro.tipo_doc){
        errors.tipo_doc = "Tipo de Documento requerido";
    }   

    //Numero de Documento
    if(registro.num_doc){
        registro.num_doc = registro.num_doc.replace(numeros,""); //Sólo permitimos numeros
        setRegistro({...registro, "num_doc" : registro.num_doc});
        if(registro.tipo_doc === "CE"){
                if(registro.num_doc.length !== 12 ) {errors.num_doc = "Carnet de Extranjeria debe tener 12 dígitos";}
        } else if(registro.tipo_doc === "DNI"){
                if(registro.num_doc.length !== 8 ) {errors.num_doc = "DNI debe tener 8 dígitos";}
        } else {
                    errors.tipo_doc = "Tipo de Documento requerido";
        }
    } else {
        errors.num_doc = "Numero de documento requerido";
    }

    //Fecha de Nacimiento
    if(!registro.fecha_nacimiento){
        errors.fecha_nacimiento = "Fecha de Nacimiento requerida";
    }

    //Celular
    if(registro.cel){
        registro.cel = registro.cel.replace(numeros,""); //Sólo permitimos numeros
        setRegistro({...registro, "cel" : registro.cel});
        if(registro.cel.length !== 9){
            errors.cel = "Ingresa Celular válido (9 digitos)";
        }
    } else {
        errors.cel = "Celular requerido";
    }

    return errors;
}

const validators2 = (registro, setRegistro) => {
    
    let errors = {}
    let texto =  /[^a-z -]/gi;
    let numeros =  /[^0-9]/g;

    //Tipo de Documento
    if(!registro.tipo_doc){
        errors.tipo_doc = "Tipo de Documento requerido";
    }   

    //Numero de Documento
    if(registro.num_doc){
        registro.num_doc = registro.num_doc.replace(numeros,""); //Sólo permitimos numeros
        setRegistro({...registro, "num_doc" : registro.num_doc});
        if(registro.tipo_doc === "CE"){
                if(registro.num_doc.length !== 12 ) {errors.num_doc = "Carnet de Extranjeria debe tener 12 dígitos";}
        } else if(registro.tipo_doc === "DNI"){
                if(registro.num_doc.length !== 8 ) {errors.num_doc = "DNI debe tener 8 dígitos";}
        } else {
                    errors.tipo_doc = "Tipo de Documento requerido";
        }
    } else {
        errors.num_doc = "Numero de documento requerido";
    }

    //Fecha de Nacimiento
    if(!registro.fecha_nacimiento){
        errors.fecha_nacimiento = "Fecha de Nacimiento requerida";
    }

    //Nombres
    if(registro.nombres){
        registro.nombres = registro.nombres.replace(texto,""); // Solo aceptamos letras y espacios
        setRegistro({...registro, "nombres" : registro.nombres});
        if(registro.nombres.length < 2){
            errors.nombres = "Ingresa Nombre válido";
        }
    } else {
        errors.nombres = "Nombre requerido";
    }

    //Paterno
    if(registro.paterno){
        registro.paterno = registro.paterno.replace(texto,""); // Solo aceptamos letras y espacios
        setRegistro({...registro, "paterno" : registro.paterno});
        if(registro.paterno.length < 2){
            errors.paterno = "Ingresa Apellido Paterno válido";
        }
    } else {
        errors.paterno = "Apellido Paterno requerido";
    }

    //Materno
    if(registro.materno){
        registro.materno = registro.materno.replace(texto,""); // Solo aceptamos letras y espacios
        setRegistro({...registro, "materno" : registro.materno});
        if(registro.materno.length < 2){
            errors.materno = "Ingresa Apellido Materno válido";
        }
    } else {
        errors.materno = "Apellido Materno requerido";
    }

    return errors;
}

export {
    validators1,
    validators2
}