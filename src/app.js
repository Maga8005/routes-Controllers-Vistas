const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const path = require ('path');
const mainRouter = require('./routes/mainRoute');

app.use(express.static(path.join(__dirname, '../', '/public')));
app.set('view engine', 'ejs');
app.set('views', './src/views') //Se le dice la ruta de donde encontrar las vistas.

//app.get('/',(req,res)=>res.send('Página principal')); //Saber si rutas están ok. Imprime la string 'Página Principal'

app.use('/',mainRouter);
app.use('/detalle',mainRouter);

app.listen(port,() => console.log('Servidor Ok'));