const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const upload = multer();
const app = express();
const port = '8080';

// ejs Embedded JavaScript Template
app.engine('html', require('ejs').renderFile);
app.set('views', __dirname + '/views');
app.use(express.static('src'));

// body-parser : request body encoding, application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended:false}));
// parsing application/json
app.use(bodyParser.json());

// parsing multipart/form-data
app.use(upload.array());

app.get('/', (req, res) => {
    res.render('index.html');
});

app.get('/get/cats', (req, res) => {
    const cats = {
        sanji: {
            name: 'sanji',
            age: 1
        }
    };
    console.log("params: ", req.params);
    console.log("query: ", req.query);
    console.log("body: ", req.body);
    console.log("headers: ", req.headers);

    if (req.query.name) {
        res.json(cats[req.query.name]);
    } else {
        res.end('cats!');
    }
});

app.post('/post/json', (req, res) => {
    console.log(req.body);
    res.end('cats!');
});

app.listen(port, (err) => {
    console.log('connect : ', port);

    if (err) {
        return console.log('Error : ', err);
    }
});