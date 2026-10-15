const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();
const { mongoose } = require('./database');

// Configuraciones
app.set('port', process.env.PORT || 3000);
app.use(morgan('dev'));
app.use(express.json()); // Convierte los datos que vienen del cliente a formato JSON
app.use(cors({origin: 'http://localhost:4200'})); // Permite la comunicación con Angular

// Rutas del servidor
app.use('/api/empleados', require('./routes/empleado.routes'));

// Iniciando el servidor
app.listen(app.get('port'), () => {
    console.log('server activo en el puerto', app.get('port'));
});