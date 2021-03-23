const express = require('express');
const server = express();
const bodyParser = require('body-parser');
const path = require('path');


server.use('/public',express.static(path.join(__dirname,'static')));
server.use(bodyParser.json());

server.get('/',(req,res)=>
{
    res.sendFile(path.join(__dirname,'static','index.html'));
});

server.post('/',(req,res)=>{
    res.json({success:false});
    console.log('successful');
});

server.listen(3000);