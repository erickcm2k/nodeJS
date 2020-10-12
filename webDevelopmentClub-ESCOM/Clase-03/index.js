const http = require("http");
const PORT = 3000;

const sayHello = (req, res) => {
  console.log("Successful request!");
  res.end("Hello world");
};

const server = http.createServer(sayHello);

server.listen(3000);
console.log('Listening on port localhost:3000');
