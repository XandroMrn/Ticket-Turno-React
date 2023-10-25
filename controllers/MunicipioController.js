import MunicipioModel from "../models/MunicipioModel.js";

export const getAllMunicipios = async (req, res) => {
    try {
        const municipios = await MunicipioModel.findAll();
        res.json(municipios);
    } catch (error) {
        res.json({ message: error.message });
    }
}

export const getMunicipio = async (req, res) => {
    try {
        const municipio = await MunicipioModel.findByPk(req.params.id);
        if (municipio) {
            res.json(municipio);
        } else {
            res.status(404).json({ message: 'Municipio no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const createMunicipio = async (req, res) => {
    try {
        await MunicipioModel.create(req.body)
        res.json({
            message: "¡Municipio creado correctamente!"
        })
    } catch (error) {
        res.json({ message: error.message });
    }
}

export const updateMunicipio = async (req, res) => {
    try {
        const [updated] = await MunicipioModel.update(req.body, {
            where: { id_municipio: req.params.id }
        });
        if (updated) {
            res.json({ message: 'Municipio actualizado correctamente' });
        } else {
            res.status(404).json({ message: 'Municipio no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const deleteMunicipio = async (req, res) => {
    try {
        const deleted = await MunicipioModel.destroy({
            where: { id_municipio: req.params.id }
        });
        if (deleted) {
            res.json({ message: 'Municipio eliminado correctamente' });
        } else {
            res.status(404).json({ message: 'Municipio no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
