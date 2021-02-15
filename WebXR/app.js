const express = require('express');
const app = express();
const crypto = require('crypto');
var tls = require('tls');
const path = require('path');
const https = require('https');
const fs = require('fs');

const options = {
key: fs.readFileSync('key.pem'),
cert: fs.readFileSync('cert.pem')
};



//app.use(express.static(__dirname + '/start/lecture2_1/'))
//app.use(express.static(__dirname + '/start/lecture3_1/'))
//app.use('/build/', express.static(path.join(__dirname, 'node_modules/three/build')));
//app.use('/jsm/', express.static(path.join(__dirname, 'node_modules/three/examples/jsm')));

/*
app.listen(3000, () =>
console.log('Visit http://127.0.0.1:3000')
);*/


//tls.createServer(options, function(req, res){
/*
    fs.readFile(__dirname + '/start/lecture3_1/', function(err, data){
            res.writeHead(200);
            res.write(data);
            res.end();
    
    });*/
//}).listen(3000);

var server = require('https').createServer(options, app);

//app.use(express.static(__dirname + '/start/lecture2_1/'))
app.use(express.static(__dirname + '/start/lecture3_1/'))
//app.use('/build/', express.static(path.join(__dirname, 'node_modules/three/build')));
//app.use('/jsm/', express.static(path.join(__dirname, 'node_modules/three/examples/jsm')));


server.listen(3000, () =>
console.log('Visit http://127.0.0.1:3000')
);