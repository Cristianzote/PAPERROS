//Importación de modulos
import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import cors from "cors";
import enviroments from "./config/enviroments";
import cookieParser from "cookie-parser";
import res from "express/lib/response";
import bodyParser from 'body-parser';
//Importación de rutas
import userRoutes from "./routes/users.routes.js";
//import dogRoutes from './routes/dogs.routes.js';
//Nota: Importar chats y paseos de la misma manera

//settings
const app = express();
app.set("PORT", process.env.PORT || 1000);

//middlewares
app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));
app.use(cookieParser());

//Rutas
app.get('/', (req, res) => {
    res.send({ message: 'API de Paperros' })
});
app.use('/api', userRoutes);
//app.use('/api', dogRoutes);

//Nota: Importar chats y paseos de la misma manera

export default app;