import TurnoModel from "../models/TurnoModel.js";
import TitularModel from "../models/TitularModel.js";
import NivelModel from "../models/NivelModel.js";
import MunicipioModel from "../models/MunicipioModel.js";
import AsuntoModel from "../models/AsuntoModel.js";

export const getAllTurnos = async (req, res) => {
    try {
        const turnos = await TurnoModel.findAll({
            include: [
                {
                    model: TitularModel, // Agrega el modelo de Titular
                    as: 'titular',
                    attributes: ['nombreTitular', 'curp', 'nombre', 'paterno', 'materno', 'telefono', 'celular', 'correo'],
                },
                {
                    model: NivelModel,
                    as: 'nivel',
                    attributes: ['nivel'], // Ajusta los atributos según tu modelo de Nivel
                },
                {
                    model: MunicipioModel,
                    as: 'municipio',
                    attributes: ['nombre'], // Ajusta los atributos según tu modelo de Municipio
                },
                {
                    model: AsuntoModel,
                    as: 'asunto',
                    attributes: ['asunto'], // Ajusta los atributos según tu modelo de Asunto
                }
            ],
            order: [['estado', 'ASC']] // Ordenar por estado en orden ascendente (puedes usar 'DESC' para orden descendente)
        });
        res.json(turnos);
    } catch (error) {
        res.json({ message: error.message });
    }
}

export const getTurno = async (req, res) => {
    try {
        const turno = await TurnoModel.findByPk(req.params.id);
        if (turno) {
            res.json(turno);
        } else {
            res.status(404).json({ message: 'Turno no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const createTurno = async (req, res) => {
    try {
        await TurnoModel.create(req.body);
        res.json({
            message: "¡Turno creado correctamente!"
        });
    } catch (error) {
        res.json({ message: error.message });
    }
}

export const updateTurno = async (req, res) => {
    try {
        const [updated] = await TurnoModel.update(req.body, {
            where: { id_turno: req.params.id }
        });
        if (updated) {
            res.json({ message: 'Turno actualizado correctamente' });
        } else {
            res.status(404).json({ message: 'Turno no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const deleteTurno = async (req, res) => {
    try {
        const deleted = await TurnoModel.destroy({
            where: { id_turno: req.params.id }
        });
        if (deleted) {
            res.json({ message: 'Turno eliminado correctamente' });
        } else {
            res.status(404).json({ message: 'Turno no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
