import app from"./app.js";
import caseEntorno from "./config/index.js";

app.listen(app.get("port"), caseEntorno);