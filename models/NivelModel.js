import db from '../database/db.js'; // Importamos la conexión a la base de datos.
import { DataTypes } from 'sequelize'; // Importamos DataTypes en minúsculas.

const NivelModel = db.define('nivel', {
    id_nivel: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    nivel: {
        type: DataTypes.STRING,
        allowNull: false
    },
    createdAt: {
        type: DataTypes.DATE, // Tipo de dato para fecha y hora
        defaultValue: DataTypes.NOW // Valor predeterminado: fecha y hora actual
    }
}, {
    tableName: 'nivel'
});

export default NivelModel;