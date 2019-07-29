const express = require('express');

const app = express();
const port = '8080';

app.get('/', (req, res) => {
    res.send('hello');
});

app.listen(port, (err) => {
    console.log('connect : ', port);

    if (err) {
        return console.log('Error : ', err);
    }
});