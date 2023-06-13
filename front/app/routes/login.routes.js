import { Router } from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
dotenv.config();

const loginRouter = Router();

loginRouter.get("/google", (req, res) => {
    // console.log(req.user);
    var data = {
        "nombre" : req.user.displayName,
        "id" : req.user.id,
        "email": req.user.emails[0].value,
        "foto": req.user.photos[0].value
    };
    let token = jwt.sign(data, process.env.SECRET_KEY,{ "expiresIn": process.env.EXPIRE_TOKEN});

    //TODO: Arreglar seed del token
    //let timeExpireCookie = 1000 * 60 * process.env.EXPIRE_COOKIE;

    res.cookie("token", token/*, {"maxAge": timeExpireCookie }*/);

    res.redirect("/v1/dueno/");
});

dashPaseadores.get("/salir", (req, res)=>{
    res.clearCookie("token");
    res.redirect("/")
})


export default loginRouter;