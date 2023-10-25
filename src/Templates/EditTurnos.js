import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styles from '../css/estiloEditTurnos.module.css'

const URI = 'http://localhost:8000/';

const CompEditTurno = () => {
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
    const { id } = useParams();

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

        // Obtiene los datos del turno por id_turno
        getTurnoByTurnoId(id);
    }, [id]);

    const update = async (e) => {
        e.preventDefault();
        try {
            // Obtén la información del turno para obtener 'titular_id_titular'
            const response = await axios.get(`${URI}turnos/${id}`);
            const turnoData = response.data;

            if (turnoData) {
                // Obtén 'titular_id_titular' del turno
                const titularIdTitular = turnoData.titular_id_titular;

                // Actualiza los datos en la tabla 'titular' usando 'titularIdTitular'
                await axios.put(`${URI}titulares/${titularIdTitular}`, {
                    nombreTitular,
                    curp,
                    nombre,
                    paterno,
                    materno,
                    telefono,
                    celular,
                    correo,
                });

                // Actualiza los datos en la tabla 'turno'
                await axios.put(`${URI}turnos/${id}`, {
                    nivel_id_nivel: selectedNivel,
                    municipio_id_municipio: selectedMunicipio,
                    asunto_id_asunto: selectedAsunto,
                });
            }

            navigate('/'); // Redirige a la página principal u otra ruta según tus necesidades
        } catch (error) {
            console.error('Error al actualizar el turno y el titular:', error);
        }
    }

    const getTurnoByTurnoId = async (id) => {
        try {
            const response = await axios.get(`${URI}turnos/${id}`);
            const turnoData = response.data;
            const titularData = await (await axios.get(`${URI}titulares/${turnoData.titular_id_titular}`)).data

            if (turnoData) {
                // Llena los campos del formulario con los datos existentes
                setNombreTitular(titularData.nombreTitular);
                setCurp(titularData.curp);
                setNombre(titularData.nombre);
                setPaterno(titularData.paterno);
                setMaterno(titularData.materno);
                setTelefono(titularData.telefono);
                setCelular(titularData.celular);
                setCorreo(titularData.correo);
                setSelectedNivel(turnoData.nivel_id_nivel);
                setSelectedMunicipio(turnoData.municipio_id_municipio);
                setSelectedAsunto(turnoData.asunto_id_asunto);
            }
        } catch (error) {
            console.error('Error al obtener el turno:', error);
        }
    }

    return (
        <div className={styles.formContainer}> {/* Aplica el estilo del contenedor */}
            <h3 className={styles.formHeading}>Crear Turno</h3> {/* Aplica el estilo del encabezado */}
            <form onSubmit={update}>
                <div className='mb-3'>
                    <label className='form-label'>Nombre Completo</label>
                    <input
                        value={nombreTitular}
                        onChange={(e) => setNombreTitular(e.target.value)}
                        type='text'
                        className='form-control'
                        placeholder='Ingrese nombre titular'
                    />
                </div>

                <div className='mb-3'>
                    <label className='form-label'>Curp</label>
                    <input
                        value={curp}
                        onChange={(e) => setCurp(e.target.value)}
                        type='text'
                        className='form-control'
                        placeholder='Ingrese curp'
                    />
                </div>

                <div className='mb-3'>
                    <label className='form-label'>Nombre</label>
                    <input
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                        type='text'
                        className='form-control'
                        placeholder='Ingrese nombre'
                    />
                </div>

                <div className='mb-3'>
                    <label className='form-label'>Paterno</label>
                    <input
                        value={paterno}
                        onChange={(e) => setPaterno(e.target.value)}
                        type='text'
                        className='form-control'
                        placeholder='Ingrese paterno'
                    />
                </div>

                <div className='mb-3'>
                    <label className='form-label'>Materno</label>
                    <input
                        value={materno}
                        onChange={(e) => setMaterno(e.target.value)}
                        type='text'
                        className='form-control'
                        placeholder='Ingrese materno'
                    />
                </div>

                <div className='mb-3'>
                    <label className='form-label'>Telefono</label>
                    <input
                        value={telefono}
                        onChange={(e) => setTelefono(e.target.value)}
                        type='text'
                        className='form-control'
                        placeholder='Ingrese telefono'
                    />
                </div>

                <div className='mb-3'>
                    <label className='form-label'>Celular</label>
                    <input
                        value={celular}
                        onChange={(e) => setCelular(e.target.value)}
                        type='text'
                        className='form-control'
                        placeholder='Ingrese celular'
                    />
                </div>

                <div className='mb-3'>
                    <label className='form-label'>Correo</label>
                    <input
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
                    <label className='form-label'>Municipio:</label>
                    <select
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
                    <label className='form-label'>Asunto:</label>
                    <select
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
                <button type='submit' className='btn btn-primary'>Actualizar Turno</button>
                <button type='button' className='btn btn-secondary' onClick={() => navigate('/')}>Volver</button>
            </form>
        </div>
    );
}

export default CompEditTurno;
