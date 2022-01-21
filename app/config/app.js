const express = require("express");
const app = express()

const bodyParser = require("body-parser");
const cors = require("cors");
const consign = require("consign")

app.set('view engine', 'ejs');
app.set('views', './app/views');

app.use(express.static('./app/public'))

app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));

const routes = require("../routes")(app);
const login = require("../routes/login")(app);
const cadastro = require("../routes/cadastro")(app);

module.exports = app;