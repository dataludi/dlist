var http    = require('http');
var express = require('express');
var app     = express();
var path    = require('path');
var reload  = require('reload');

var fs = require('fs');
var root = __dirname;

app.set('port', 8080);
app.set('reload', 8089);

app.use('/', express.static(root + "/web/"));
app.use('/images/', express.static(root + "/web/asset/image/"));

app.get('/', function (req, res) {
    res.sendFile(path.join(root, '/index.html'));
});

var server = http.createServer(app);

reload(app, { port: app.get('reload') }).then(function (reloadReturned) {
    server.listen(app.get('port'), function () {
        console.log("Dataludi DListView v1.0 Test Server Running on port " + app.get('port'));
    });
}).catch(function (err) {
    console.error('Reload could not start, could not start server/sample app', err)
})

  
