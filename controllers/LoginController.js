import LoginModel from "../models/LoginModel.js";

export const getAllLogins = async (req, res) => {
    try {
        const logins = await LoginModel.findAll();
        res.json(logins);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const getLogin = async (req, res) => {
    const { user } = req.params; // Obtiene el nombre de usuario de la URL
    const { pass } = req.query; // Obtiene la contraseña de la consulta

    try {
        // Aquí debes buscar el usuario en la base de datos usando el nombre de usuario
        // y luego comparar la contraseña almacenada con la que se proporcionó en la consulta.
        // Reemplaza la siguiente línea con tu lógica de verificación.

        if (user === 'sysadmin' && pass === 'root') {
            res.json({ message: 'Inicio de sesión exitoso' });
        } else {
            res.status(401).json({ message: 'Credenciales incorrectas' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const createLogin = async (req, res) => {
    try {
        const { user, pass } = req.body; // Obtiene los datos de usuario y contraseña del cuerpo de la solicitud
        await LoginModel.create({ user, pass });
        res.json({
            message: "¡Login creado correctamente!"
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const updateLogin = async (req, res) => {
    const { user } = req.params; // Obtiene el valor del parámetro user de la URL

    try {
        const [updated] = await LoginModel.update(req.body, {
            where: { user }
        });
        if (updated) {
            res.json({ message: 'Login actualizado correctamente' });
        } else {
            res.status(404).json({ message: 'Login no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const deleteLogin = async (req, res) => {
    const { user } = req.params; // Obtiene el valor del parámetro user de la URL

    try {
        const deleted = await LoginModel.destroy({
            where: { user }
        });
        if (deleted) {
            res.json({ message: 'Login eliminado correctamente' });
        } else {
            res.status(404).json({ message: 'Login no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
