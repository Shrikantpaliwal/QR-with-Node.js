const express = require('express')
const bodyParser = require('body-parser')
var path = require("path");
var QRCode = require('qrcode')

const app = express()

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname,'./public')));



app.get('/', function (req, res){
    res.sendFile(path.join(__dirname,'./public/index.html'));
});

app.listen(8091)

