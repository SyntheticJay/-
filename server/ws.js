const path = require('path');
const express = require('express');
const app = express();
const http = require('http').createServer(app);
const { webserver } = require('../config.json');

app.use(express.static(path.join(__dirname, "html")));
app.engine('html', require('ejs').renderFile);
http.listen(webserver["ws-port"], () => console.log(`Started Webserver on port ${webserver["ws-port"]}!`));

exports.http = http;