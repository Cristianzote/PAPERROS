import {Router} from "express";
import cookieparser from "cookie-parser";
import jwt from "jsonwebtoken";
import message from '../config/message.js';
import fetch from 'node-fetch';

const dashPaseadores = Router();

dashPaseadores.get("/", async(req, res)=>{
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

dashPaseadores.get("/salir", (req, res)=>{
    res.clearCookie("token");
    res.redirect("/")
})

dashPaseadores.get("/users", async (req, res)=>{
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
                
                let ruta = process.env.API + "getUsers";
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

export default dashPaseadores;