require('dotenv').config();
const express = require("express");
const logger = require("morgan");
const fs = require("fs");
const path = require("path");
const compression = require("compression");

const db = require("./database/index.js");
const appRoutes = require("./routes");

let accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), {flags: 'a'});

const app = express();
app.use(express.static(path.join(__dirname, '..', '/apidoc')));

app.use(compression());
app.use(logger('tiny'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/api/v1', appRoutes);
app.get('/docs', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'apidoc', 'index.html'))
});

db.sync({force: false}).then(r => {
    const port = process.env.PORT || 8080;
    app.listen(port, () => {
        console.info('Server is up and running on port ', port);
    });
});

module.exports = app;





