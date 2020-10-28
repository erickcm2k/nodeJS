var http = require("http"),
    fs = require("fs");   
    Operaciones = require("./module.js") 

var sum = Operaciones.suma;
var rest = Operaciones.resta;

http.createServer(function(req,res){
    
    fs.readFile("./index.html", function(err,html){

        var descripcion = sum(10,5).toString();

        console.log(descripcion)

        res.writeHead(200,{"Content-Type":"text/html"})  
        res.write(html);
        res.end();
    });

}).listen(8080);