//importamos el Modelo
import NivelModel from "../models/NivelModel.js";

//** Metodos para el CRUD */

//Mostrar todos los registros
export const getAllNiveles = async (req, res) => {
    try {
        const niveles = await NivelModel.findAll()
        res.json(niveles)
    } catch (error) {
        res.json({ message: error.message })
    }
}

// Mostrar un registro
export const getNivel = async (req, res) => {
    try {
        const nivel = await NivelModel.findByPk(req.params.id);
        if (nivel) {
            res.json(nivel);
        } else {
            res.status(404).json({ message: 'Nivel no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

//Crear un registro
export const createNivel = async (req, res) => {
    try {
        await NivelModel.create(req.body)
        res.json({
            "message": "¡Nivel creado correctamente!"
        })
    } catch (error) {
        res.json({ message: error.message })
    }
}

// Actualizar un registro
export const updateNivel = async (req, res) => {
    try {
        const [updated] = await NivelModel.update(req.body, {
            where: { id_nivel: req.params.id }
        });
        if (updated) {
            res.json({ message: 'Nivel actualizado correctamente' });
        } else {
            res.status(404).json({ message: 'Nivel no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Eliminar un registro
export const deleteNivel = async (req, res) => {
    try {
        const deleted = await NivelModel.destroy({
            where: { id_nivel: req.params.id }
        });
        if (deleted) {
            res.json({ message: 'Nivel eliminado correctamente' });
        } else {
            res.status(404).json({ message: 'Nivel no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}