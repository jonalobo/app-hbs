const express = require('express')
require('dotenv').config()

const PORT = process.env.PORT 

const app = express()

const hbs = require('hbs');

app.set('view engine', 'hbs');
app.use(express.static('public'))

hbs.registerPartials(__dirname + '/views/partials', function (err) {});

app.get('/', (req,res)=>{
    res.render('index')
})


app.listen(PORT,()=>{
    console.log(`Servidor escuchando en el puerto ${PORT}`)
})



