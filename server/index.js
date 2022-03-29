const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

const PORT = 3000;

app.get('/', (req, res) => {
    res.send('App homepage works');
})

app.listen(PORT, () => console.log('App listening on port ' + PORT))