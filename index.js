var express = require("express");
var bodyParser = require('body-parser');
var path = require("path");

var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname + '/public')));

app.get('/', function (req, res) {

});

app.listen(5000, "51.75.91.104", function (req, res) {
    console.log("Server launched on 51.75.91.104:5000");
});
