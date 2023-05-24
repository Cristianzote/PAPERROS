import message from '../config/message';
import { /*db,*/ initFirebase } from '../config/database/firebase';
const db = require('../config/database/firebase');
var admin = require("firebase-admin");
import jwt from "jsonwebtoken";

// Inicializar Firebase
initFirebase;

// C
// Crear usuario en Firebase Auth
export const createUserAuth = async(req, res) => {
    try {
        // Declarar datos del usuario
        const user = { 
            "email": req.body.email,
            "password": req.body.password,
            "name": req.body.name
        }
        // Crear usuario en Authentication con el metodo createUser()
        const result = await admin.auth().createUser({
            email: user.email,
            password: user.password,
            emailVerified: false,
            disabled: false
        });
        res.json(result);
    } catch (error) {
        message(error.message, "danger");
    }
}
// Registrar el nuevo usuario en la base de datos
export const createUserDb = async(req, res) => {
    try {
        // Declarar datos del usuario
        const user = {
            "id": req.body.id,
            "nombre": req.body.nombre,
            "apellidos": req.body.apellidos,
            "calificacion_paseador": 0,
            "calificacion_dueno": 0,
            "municipio": req.body.municipio,
            "direccion": req.body.direccion,
            "telefono": req.body.telefono,
            "edad": req.body.edad,
            "pais": req.body.pais,
            "perros": [],
            "chats": []
          }
        
        //Declarar colección
        const usuariosRef = db.collection('usuario');

        // Crear el documento, sus campos y llenarlos
        const result = await usuariosRef.doc(user.id).set({
            nombre: user.nombre,
            apellidos: user.apellidos,
            calificacion_paseador: user.calificacion_paseador,
            calificacion_dueno: user.calificacion_dueno,
            municipio: user.municipio,
            direccion: user.direccion,
            telefono: user.telefono,
            edad: user.edad,
            pais: user.pais,
            perros: user.perros,
            chats: user.chats
        });

         res.json(result);
         message("Exito", "success");
    } catch (error) {
        message(error.message, "danger");
        res.status(500);
    }
}

// R
//Obtener todos los usuarios de la base de datos
export const getUsers = async(req, res) => {
    try {
        const result = db.collection('usuario').get();
        result.then((querySnapshot) => {
            const data = [];
            querySnapshot.forEach((doc) => {
                data.push(doc.data());
            });
            let jsonData = JSON.stringify(data);
            res.json(JSON.parse(jsonData));
        })
    } catch (error) {
        message(error.message, "danger");
        res.status(500);
    }
}
// Obtener un usuario en particular de la base de datos
export const getUser = async(req, res) => {
    try {
        // Declarar datos del usuario
        const id = req.body.id ?? "none";
        // Declarar colección
        const result = db.collection('usuario').doc(id);
        const doc = await result.get();
        const data = doc.data();
        let jsonData = JSON.stringify(data);

        if (doc.exists) {
            res.json(JSON.parse(jsonData));
        } else {
            console.log('No existe este usuario: ' + id);
            res.json("El usuario " + id + " no existe");
        }
        
    } catch (error) {
        console.log(error);
        message(error.message, "danger");
        res.status(500);
    }
}

// U
// Actualizar información del usuario
export const updateUser = async(req, res) => {
    try {
        // Declarar datos del usuario
        const user = {
            "id": req.body.id,
            "nombre": req.body.nombre,
            "apellidos": req.body.apellidos,
            "municipio": req.body.municipio,
            "direccion": req.body.direccion,
            "telefono": req.body.telefono,
            "edad": req.body.edad,
            "pais": req.body.pais
          }
        
        // Declarar collección
        const usuariosRef = db.collection('usuario');

        // Declarar documento y actualizar los campos con los datos del usuario
        const result = await usuariosRef.doc(user.id).update({
            nombre: user.nombre,
            apellidos: user.apellidos,
            municipio: user.municipio,
            direccion: user.direccion,
            telefono: user.telefono,
            edad: user.edad,
            pais: user.pais
        });

         res.json(result);
         message("Exito", "success");
    } catch (error) {
        message(error.message, "danger");
        res.status(500);
    }
}

//TODO: Terminar las funciones de añadir y borrar perros del usuario
// Añadir perros al usuario
export const addDog = async(req, res) => {
    try {
        // Declarar datos del usuario
        const user = {
            "id": req.body.id,
            "perros": {
                "id_perro": req.body.id_perro,
                "nombre_perro": req.body.nombre_perro
            }
          }
        
        // Declarar collecciónes
        const usuariosRef = db.collection('usuario');

        // Declarar documento y actualizar los campos con los datos del usuario
        const result = await usuariosRef.doc(user.id).update({
            perros: db.FieldValue.arrayUnion(user.perros),
            
        });

         res.json(result);
         message("Exito", "success");
    } catch (error) {
        message(error.message, "danger");
        res.status(500);
    }
}

// D
export const deleteUser = async(req, res) => {
    try {
        // Datos del usuario
        const user = { "id": req.body.id}
        
        // Declarar la colección
        const usuariosRef = db.collection('usuario');

        // Declarar documento y borrarlo
        const result = await usuariosRef.doc(user.id).delete();

         res.json(result);
         message("Exito", "success");
    } catch (error) {
        message(error.message, "danger");
        res.status(500);
    }
}

export const isValidToken = (req, res, next) => {
    
    // const tokenClient = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub21icmUiOiJMVUlTIEJFQ0VSUlJBIiwiaWQiOiIxMDQyMzc2MjAxNDg2MTQ0MTA0NDQiLCJlbWFpbCI6ImVsaW5nZW5pZXJvcHJvZmVzb3JAZ21haWwuY29tIiwiaWF0IjoxNjgwMDQzMTQ1LCJleHAiOjE2ODAwNDY3NDV9.CN8oJ3L2Gbc4-HYf9-T2-zTFEyeTMDLe0y4bLAPmGlM";
    const tokenClient = req.cookies.eib_per;
    // console.log(req.cookie);
    try {
        jwt.verify(tokenClient, process.env.SECRET_KEY, (err, decoded) => {
            if (!err) {
                // res.send("todo bien");
                next();
            } else {
                res.send({ "error": "El token es errado o ha caducado " })
            }
            // console.log(err);
        })   
    } catch (error) {
        res.send({ "error": "El token es errado o ha caducado " })
    }
}

export default createUserAuth;