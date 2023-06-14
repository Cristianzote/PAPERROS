import { Router } from "express";

const home = Router();

home.get("/", (req, res)=>{
    res.render("homeViews/inicio", {
        "titulo":"Paperros", "activo":1
    });
});
home.get("/Acerca", (req, res)=>{
    res.render("homeViews/acerca", {
        "titulo":"Paperros","activo":2
    });
});
home.get("/Servicios", (req, res)=>{
    res.render("homeViews/servicios", {
        "titulo":"Paperros","activo":3
    });
});
home.get("/Paseadores", (req, res)=>{
    res.render("homeViews/paseadores", {
        "titulo":"Paperros","activo":4
    });
});
home.get("/Contactanos", (req, res)=>{
    res.render("homeViews/contactanos", {
        "titulo":"Paperros","activo":5
        });
});
home.get("/Ingresa", (req, res)=>{
    res.render("homeViews/ingresa", {
        "titulo":"Paperros","activo":6, "google": process.env.GOOGLE_LOGIN
        });
});
home.get("/Registro", (req, res)=>{
    res.render("homeViews/registro", {
        "titulo":"Paperros","activo":7
        });
});

export default home;