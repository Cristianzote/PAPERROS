import path from "path";
import dotenv from "dotenv";


dotenv.config({path: path.resolve(__dirname, `${process.env.NODE_ENV}.env`)});