// turnoRoutes.js

import express from 'express';
import {
    getAllTurnos,
    getTurno,
    createTurno,
    updateTurno,
    deleteTurno,
} from '../controllers/TurnoController.js';

const router = express.Router();

// Define las rutas para los turnos
router.get('/', getAllTurnos);
router.get('/:id', getTurno);
router.post('/', createTurno);
router.put('/:id', updateTurno);
router.delete('/:id', deleteTurno);

export default router;
