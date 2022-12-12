const { application } = require('express');
const express = require('express');
const router = express.Router();
const product = require('../services/product');
const multer = require('multer');
const bodyParse = require('body-parser');

/* Configuración de Multer */
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
        cb(null, `${Date.now()}-${file.originalname}`)
    }
})
const uploads = multer({ storage: storage })

/* ------------------------------------------------------ */


const productos = []
router.use(express.static('public'));
// routerProductos.use(express.urlencoded({ extended: true }));
router.use(bodyParse.urlencoded({ extended: true }));
router.use(bodyParse.json());
// routerProductos.use(express.json());

router.get('/hola', (req, res) => {
    res.send('Hello World!')
})
// router.use('/form', (express.static(__dirname + 'public')))
router.use(express.static(('public')));
router.get('/form', (req, res) => {
    console.log(req.body);
    res.send(req.body);
})

router.post('/products/guardar', (req, res) => {
    let price = req.body.price;
    let title = req.body.title;
    productos.push(req.body);
    console.log(productos)
    for (const iterator of productos) {
        console.log(iterator)
    }
    res.json({
        mensaje: 'el titulo es ' + title + ' y el precio' + price
    });
});
router.get('/api/products', product.list);
router.get('/api/productsRandom', product.list1);

/*------------------- * multer------------------ */

// router.post('/guardar', uploads.single('miArchivo'), (req, res, next) => {
//     const file = req.file
//     if (!file) {
//         const error = new Error('Error subiendo el archivo')
//         error.httpStatusCode = 400
//         return next(error)
//     }
//     res.send(`¡Archivo <b>${file.originalname}</b> subido exitosamente!`)
// })

module.exports = router;