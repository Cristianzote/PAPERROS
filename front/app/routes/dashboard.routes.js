import {Router} from "express";
import cookieparser from "cookie-parser";
import jwt from "jsonwebtoken";
import message from '../config/message.js';
import fetch from 'node-fetch';

const dash = Router();

dash.get("/", async(req, res)=>{
    if(req.cookies.token){
        try{
            const token = jwt.verify(
                req.cookies.token,
                process.env.SECRET_KEY
                )
                // Ejemplo de los datos que se pueden recolectar
                let nombre = token.nombre;
                let foto = token.foto;
                let email = token.email;
                let id = token.id;
                
                let ruta = "http://localhost:3001/api/getUsers";
                const result = await fetch(ruta);
                const data = await result.json();

                console.log(data);
                console.log(nombre);
                console.log(foto);
                console.log(email);
                console.log(id);

                res.render("dashboard",{
                "nombre": nombre,
                "foto": foto,
                //Cambiar esto a 0 luego
                "mnu":2,
                "usuario": data

            });
        } catch (error){
            res.redirect("/Ingresa")
            message(error, "danger")
        }
    }else{
        res.redirect("/Ingresa")
    }
})

dash.get("/salir", (req, res)=>{
    res.clearCookie("token");
    res.redirect("/")
})

dash.get("/users", async (req, res)=>{
    if(req.cookies.token){
        try{
            const token = jwt.verify(
                req.cookies.token,
                process.env.SECRET_KEY
                )
                let nombre = token.nombre;
                let foto = token.foto;
                //let email = token.email;
                //let id = token.id;
                
                /*let ruta = "http://localhost:3001/api/getUsers";
                const result = await fetch(ruta);
                const data = await result.json();*/

                console.log(data);
                console.log(nombre);
                console.log(foto);
                //console.log(email);
                //console.log(id);

                console.log(info);
                res.render("dashboard",{
                "nombre": nombre,
                "foto": foto,
                "mnu":2,
            });
        } catch (error){
            res.redirect("/Ingresa")
            message(error, "danger")
        }
    }else{
        res.redirect("/Ingresa")
    }
});

export default dash;