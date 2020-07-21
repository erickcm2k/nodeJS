const http = require('http');
const server = http.createServer();

server.on('request', (req, res) => {
    if(req.method === 'POST' && req.url == '/echo') {
        let body = [];

        req
        .on('data', chunk => {
            body.push(chunk);
        })  
        .on('end', () => {
            res.writeHead(200, {'Content-Type': 'text/plain'});            
            body = Buffer.concat(body).toString();

            birthDayInfo = body.split(/[\-/]/);
            birtDay = birthDayInfo[2];                        
            res.end(birtDay);
        });
    } else {
        res.statusCode = 404;
        res.end()
    }
})

server.listen(8080);
console.log('Escuchando en http://localhost/8000');