require('dotenv').config();//importar modulo que me lee variables de entorno
const app = require('./app');
require('./database');

async function main(){
    await app.listen(app.get('port'));
    console.log('La aplicacion esta corriendo en: http://localhost:' + app.get('port'));
}
main();