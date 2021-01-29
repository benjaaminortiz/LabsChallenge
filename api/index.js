var express = require('express');
var app = express();

server.get('/', (req, res, next) => {
	const q= req.query.q; 
	fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${q}&offset=0&limit=50`).then (data=>data.json()).then (response=>res.send(response))
});


app.listen(3001);
