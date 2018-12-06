var express = require("express");
var bodyParser = require('body-parser');
var path = require("path");

var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname + 'public')));
app.set('view engine', 'html');

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/view/index.html')
});

app.listen(5000, function (req, res) {
    console.log("Server launched on port 5000");
});
