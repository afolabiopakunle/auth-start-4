const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

const api = require('./routes/api');

const PORT = 3000;

app.use('/api', api);

app.get('/', (req, res) => {
    res.send('App homepage works');
})

app.listen(PORT, () => console.log('App listening on port ' + PORT))