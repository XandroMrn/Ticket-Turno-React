// titularesRoutes.js

import express from 'express';
import {
    getAllTitulares,
    getTitular,
    createTitular,
    updateTitular,
    deleteTitular,
} from '../controllers/TitularController.js';

const router = express.Router();

// Define las rutas para los titulares
router.get('/', getAllTitulares);
router.get('/:id', getTitular);
router.post('/', createTitular);
router.put('/:id', updateTitular);
router.delete('/:id', deleteTitular);

export default router;
