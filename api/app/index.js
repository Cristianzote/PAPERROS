import app from "./app";
//import firebase from "./config/database/firebase";
import caseEntorno from "./config/index.js";

app.listen(app.get("PORT"), caseEntorno);