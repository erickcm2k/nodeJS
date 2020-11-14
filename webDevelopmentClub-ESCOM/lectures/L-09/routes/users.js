const { Router } = require('express');
const router = Router();

const User = require("../models/user").User;

router.get("/",function(req,res){

    res.render("users/home");

});

router.post("/register", function(req,res){ //Metodo POST para parametros que se invocara con la directiva users
    
    var user = new User({
        Nombre: req.body.Nombre, 
        Password: req.body.Password,
        Email: req.body.Email
    });

    //function(error,obj,numero)
    user.save(function(err,obj){
        if(err != null){     
            console.log(String(err));
            res.redirect('/new_user');     
        }else{
            console.log("Usuario se a registrado");
            console.log(obj);
            res.redirect('/'); //Redirecciona como HTTP
        }
    });

});

//Login de usuarios
router.post("/sign", function(req,res){  //Metodo Para desplegar la base

    console.log("Verificando Entrada de Usuario");
    //Query, Fields, Callback
    User.find({Email: req.body.Email, Password: req.body.Password},function(err,doc){

        if(Object.entries(doc).length === 0){

            console.log("El usuario que intento ingresar no estaba registrado");
            res.redirect("/login");

        } else{
            console.log("Ingreso al sistema el usuario: " + doc[0].Email);
            console.log("Creando sesión");
            req.session.user_id = doc[0]._id; 
            console.log("Sesión creada:"+req.session.user_id);
            res.redirect("/users"); 
        }
    }); //Devuelve una arreglo de documentos
});

//Verificación de sesión
router.get("/logout", function(req,res){

    req.session.destroy();
    res.redirect("/");
});

module.exports = router;