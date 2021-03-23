const express = require('express');
const { dirname } = require('path');
const path = require('path');
const server = express();


server.use('/public',express.static(path.join(__dirname,'static')));
server.use('/home',express.static(path.join(__dirname,'./')));
server.get('/',(req,res)=>{
    res.writeHead(200,{'Content-type':'text/html'});
    res.write('Welcome home nothing served youngman');
    res.end();
});

server.get('/innerHtml',(req,res)=>{
     res.sendFile(path.join(__dirname,'static','index.html'));
});

server.get('/outHtml',(req,res)=>{
    res.sendFile(path.join(__dirname,'./','index.html'));
});

server.get('/login/:name',(req,res)=>{
    res.send(req.params.name + ' Logged In');
    console.log(req.headers);
    res.end();
});

server.listen(3000);