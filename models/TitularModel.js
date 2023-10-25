import db from '../database/db.js';
import { DataTypes } from 'sequelize';

const TitularModel = db.define('titular', {
    id_titular: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    nombreTitular: {
        type: DataTypes.STRING(70),
        allowNull: false
    },
    curp: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    nombre: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    paterno: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    materno: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    telefono: {
        type: DataTypes.STRING(10),
        allowNull: false
    },
    celular: {
        type: DataTypes.STRING(10),
        allowNull: false
    },
    correo: {
        type: DataTypes.STRING(50),
        allowNull: false
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
    tableName: 'titular'
});

export default TitularModel;
