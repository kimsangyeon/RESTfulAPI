const express = require('express');

const app = express();
const port = '8080';

// ejs Embedded JavaScript Template
app.engine('html', require('ejs').renderFile);
app.set('views', __dirname + '/views');

app.get('/', (req, res) => {
    res.render('index.html');
});

app.listen(port, (err) => {
    console.log('connect : ', port);

    if (err) {
        return console.log('Error : ', err);
    }
});