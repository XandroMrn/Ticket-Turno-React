import express from 'express';
import cors from 'cors';
import db from './database/db.js';
import turnosRoutes from './routes/turnosRoutes.js';
import nivelesRoutes from './routes/nivelesRoutes.js';
import asuntosRoutes from './routes/asuntosRoutes.js';
import municipiosRoutes from './routes/municipiosRoutes.js';
import titularesRoutes from './routes/titularesRoutes.js';
import loginRoutes from './routes/loginRoutes.js';

const app = express();

app.use(cors());
app.use(express.json());

// Define las rutas para turnos
app.use('/turnos', turnosRoutes);

// Define las rutas para niveles
app.use('/niveles', nivelesRoutes);

// Define las rutas para asuntos
app.use('/asuntos', asuntosRoutes);

// Define las rutas para municipios
app.use('/municipios', municipiosRoutes);

// Define las rutas para titulares
app.use('/titulares', titularesRoutes);

// Define las rutas para login
app.use('/login', loginRoutes);

try {
    await db.authenticate();
    console.log('Conexión exitosa a la BDD');
} catch (error) {
    console.log(`El error de conexión es: ${error}`);
}

app.get('/', (req, res) => {
    res.send('HOLA MUNDO');
});

app.listen(8000, () => {
    console.log('Server Up running in http://localhost:8000/');
});
