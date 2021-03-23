const http = require('http');
const fs = require('fs');

const indexHtml = fs.createReadStream('./static/index.html');
const server = http.createServer((req,res)=>{
    if(req.url == '/'){
        res.writeHead(200,{'Content-type':'text/html'});
        indexHtml.pipe(res);
    }
    else {
        console.log(req.headers);
        res.end();
    }
});
server.listen(3000);