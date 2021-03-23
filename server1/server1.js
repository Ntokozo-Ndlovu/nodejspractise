const http = require('http');
const fs = require('fs');


const server = http.createServer((req,res)=>{
    const readFile = fs.createReadStream('index1.html');
    res.writeHead(200,{'Content-type':'text/html'});
    readFile.pipe(res);
});

server.listen(3000);