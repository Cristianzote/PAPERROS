//Funciones de Firebase: App y Firestore
import { initializeApp, cert } from 'firebase-admin/app';
const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');
import { credential as _credential } from "firebase-admin";

import serviceAccount from "./creds.json";
const admin = require('firebase-admin');

// Configuración de Firebase con variables de entorno
const firebaseConfig = {
  apiKey: process.env.APIKEY,
  authDomain: process.env.AUTHDOMAIN,
  projectId: process.env.PROJECTID,
  //databaseURL: DATABASEURL,
  storageBucket: process.env.STORAGEBUCKET,
  messagingSenderId: process.env.MESSAGINGSENDERID,
  appId: process.env.APPID,
  //measurementId: MEASUREMENTID,
  credential: _credential.cert(serviceAccount)
};

// Iniciar servicios de Firebase
const initFirebase = initializeApp(firebaseConfig);
const db = getFirestore();

// Exportar las funciones de Firebase
module.exports = db;
export default {  initFirebase }