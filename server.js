const express = require('express')
const app = express();
const routes = require('./routes/routes')
const port = 8080;

// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
app.use('/api', routes);
// app.use(express.static('public'));

app.listen(port, () => {
    console.log(`La app esta escuchando en el puerto ${port}`)
});
