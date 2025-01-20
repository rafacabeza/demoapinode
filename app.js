const express = require('express');
const bodyParser = require('body-parser');
const deseosRoutes = require('./routes/deseosRoutes');

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());

// Rutas
app.use('/api/deseos', deseosRoutes);

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
