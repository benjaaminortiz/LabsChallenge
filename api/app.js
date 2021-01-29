const express = require('express');
const app = express();



app.get('/', (req, res) => {
    const q = req.query.q;
        fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${q}`
         ).then(data => {
             data.json()
         }).then(datos =>{
             res.send(datos)
         })
})