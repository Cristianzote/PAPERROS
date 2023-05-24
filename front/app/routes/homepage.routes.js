import { Router } from "express";
import 'node-fetch';

const home = Router();

home.get("/", (req, res)=>{
    res.render("home", {
        "titulo":"Inicio", "activo":1
    });
});
home.get("/contacto", (req, res)=>{
    /*let ruta = "http://localhost:3000/api/getUsers";
    let info = {};

    const result = fetch(ruta)
    .then(res => res.json())
    .then(data => {
        info = data;
    })

    console.log(info);*/
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

