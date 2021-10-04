
const express = require ('express');
const bodyParser = require ('body-parser');
const api = require('./src/api');
const app= express();
const PORT= 5000;

app.use(bodyParser.json());
app.use('/api/v1', api);

// ya tenemos la alicacion running in our server 
app.listen(PORT, ()=> console.log('App listening on port ${PORT}'))