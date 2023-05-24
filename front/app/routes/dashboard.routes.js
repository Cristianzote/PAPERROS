import {Router} from "express";
import cookieparser from "cookie-parser";
import jwt from "jsonwebtoken";
import 'node-fetch';

const dash = Router();

dash.get("/", (req, res)=>{
    if(req.cookies.token){
        try{
            const token = jwt.verify(
                req.cookies.token,
                process.env.SECRET_KEY
                )
                let nombre = token.nombre;
                let foto = token.foto;
                
                res.render("dashboard",{
                "nombre": nombre,
                "foto": foto,
                "mnu":0

            });
        } catch (error){
            res.redirect("/login")
        }
    }else{
        res.redirect("/login")
    }
})

dash.get("/salir", (req, res)=>{
    res.clearCookie("token");
    res.redirect("/v1")
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

                /*let ruta = "http://localhost:3001/api/getUsers";
                let info;
                const result = await fetch(ruta)
                .then(resp => resp.json())
                .then(data =>{
                    info = data
                })

                console.log(info);*/
                res.render("dashboard",{
                "nombre": nombre,
                "foto": foto,
                "mnu":2
            });
        } catch (error){
            res.redirect("/login")
        }
    }else{
        res.redirect("/login")
    }
});

export default dash;