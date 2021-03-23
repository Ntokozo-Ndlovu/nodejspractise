const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const server = express();

server.use(bodyParser.urlencoded({extended:false}));
server.use('/public',express.static(path.join(__dirname,'static')));
server.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'static','index.html'));
});

server.post('/',(req,res)=>{
    console.log(req.body);
    res.end();
});
server.listen(3000);