// municipiosRoutes.js

import express from 'express';
import {
    getAllMunicipios,
    getMunicipio,
    createMunicipio,
    updateMunicipio,
    deleteMunicipio,
} from '../controllers/MunicipioController.js';

const router = express.Router();

// Define las rutas para los municipios
router.get('/', getAllMunicipios);
router.get('/:id', getMunicipio);
router.post('/', createMunicipio);
router.put('/:id', updateMunicipio);
router.delete('/:id', deleteMunicipio);

export default router;