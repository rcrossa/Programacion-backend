const express = require('express')
let product = require('./product');
const app = express()
const port = 8080


app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`La app esta escuchando en el puerto ${port}`)
});

app.get('/api/products', product.list);
app.get('/api/productsRandom', product.list1);
