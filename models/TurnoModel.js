import db from '../database/db.js';
import { DataTypes } from 'sequelize';
import TitularModel from './TitularModel.js';
import NivelModel from './NivelModel.js';
import MunicipioModel from './MunicipioModel.js';
import AsuntoModel from './AsuntoModel.js'; // Asegúrate de importar el modelo AsuntoModel

const TurnoModel = db.define('turno', {
    id_turno: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    titular_id_titular: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    nivel_id_nivel: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    municipio_id_municipio: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    asunto_id_asunto: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    estado: {
        type: DataTypes.STRING(20),
        allowNull: true
    },
    createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
    updatedAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        onUpdate: DataTypes.NOW
    }
}, {
    tableName: 'turno'
});

// Definición de la relación entre Turno y Titular
TurnoModel.belongsTo(TitularModel, { foreignKey: 'titular_id_titular', as: 'titular' });

// Definición de la relación entre Turno y Nivel
TurnoModel.belongsTo(NivelModel, { foreignKey: 'nivel_id_nivel', as: 'nivel' });

// Definición de la relación entre Turno y Municipio
TurnoModel.belongsTo(MunicipioModel, { foreignKey: 'municipio_id_municipio', as: 'municipio' });

// Definición de la relación entre Turno y Asunto
TurnoModel.belongsTo(AsuntoModel, { foreignKey: 'asunto_id_asunto', as: 'asunto' }); // Asegúrate de definir la relación con AsuntoModel

export default TurnoModel;