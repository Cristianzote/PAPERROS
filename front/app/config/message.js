import colors from "colors";

const message = (mensaje, tipo) => {
    
    switch (tipo) {
        case 'danger':
            console.log(mensaje.bgRed);
            break;
        case 'warning':
            console.log(mensaje.bgYellow);
            break;
        case 'success':
            console.log(mensaje.bgGreen);
            break;

        default:
            console.log(mensaje.bgWhite);
            break;
    }
}

export default message;