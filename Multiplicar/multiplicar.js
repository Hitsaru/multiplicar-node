const fs = require('fs');
const colors = require('colors');


let listarTabla = (base, limite = 10) => {

    console.log('===================='.green);
    console.log(`Tabla del ${base}`.green);
    console.log('===================='.green);

    for (i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base*i}`);
    }

}

let crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un número`)
            return;
        }

        let data1 = '';

        for (i = 1; i <= limite; i++) {
            data1 += `${base} * ${i} = ${base*i} \n`;
        }

        const data = new Uint8Array(Buffer.from(data1));
        fs.writeFile(`Tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
            if (err) {
                reject(err)
            } else {
                resolve(`tabla-${base}-al-${limite}.txt`)
            }

        });

    });

}

module.exports = {
    crearArchivo,
    listarTabla
}