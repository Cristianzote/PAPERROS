import { Router } from "express";

const home = Router();

home.get("/", (req, res)=>{
    res.render("home", {
        "titulo":"Inicio", "activo":1
    });
});
home.get("/contacto", (req, res)=>{
    res.render("contacto", {
        "titulo":"Contacto","activo":2
    });
});
home.get("/preguntas", (req, res)=>{
    res.render("preguntas", {
        "titulo":"preguntas","activo":3
    });
});
home.get("/login", (req, res)=>{
    res.render("login", {
        "titulo":"Login","activo":4
        });
});
home.get("/register", (req, res)=>{
    res.render("register", {
        "titulo":"Register","activo":5
        });
});

export default home;