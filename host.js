const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Welcome All To Node.JS');
    } else if (req.url === '/about') {
        res.end('About Company');
    } else {
        res.end(`
            <h1>Sorry Wrong Path</h1>
            <a href="/">Home Page</a>`);
    }
});

server.listen(5000);
