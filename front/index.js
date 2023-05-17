import app from"./app/app.js";

app.listen(app.get("port"), ()=>{
    console.log(`esta en el puerto: ${app.get("port")}`);
})