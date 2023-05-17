import message from '../config/message';
import { /*db,*/ initFirebase } from '../config/database/firebase';
const db = require('../config/database/firebase');
var admin = require("firebase-admin");

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
// Registrar el usuario en la base de datos
export const createUserDb = async(req, res) => {
    try {
        // Declarar datos del usuario
        const user = { 
            "email": req.body.email,
            "password": req.body.password,
            "id": req.body.id
        }
        
        //Declarar colección
        const usuariosRef = db.collection('usuarios');

        // Crear el documento, sus campos y llenarlos
        const result = await usuariosRef.doc(user.id).set({
            correo_U: user.email,
            password: user.password,
            identificador_U: user.id
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
        const result = db.collection('usuarios').get();
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
        const result = db.collection('usuarios').doc(id);
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
            "email": req.body.email,
            "password": req.body.password,
            "id": req.body.id
        }
        
        // Declarar collección
        const usuariosRef = db.collection('usuarios');

        // Declarar documento y actualizar los campos con los datos del usuario
        const result = await usuariosRef.doc(user.id).update({
            correo_U: user.email,
            password: user.password
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
        const usuariosRef = db.collection('usuarios');

        // Declarar documento y borrarlo
        const result = await usuariosRef.doc(user.id).delete();

         res.json(result);
         message("Exito", "success");
    } catch (error) {
        message(error.message, "danger");
        res.status(500);
    }
}

export default createUserAuth;