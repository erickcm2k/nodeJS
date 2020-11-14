/*Configuración de variables de entorno, puertos, recursos*/

require('dotenv').config();

/******************************************/

/*Importación de modulos (Propios o Externos)*/

const bodyParser = require("body-parser"); //Importamos la libreria Body Parser para leer parametros
const express = require("express") //Importamos el middleware de express.js (node_modules)
var session = require("express-session");
const app = express(); //Indicamos que nuestra app funcionara bajo Express
const main_port = process.env.MAIN_PORT;

/******************************************/

/*Configuración de views*/

//Especificamos que utilizaremos un motor de vistas en este caso PUG
app.set('views', './views'); 
app.set('view engine', 'pug');

//Se definen los recursos estaticos
app.use(express.static('public'));

//Se declara que la App podra extraer parametros
app.use(bodyParser.json()) //Formato JSON
app.use(bodyParser.urlencoded({extended: true}))//Encoded
app.use(session({secret: "f156e7995d521f30e6c59a3d6c75e1e5"})); //Palabra secreta para sesiones
//Oscar en MD5 = f156e7995d521f30e6c59a3d6c75e1e5
/******************************************/

/*Routing*/

app.use("/", require("./routes/index"));
app.use("/users", require("./routes/users"));
app.use("/users", require("./deployments/session"));

app.use(function(req, res){
    res.status(404);
    res.render("404");
 });

/******************************************/

/*Lanzamiento de servidor y canales*/

app.listen(main_port);

/******************************************/