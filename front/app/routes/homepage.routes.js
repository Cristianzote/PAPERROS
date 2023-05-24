import { Router } from "express";

const home = Router();

home.get("/", (req, res)=>{
    res.render("inicio", {
        "titulo":"PAPERROS", "activo":1
    });
});
home.get("/Acerca", (req, res)=>{
    res.render("acerca", {
        "titulo":"PAPERROS","activo":2
    });
});
home.get("/Servicios", (req, res)=>{
    res.render("servicios", {
        "titulo":"PAPERROS","activo":3
    });
});
home.get("/Paseadores", (req, res)=>{
    res.render("paseadores", {
        "titulo":"PAPERROS","activo":4
    });
});
home.get("/Contactanos", (req, res)=>{
    res.render("contactanos", {
        "titulo":"PAPERROS","activo":5
        });
});
home.get("/Ingresa", (req, res)=>{
    res.render("ingresa", {
        "titulo":"PAPERROS","activo":6
        });
});
home.get("/Registro", (req, res)=>{
    res.render("registro", {
        "titulo":"PAPERROS","activo":7
        });
});

export default home;