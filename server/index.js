const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

app.use(bodyParser.json());
const db = 'mongodb+srv://afolabi:8899fifafa@cluster0.bwrba.mongodb.net/eventsdb?retryWrites=true&w=majority';

mongoose.connect(db, (err) => err ? console.log(err) : console.log("connected to mongodb"));

const api = require('./routes/api');

const PORT = 3000;

app.use('/api', api);

app.get('/', (req, res) => {
    res.send('App homepage works');
})

app.listen(PORT, () => console.log('App listening on port ' + PORT))