import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import validaRegistro from '../js/validaTurno'; // Importa la función de validación
import styles from '../css/estiloCreateTurnos.module.css'

const CompCreateTurno = () => {
    const [nombreTitular, setNombreTitular] = useState('');
    const [curp, setCurp] = useState('');
    const [nombre, setNombre] = useState('');
    const [paterno, setPaterno] = useState('');
    const [materno, setMaterno] = useState('');
    const [telefono, setTelefono] = useState('');
    const [celular, setCelular] = useState('');
    const [correo, setCorreo] = useState('');
    const [niveles, setNiveles] = useState([]);
    const [municipios, setMunicipios] = useState([]);
    const [asuntos, setAsuntos] = useState([]);
    const [selectedNivel, setSelectedNivel] = useState('');
    const [selectedMunicipio, setSelectedMunicipio] = useState('');
    const [selectedAsunto, setSelectedAsunto] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
        // Realiza la solicitud para obtener los niveles
        axios.get('http://localhost:8000/niveles')
            .then((response) => {
                const nivelesData = response.data.map((nivel) => ({
                    id: nivel.id_nivel,
                    nombre: nivel.nivel,
                }));
                setNiveles(nivelesData);
            })
            .catch((error) => {
                console.error('Error al obtener los niveles:', error);
            });

        // Realiza la solicitud para obtener los municipios
        axios.get('http://localhost:8000/municipios')
            .then((response) => {
                const municipiosData = response.data.map((municipio) => ({
                    id: municipio.id_municipio,
                    nombre: municipio.nombre,
                }));
                setMunicipios(municipiosData);
            })
            .catch((error) => {
                console.error('Error al obtener los municipios:', error);
            });

        // Realiza la solicitud para obtener los asuntos
        axios.get('http://localhost:8000/asuntos')
            .then((response) => {
                const asuntosData = response.data.map((asunto) => ({
                    id: asunto.id_asunto,
                    nombre: asunto.asunto,
                }));
                setAsuntos(asuntosData);
            })
            .catch((error) => {
                console.error('Error al obtener los asuntos:', error);
            });
    }, []);

    const saveTurnData = async (e) => {
        e.preventDefault();

        // Utiliza la función de validación antes de guardar los datos
        if (validaRegistro()) {
            try {
                // Primero, guarda los datos en la tabla 'titular'
                const titularData = {
                    nombreTitular,
                    curp,
                    nombre,
                    paterno,
                    materno,
                    telefono,
                    celular,
                    correo,
                };

                const titularResponse = await axios.post('http://localhost:8000/titulares', titularData);
                const titularId = titularResponse.data.id_titular;

                // Luego, guarda los datos en la tabla 'turno'
                const turnoData = {
                    titular_id_titular: titularId,
                    nivel_id_nivel: selectedNivel,
                    municipio_id_municipio: selectedMunicipio,
                    asunto_id_asunto: selectedAsunto,
                    estado: 'pendiente',
                };
                await axios.post('http://localhost:8000/turnos', turnoData);

                // Navega de vuelta al componente CompShowTurnos
                navigate('/'); // Redirige a la página principal u otra ruta según tus necesidades
            } catch (error) {
                console.error('Error al guardar el turno:', error);
            }
        }
    };

    return (
        <div className={styles.formContainer}> {/* Aplica el estilo del contenedor */}
            <h3 className={styles.formHeading}>Crear Turno</h3> {/* Aplica el estilo del encabezado */}
            <form onSubmit={saveTurnData}>
                <div className='mb-3'>
                    <label className='form-label' htmlFor='nombreTitular'>
                        Nombre Completo
                    </label>
                    <input
                        id='nombreTitular'
                        value={nombreTitular}
                        onChange={(e) => setNombreTitular(e.target.value)}
                        type='text'
                        className='form-control'
                        placeholder='Ingrese nombre titular'
                    />
                </div>

                <div className='mb-3'>
                    <label className='form-label' htmlFor='curp'>
                        Curp
                    </label>
                    <input
                        id='curp'
                        value={curp}
                        onChange={(e) => setCurp(e.target.value)}
                        type='text'
                        className='form-control'
                        placeholder='Ingrese curp'
                    />
                </div>

                <div className='mb-3'>
                    <label className='form-label' htmlFor='nombre'>
                        Nombre
                    </label>
                    <input
                        id='nombre'
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                        type='text'
                        className='form-control'
                        placeholder='Ingrese nombre'
                    />
                </div>

                <div className='mb-3'>
                    <label className='form-label' htmlFor='paterno'>
                        Paterno
                    </label>
                    <input
                        id='paterno'
                        value={paterno}
                        onChange={(e) => setPaterno(e.target.value)}
                        type='text'
                        className='form-control'
                        placeholder='Ingrese paterno'
                    />
                </div>

                <div className='mb-3'>
                    <label className='form-label' htmlFor='materno'>
                        Materno
                    </label>
                    <input
                        id='materno'
                        value={materno}
                        onChange={(e) => setMaterno(e.target.value)}
                        type='text'
                        className='form-control'
                        placeholder='Ingrese materno'
                    />
                </div>

                <div className='mb-3'>
                    <label className='form-label' htmlFor='telefono'>
                        Telefono
                    </label>
                    <input
                        id='telefono'
                        value={telefono}
                        onChange={(e) => setTelefono(e.target.value)}
                        type='text'
                        className='form-control'
                        placeholder='Ingrese telefono'
                    />
                </div>

                <div className='mb-3'>
                    <label className='form-label' htmlFor='celular'>
                        Celular
                    </label>
                    <input
                        id='celular'
                        value={celular}
                        onChange={(e) => setCelular(e.target.value)}
                        type='text'
                        className='form-control'
                        placeholder='Ingrese celular'
                    />
                </div>

                <div className='mb-3'>
                    <label className='form-label' htmlFor='correo'>
                        Correo
                    </label>
                    <input
                        id='correo'
                        value={correo}
                        onChange={(e) => setCorreo(e.target.value)}
                        type='email'
                        className='form-control'
                        placeholder='Ingrese correo'
                    />
                </div>

                <div className='mb-3'>
                    <label className='form-label' htmlFor='nivel'>
                        Nivel:
                    </label>
                    <select
                        id='nivel'
                        value={selectedNivel}
                        onChange={(e) => setSelectedNivel(e.target.value)}
                        className='form-control'
                    >
                        <option value=''>Seleccione un nivel</option>
                        {niveles.map((nivel) => (
                            <option key={nivel.id} value={nivel.id}>
                                {nivel.nombre}
                            </option>
                        ))}
                    </select>
                </div>

                <div className='mb-3'>
                    <label className='form-label' htmlFor='municipio'>
                        Municipio:
                    </label>
                    <select
                        id='municipio'
                        value={selectedMunicipio}
                        onChange={(e) => setSelectedMunicipio(e.target.value)}
                        className='form-control'
                    >
                        <option value=''>Seleccione un municipio</option>
                        {municipios.map((municipio) => (
                            <option key={municipio.id} value={municipio.id}>
                                {municipio.nombre}
                            </option>
                        ))}
                    </select>
                </div>

                <div className='mb-3'>
                    <label className='form-label' htmlFor='asunto'>
                        Asunto:
                    </label>
                    <select
                        id='asunto'
                        value={selectedAsunto}
                        onChange={(e) => setSelectedAsunto(e.target.value)}
                        className='form-control'
                    >
                        <option value=''>Seleccione un asunto</option>
                        {asuntos.map((asunto) => (
                            <option key={asunto.id} value={asunto.id}>
                                {asunto.nombre}
                            </option>
                        ))}
                    </select>
                </div>
                <button type='submit' className='btn btn-primary'>
                    Generar Turno
                </button>
                <button type='button' className='btn btn-secondary' onClick={() => navigate('/')}>
                    Volver
                </button>
            </form>
        </div>
    );
};

export default CompCreateTurno;