const express = require('express');
   const app = express();
   const port = 3000; // El puerto en el que escuchará tu servidor

  
   // Configura middleware para analizar solicitudes JSON
      app.use(express.json());

   // Definimos una ruta
   /* app.get('/', (req, res) => {
    res.json({ mensaje: '¡Bienvenido!' });
  }); */
  app.get('/', (req, res) => {
    res.json('¡Bienvenido!' );
  });
   app.get('/apirest', (req, res) => {
    res.json( '¡Sigue adelante!' );
  }); 
   app.get('/apirest/final', (req, res) => {
     res.json(  '¡FIN DEL SERVIDOR!' );
   });

   // Iniciamos el servidor
   app.listen(port, () => {
     console.log(`El servidor API REST esta en ejecución entramos en http://localhost:${port}`);
   });
   