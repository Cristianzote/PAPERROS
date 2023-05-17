import {Router} from "express";
import cookieparser from "cookie-parser";
import jwt from "jsonwebtoken";

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
                "foto": foto
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

export default dash;