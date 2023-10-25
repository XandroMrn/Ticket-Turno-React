import express from 'express';
import turnosRoutes from './turnosRoutes.js';
import nivelesRoutes from './nivelesRoutes.js';
import asuntosRoutes from './asuntosRoutes.js';
import municipiosRoutes from './municipiosRoutes.js';
import titularesRoutes from './titularesRoutes.js';
import loginRoutes from './loginRoutes.js'; // Agrega esta línea para importar loginRoutes

const router = express.Router();

router.use('/turnos', turnosRoutes);
router.use('/niveles', nivelesRoutes);
router.use('/asuntos', asuntosRoutes);
router.use('/municipios', municipiosRoutes);
router.use('/titulares', titularesRoutes);
router.use('/login', loginRoutes);

export default router;