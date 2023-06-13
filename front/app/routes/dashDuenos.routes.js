import {Router} from "express";
import cookieparser from "cookie-parser";
import jwt from "jsonwebtoken";
import message from '../config/message.js';
import fetch from 'node-fetch';

const dashDuenos = Router();

dashDuenos.get("/", async(req, res)=>{
    if(req.cookies.token){
        try{
            const token = jwt.verify(
                req.cookies.token,
                process.env.SECRET_KEY
                )
                // Datos de las cookies
                let nombre = token.nombre;
                let foto = token.foto;
                let email = token.email;
                let id = token.id;
                
                //console.log(data);
                console.log("Nombre : " + nombre);
                console.log("Foto: " + foto);
                console.log("Email: " + email);
                console.log("ID: " + id);

                res.render("dashViews/dashboard",{
                "nombre": nombre,
                "foto": foto,
                "mnu":0

            });
        } catch (error){
            res.redirect("/Ingresa")
            message(error, "danger")
        }
    }else{
        res.redirect("/Ingresa")
    }
})

dashDuenos.get("/salir", (req, res)=>{
    res.clearCookie("token");
    res.redirect("/")
})

dashDuenos.get("/users", async (req, res)=>{
    if(req.cookies.token){
        try{
            const token = jwt.verify(
                req.cookies.token,
                process.env.SECRET_KEY
                )
                let nombre = token.nombre;
                let foto = token.foto;
                let email = token.email;
                let id = token.id;
                
                let ruta = process.env.API;
                const result = await fetch(ruta);
                const data = await result.json();

                //console.log(data);
                console.log("Nombre: " + nombre);
                console.log("Foto: " + foto);
                console.log("Email: " + email);
                console.log("ID: " + id);
                res.render("dashViews/dashboard",{
                "nombre": nombre,
                "foto": foto,
                "mnu":2,
                "usuario": data 
            });
        } catch (error){
            res.redirect("/Ingresa")
            message(error, "danger")
            console.log("Error: " + error)
        }
    }else{
        res.redirect("/Ingresa")
    }
});

dash.post("/save",async (req, res)=>{
    const name = req.body.name;
    
    try {
        let ruta = process.env.API + "users/";
        let metodo = "post";
        let datos = {
            nombre : name 
        };
        if (req.body.id){
            const id = req.body.id;
            metodo = "put";
            datos = {
                id:id,
                name:name
            }
        }
        const option = {
            method : metodo,
            body : JSON.stringify(datos),
            headers : {
                'Content-Type':'application/json'
            }
        }


        const result = await fetch(url, option)
        .then(response=>response.json())
        .then(data=>{
            console.log(data);
            if (data[0].affectedRows>0){
                console.log("Los datos fueron insertados");
            }else{
                console.log("Labase datos no inserto");
            }
        })
        .then(error=>{console.log("Ha habido un error: "+ error);})
    } catch (error) {
        console.log("Informacion no insertada: "+error);
    }
    
    res.redirect("/v1/dueno/users")
})
dash.get("/usuario-edit", (req, res)=>{
    if(req.cookies.eib_per){
        try {
            const data = {
                id : req.query.id,
                nombre : req.query.nombre
            }
            
            const token = jwt.verify(
                req.cookies.eib_per, 
                process.env.SECRET_KEY
                )
            let nombre = token.nombre;
            let foto = token.foto;
            res.render("dashboard",{
                "nombre": nombre,
                "foto": foto,
                "mnu" : 3,
                "data" : data
            });
        }catch(error){
            console.log("Token no valido");
        }

    }else{
        res.redirect("/Ingrese")
    }
})
dash.get("/borrar", async (req, res)=>{
    const id = req.query.id;
    const url = process.env.API + "users/" + id;
    const option = {
        method : "delete",
        headers : {
            'Content-Type':'application/json'
        }
    }

    const result = await fetch(url, option)
    .then(response=>response.json())
    .then(data=>{
        if(data.affectedRows > 0){
            console.log("registro borrado");
        }
    })
    res.redirect("/v1/dueno/users")
})

export default dashDuenos;