import TitularModel from '../models/TitularModel.js';

export const getAllTitulares = async (req, res) => {
    try {
        const titulares = await TitularModel.findAll();
        res.json(titulares);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const getTitular = async (req, res) => {
    try {
        const titular = await TitularModel.findByPk(req.params.id);
        if (titular) {
            res.json(titular);
        } else {
            res.status(404).json({ message: 'Titular no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const createTitular = async (req, res) => {
    try {
        const titular = await TitularModel.create(req.body);
        res.json({ message: '¡Titular creado correctamente!', id_titular: titular.id_titular });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const updateTitular = async (req, res) => {
    try {
        const [updated] = await TitularModel.update(req.body, {
            where: { id_titular: req.params.id }
        });
        if (updated) {
            res.json({ message: 'Titular actualizado correctamente' });
        } else {
            res.status(404).json({ message: 'Titular no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const deleteTitular = async (req, res) => {
    try {
        const deleted = await TitularModel.destroy({
            where: { id_titular: req.params.id }
        });
        if (deleted) {
            res.json({ message: 'Titular eliminado correctamente' });
        } else {
            res.status(404).json({ message: 'Titular no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}