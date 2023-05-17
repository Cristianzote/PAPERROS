import app from "../app.js";
import message from "./message.js";

const caseEntorno = () => {
    switch (process.env.NODE_ENV) {
        case 'production':
            message(`api lista en el puerto http://localhost:${app.get("PORT")}/`,"danger");
            break;

        case 'develop':
            message(`api lista en el puerto http://localhost:${app.get("PORT")}/`,"success");
            break;

        case 'qa':
            message(`api lista en el puerto http://localhost:${app.get("PORT")}/`,"warning");
            break;

        default:
            message(`api lista en el puerto http://localhost:${app.get("PORT")}/`,"success");
            break;

    }
};

export default caseEntorno;