import { Router } from "express";
import * as dogController from "../controllers/dogs.controllers";
const router = Router();

// NOTA: Los perros son un objeto dentro de la colección usuario, por ejemplo: 
//   usuario.perros[{nombre_perro: "Perrito1", ...}, {nombre_perro: "Perrito2", ..}, {nombre_perro: "Perrito3", ..}]
//
// Asi que los metodos Create(Post) y Delete son Update(Put) dentro de la colección usuario

// R GET
//router.get

// U PUT
//router.put


export default router;