const express = require('express')
const bodyParser = require('body-parser')
var path = require("path");
var QRCode = require('qrcode');
const { type } = require('os');

const app = express()

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, './public')));

app.post('/generate', (req, res) => {
    var rec_url = String(req.query.url);
    console.log(req.params['url'])
    QRCode.toString("google.com", {type:'svg'}, (err, qr_str) => {
        if (err) {
            console.clear()
            console.log(err)
        }
        console.clear()
        console.log(qr_str)
        res.send(qr_str)
    })
})

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, './public/index.html'));
});

app.listen(8091)

