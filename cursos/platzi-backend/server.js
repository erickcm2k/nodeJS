const http = require('http');
const server = http.createServer();

server.on('request', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-type', 'text/plain');

    res.end('Succeed!')
})

server.listen(8080);
console.log('Escuchando en http://localhost/8000');