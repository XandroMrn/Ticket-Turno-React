import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import validaLogin from '../js/validaLogin'; // Importa la función de validación
import Swal from 'sweetalert2';
import styles from '../css/estiloLogin.module.css'

const Login = () => {
    const [user, setUser] = useState('');
    const [pass, setPass] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        // Utiliza la función de validación antes de intentar iniciar sesión
        if (!validaLogin()) {
            return; // La validación falló, no continúes con el inicio de sesión
        }

        try {
            // Realiza una solicitud GET al backend para verificar las credenciales
            const response = await axios.get(`http://localhost:8000/login/${user}`, {
                params: { pass }, // Envía la contraseña como parámetro de consulta
            });

            if (response.data.message === 'Inicio de sesión exitoso') {
                // Usuario autenticado exitosamente, redirige a la página de administrador
                navigate('/turnosLogeado'); // Cambia '/admin' a la URL deseada.
            } else {
                // Las credenciales son incorrectas, muestra un mensaje de error con SweetAlert2
                Swal.fire({
                    icon: 'error',
                    title: 'Credenciales Incorrectas',
                    text: 'El usuario y la contraseña proporcionados no son correctos',
                });
                console.log('Credenciales incorrectas');
            }
        } catch (error) {
            // Error al realizar la solicitud (puede ser un error de red o del servidor)
            Swal.fire({
                icon: 'error',
                title: 'Error al iniciar sesión',
                text: 'Se ha producido un error al intentar iniciar sesión. Por favor, inténtelo de nuevo más tarde.',
            });
            console.error('Error al iniciar sesión:', error);
        }
    };

    return (
        <div className={styles.loginContainer}>
            <h2>Iniciar Sesión</h2>
            <form onSubmit={handleLogin}>
                <div>
                    <label>Usuario:</label>
                    <input
                        type="text"
                        value={user}
                        onChange={(e) => setUser(e.target.value)}
                        id="user" // Asigna un ID al campo de usuario
                    />
                </div>
                <div>
                    <label>Contraseña:</label>
                    <input
                        type="password"
                        value={pass}
                        onChange={(e) => setPass(e.target.value)}
                        id="pass" // Asigna un ID al campo de contraseña
                    />
                </div>
                <button type="submit">Iniciar Sesión</button>
            </form>
        </div>
    );
};

export default Login;
