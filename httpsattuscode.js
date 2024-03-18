const  http = require('http');

http.createServer((req,res) =>{ 
    const url = req.url;
    if(url==='/'){
        res.writeHead(200,{'content-type' : 'text/html'});
        res.write(`<h1>Welocme to HomePage</h1>`);
        res.end();
    }
    else if(url='contact') {
        res.writeHead(200,{'content-type' : 'text/html'});
        res.write(`<h1>Contact</h1>`);
        res.end();
    }
    else {
        res.writeHead(404,{'content-type' : 'text/html'});
        res.write(`<h1>Page Not Found</h1>`);
        res.end();
    }
})