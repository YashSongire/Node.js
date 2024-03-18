const  http = require('http');

const { readFileSync} = require('fs');

const htmlpage = readFileSync('./index.html')

http.createServer((req,res) =>{ 
    const url = req.url;
    if(url==='/'){
        res.writeHead(200,{'content-type' : 'text/html'});
        res.write(htmlpage);
        res.end();
    }
    else if(url==='/contact') {
        res.writeHead(200,{'content-type' : 'text/html'});
        res.write(`<h1>Contact</h1>`);
        res.end();
    }
    else {
        res.writeHead(404,{'content-type' : 'text/html'});
        res.write(`<h1>Page Not Found</h1>
        <a href='/'>Go Back</a>`);
        res.end();
    }
})
.listen(5000)