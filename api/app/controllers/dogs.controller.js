import message from '../config/message';
import { arrayUnion, arrayRemove } from "firebase/firestore";
import { initFirebase } from '../config/database/firebase';
const db = require('../config/database/firebase');
var admin = require("firebase-admin");
import jwt from "jsonwebtoken";

// Inicializar Firebase
initFirebase;

// NOTA: Los perros son un objeto dentro de la colección usuario, por ejemplo: 
//   usuario.perros[{nombre_perro: "Perrito1", ...}, {nombre_perro: "Perrito2", ..}, {nombre_perro: "Perrito3", ..}]
//
// Asi que los metodos Create(Post) y Delete son Update(Put) dentro de la colección usuario


// R
// Obtener los perros del usuario

// Obtener perro en especifico del usuario

// U
// Añadir perros al usuario
export const addDog = async(req, res) => {
    try {
        // Declarar datos del usuario
        const user = {
            "id": req.body.id,
            /*"perros": {
                "id_perro": req.body.perros.id_perro,
                "nombre_perro": req.body.perros.nombre_perro
            }*/
            perros: req.body.perros
          }
        
        // Declarar collecciónes
        const usuariosRef = db.collection('usuario');

        //Declarar documento y actualizar los campos con los datos del usuario
        const result = await usuariosRef.doc("Cristiancito").update({
            perros: [user.perros] 
            //perros: arrayUnion("otro perrito")
        },{
            merge: true
        });

         res.json(result);
         message("Exito", "success");
    } catch (error) {
        message(error.message, "danger");
        res.status(500);
    }
}

// Actualizar información del perro del usuario

// Eliminar perro del usuario
