import {Router} from "express";
import cookieparser from "cookie-parser";
import jwt from "jsonwebtoken";
<<<<<<< Updated upstream
import 'node-fetch';

const dash = Router();

dash.get("/", (req, res)=>{
=======
import message from '../config/message.js';
import fetch from 'node-fetch';

const dash = Router();

dash.get("/", async(req, res)=>{
>>>>>>> Stashed changes
    if(req.cookies.token){
        try{
            const token = jwt.verify(
                req.cookies.token,
                process.env.SECRET_KEY
                )
<<<<<<< Updated upstream
                let nombre = token.nombre;
                let foto = token.foto;
                
<<<<<<< Updated upstream
                res.render("dashboard",{
                "nombre": nombre,
                "foto": foto,
                "mnu":0

=======
=======
                // Ejemplo de los datos que se pueden recolectar
                let nombre = token.nombre;
                let foto = token.foto;
                let email = token.email;
                let id = token.id;
                
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
>>>>>>> Stashed changes
            });
        } catch (error){
            res.redirect("/login")
        }
    }else{
        res.redirect("/login")
    }
})

=======
            });
        } catch (error){
            res.redirect("/Ingresa")
            message(error, "danger")
        }
    }else{
        res.redirect("/Ingresa")
    }
})

dash.get("/CrearPaseo", (req, res)=>{
    res.render("dashViews/CrearPaseo", {
    });
});

dash.get("/RutasPaseadores", (req, res)=>{
    res.render("dashViews/RutasPaseadores", {
    });
});

>>>>>>> Stashed changes
dash.get("/MisPerros", (req, res)=>{
    res.render("dashViews/MisPerros", {
    });
});

<<<<<<< Updated upstream
dash.get("/salir", (req, res)=>{
    res.clearCookie("token");
    res.redirect("/v1")
=======
dash.get("/AñadirPerro", (req, res)=>{
    res.render("dashViews/AñadirPerro", {
    });
});


dash.get("/Perfil", (req, res)=>{
    res.render("dashViews/Perfil", {
    });
});

dash.get("/salir", (req, res)=>{
    res.clearCookie("token");
    res.redirect("/")
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream

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
=======
                //let email = token.email;
                //let id = token.id;
                
                /*let ruta = "http://localhost:3001/api/getUsers";
                const result = await fetch(ruta);
                const data = await result.json();*/

>>>>>>> Stashed changes
                console.log(data);
                console.log(nombre);
                console.log(foto);
                //console.log(email);
                //console.log(id);

                console.log(info);
                res.render("dashViews/dashboard",{
<<<<<<< Updated upstream
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
=======
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
>>>>>>> Stashed changes
    }
});

export default dash;