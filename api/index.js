const express = require ('express');
const search = require ('./src/routes.js');
const app = express ();
const cors = require ('cors');


app.use(express.json())
app.use(cors())

app.use('/api', search)

app.listen (3001, () => {
    console.log('The app is running on port 3001')
})
