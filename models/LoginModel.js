import db from '../database/db.js';
import { DataTypes } from 'sequelize';

const LoginModel = db.define('login', {
    user: {
        type: DataTypes.STRING,
        primaryKey: true, // Declarar 'user' como clave primaria
        allowNull: false
    },
    pass: {
        type: DataTypes.STRING,
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
    tableName: 'login'
});

export default LoginModel;
