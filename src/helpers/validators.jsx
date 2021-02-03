export const letras = (e) => {
    let texto =  /[^a-z -]/gi;
    e.target.value = e.target.value.replace(texto,"");
}

export const numeros = (e) => {
    let numeros =  /[^0-9]/g;
    e.target.value = e.target.value.replace(numeros,"");
}

export const validadni = (e, setDni, tipodoc) => {
    if(tipodoc === "CE"){
        if(e.target.value.length === 12 ) { setDni(''); }
        else { setDni("Dni debe tener 12 caracteres");}
    } else {
        if(e.target.value.length === 8 ) { setDni(''); }
        else { setDni("Dni debe tener 8 caracteres");}
    }
}

export const validacelular = (e, setCelular) => {
    if(e.target.value.length === 9) { setCelular('') }
    else { setCelular("Ingresa un numero válido de celular")}
}