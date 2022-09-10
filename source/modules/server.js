
//proccess es un objeto literal de node
//env es una propiedad de proccess que captura variable de entorno
const port = process.env.PORT || 3030;
const start = () => console.log('servidor corriendo...');

module.exports = { port, start }