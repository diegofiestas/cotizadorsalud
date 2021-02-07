
const obtenerusuario = (metodo) => {
    const url = 'https://randomuser.me/api';
    const requestOptions = {
        method: metodo,
        mode: 'cors',
        headers: { 'Content-Type': 'application/json' }
    };

    return new Promise((resolve, reject) => {
        fetch(url, requestOptions)
            .then((response) => {
                resolve(response.json())
            }).catch((error) => {
                reject(error);
            });
    })
}

const registrarusuario = (id, data) => {
    const url = `https://randomuser.me/api`;
    const requestOptions = {
        method: 'POST',
        mode: 'cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    };

    return new Promise((resolve, reject) => {
        fetch(url, requestOptions)
            .then((response) => {
                resolve(response.json())
            }).catch((error) => {
                reject(error);
            });
    })
}

const eliminarusuario = (id, metodo) => {
    const url = `https://randomuser.me/api/${id}`;
    const requestOptions = {
        method: metodo,
        mode: 'cors',
        headers: { 'Content-Type': 'application/json' },        
    };

    return new Promise((resolve, reject) => {
        fetch(url, requestOptions)
            .then((response) => {
                resolve(response.json())
            }).catch((error) => {
                reject(error);
            });
    })
}

export {
    obtenerusuario,
    registrarusuario,
    eliminarusuario
}
