//Database
const Database = require('./config/database');
//Variables de entorno
require('dotenv').config()
//Configuracion
const CONFIG = require('./config/config');
//App
const App = require('./App');
//conectar con base de datos
Database.connect();
//iniciando servidor
App.listen(CONFIG.PORT,function(error){
    if(error) return console.log(error);
    console.log(`Servidor corriendo en el Puerto: ${CONFIG.PORT}`);
});