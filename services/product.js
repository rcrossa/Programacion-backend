const fs = require('fs');
exports.list = function (req, res, next) {
    fs.readFile('./data/products.json', 'utf8', (error, contenido) => {
        if (error) {
            console.log(error)
        } else {
            let datos = JSON.parse(contenido);
            res.send(datos);
        }
    })

}

exports.list1 = function (req, res, next) {
    fs.readFile('./data/products.json', 'utf8', (error, contenido) => {
        if (error) {
            console.log(error)
        } else {
            let datos = JSON.parse(contenido);
            let rand = Math.floor(Math.random() * datos.length)
            let rValue = datos[rand];
            res.send(rValue);
        }
    })

}