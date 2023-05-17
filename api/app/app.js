import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
import enviroments from "./config/enviroments";
/*import { LoginRouter } from "./routes/login";
import passport from "passport";*/
import AllRoutes from "./routes/users.js"
import res from "express/lib/response";

const app = express();

//settings
app.set("PORT", process.env.PORT || 1000);

//middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));
//app.use(passport.initiazlize());

//Rutas
app.get('/', (req, res) => {
    res.send({ message: 'API de HelpMe' })
});

//app.use("/auth", loginRouter);

app.use('/api', AllRoutes);


export default app;