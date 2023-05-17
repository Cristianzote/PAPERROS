import app from "../app.js";
import message from "./message.js";

const caseEntorno = () => {
    switch (process.env.NODE_ENV) {
        case 'production':
            message(`api lista en el puerto http://localhost:${app.get("port")}/`,"danger");
            break;

        case 'develop':
            message(`api lista en el puerto http://localhost:${app.get("port")}/`,"success");
            break;

        case 'qa':
            message(`api lista en el puerto http://localhost:${app.get("port")}/`,"warning");
            break;

        default:
            message(`api lista en el puerto http://localhost:${app.get("port")}/`,"success");
            break;

    }
};

export default caseEntorno;