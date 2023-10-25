import AsuntoModel from "../models/AsuntoModel.js";

export const getAllAsuntos = async (req, res) => {
    try {
        const asuntos = await AsuntoModel.findAll();
        res.json(asuntos);
    } catch (error) {
        res.json({ message: error.message });
    }
}

export const getAsunto = async (req, res) => {
    try {
        const asunto = await AsuntoModel.findByPk(req.params.id);
        if (asunto) {
            res.json(asunto);
        } else {
            res.status(404).json({ message: 'Asunto no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const createAsunto = async (req, res) => {
    try {
        await AsuntoModel.create(req.body);
        res.json({
            message: "¡Asunto creado correctamente!"
        });
    } catch (error) {
        res.json({ message: error.message });
    }
}

export const updateAsunto = async (req, res) => {
    try {
        const [updated] = await AsuntoModel.update(req.body, {
            where: { id_asunto: req.params.id }
        });
        if (updated) {
            res.json({ message: 'Asunto actualizado correctamente' });
        } else {
            res.status(404).json({ message: 'Asunto no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const deleteAsunto = async (req, res) => {
    try {
        const deleted = await AsuntoModel.destroy({
            where: { id_asunto: req.params.id }
        });
        if (deleted) {
            res.json({ message: 'Asunto eliminado correctamente' });
        } else {
            res.status(404).json({ message: 'Asunto no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}