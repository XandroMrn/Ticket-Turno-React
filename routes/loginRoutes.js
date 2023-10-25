import express from 'express';
import {
    getAllLogins,
    getLogin,
    createLogin,
    updateLogin,
    deleteLogin,
} from '../controllers/LoginController.js';

const router = express.Router();

// Define las rutas para las operaciones relacionadas con el inicio de sesión (login)
router.get('/', getAllLogins);
router.get('/:user', getLogin); // Utiliza el parámetro "user" en lugar de "id"
router.post('/', createLogin);
router.put('/:user', updateLogin); // Utiliza el parámetro "user" en lugar de "id"
router.delete('/:user', deleteLogin); // Utiliza el parámetro "user" en lugar de "id"

export default router;