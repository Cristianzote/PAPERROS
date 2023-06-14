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
                
<<<<<<< Updated upstream
                res.render("dashboard",{
                "nombre": nombre,
                "foto": foto,
                "mnu":0

=======
                let ruta = process.env.API + "getUsers";
                const result = await fetch(ruta);
                const data = await result.json();

                console.log(data);
                console.log(nombre);
                console.log(foto);
                console.log(email);
                console.log(id);

                res.render("dashViews/MisPaseos",{
                "nombre": nombre,
                "foto": foto,
                //Cambiar esto a 0 luego
                "mnu":2,
                "usuario": data
>>>>>>> Stashed changes
            });
        } catch (error){
            res.redirect("/login")
        }
    }else{
        res.redirect("/login")
    }
})

dash.get("/MisPerros", (req, res)=>{
    res.render("dashViews/MisPerros", {
    });
});

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

<<<<<<< Updated upstream
                console.log(info);*/
                res.render("dashboard",{
=======
                console.log(data);
                console.log(nombre);
                console.log(foto);
                //console.log(email);
                //console.log(id);

                console.log(info);
                res.render("dashViews/dashboard",{
>>>>>>> Stashed changes
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