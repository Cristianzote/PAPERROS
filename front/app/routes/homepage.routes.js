import { Router } from "express";

const home = Router();

home.get("/", (req, res)=>{
    res.render("inicio", {
        "titulo":"Paperros", "activo":1
    });
});
home.get("/Acerca", (req, res)=>{
    res.render("acerca", {
        "titulo":"Paperros","activo":2
    });
});
home.get("/Servicios", (req, res)=>{
    res.render("servicios", {
        "titulo":"Paperros","activo":3
    });
});
home.get("/Paseadores", (req, res)=>{
    res.render("paseadores", {
        "titulo":"Paperros","activo":4
    });
});
home.get("/Contactanos", (req, res)=>{
    res.render("contactanos", {
        "titulo":"Paperros","activo":5
        });
});
home.get("/Ingresa", (req, res)=>{
    res.render("ingresa", {
        "titulo":"Paperros","activo":6
        });
});
home.get("/Registro", (req, res)=>{
    res.render("registro", {
        "titulo":"Paperros","activo":7
        });
});

export default home;