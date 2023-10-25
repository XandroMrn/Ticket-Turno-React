import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import estilos from '../css/estiloShowTurnos.module.css';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import QRCode from 'qrcode';

const URI = 'http://localhost:8000/turnos/';

const CompShowTurnosLogeado = () => {
    const [turnos, setTurno] = useState([]);
    const [searchTitular, setSearchTitular] = useState('');
    const [filteredTurnos, setFilteredTurnos] = useState([]);

    useEffect(() => {
        getTurnos();
    }, []);

    // Procedimiento para mostrar todos los turnos
    const getTurnos = async () => {
        const res = await axios.get(URI);
        setTurno(res.data);
        // Llena los turnos filtrados con todos los turnos al cargar la página
        setFilteredTurnos(res.data);
    };

    // Procedimiento para eliminar un turno
    const deleteTurno = async (id) => {
        await axios.delete(`${URI}${id}`);
        getTurnos();
    };

    // Procedimiento para cambiar el estado de "pendiente" a "resuelto"
    const markAsResolved = async (id) => {
        // Realiza una solicitud PUT a la API para actualizar el estado del turno
        await axios.put(`${URI}${id}`, { estado: 'resuelto' });
        // Recarga la lista de turnos
        getTurnos();
    };

    // Procedimiento para buscar por Titular
    const searchByTitular = () => {
        const filtered = turnos.filter((turno) =>
            turno.titular.nombreTitular.toLowerCase().includes(searchTitular.toLowerCase())
        );
        setFilteredTurnos(filtered);
    };

    const getTurnoDetailsById = async (id) => {
        try {
            const response = await axios.get(`${URI}${id}`);
            const turnoData = response.data;

            if (turnoData) {
                // Obtiene el 'titular_id_titular' del turno
                const titularIdTitular = turnoData.titular_id_titular;

                // Obtiene los datos del titular asociado al turno
                const titularResponse = await axios.get(`http://localhost:8000/titulares/${titularIdTitular}`);
                const titularData = titularResponse.data;

                // Obtiene los datos del nivel, municipio y asunto del turno
                const nivelResponse = await axios.get(`http://localhost:8000/niveles/${turnoData.nivel_id_nivel}`);
                const municipioResponse = await axios.get(`http://localhost:8000/municipios/${turnoData.municipio_id_municipio}`);
                const asuntoResponse = await axios.get(`http://localhost:8000/asuntos/${turnoData.asunto_id_asunto}`);

                const nivelData = nivelResponse.data;
                const municipioData = municipioResponse.data;
                const asuntoData = asuntoResponse.data;

                return {
                    turnoData,
                    titularData,
                    nivelData,
                    municipioData,
                    asuntoData,
                };
            }
            return null; // Retorna nulo si no se encontraron datos del turno.
        } catch (error) {
            console.error('Error al obtener detalles del turno:', error);
            return null;
        }
    }

    const exportToPDF = async (id) => {
        try {
            // Obtén los detalles del turno y datos relacionados
            const details = await getTurnoDetailsById(id);

            if (details) {
                const {
                    turnoData,
                    titularData,
                    nivelData,
                    municipioData,
                    asuntoData,
                } = details;

                // Genera un código QR con la CURP del titular
                const curpQR = await QRCode.toDataURL(titularData.curp);

                const doc = new jsPDF();
                doc.text('Detalles del Turno', 10, 10);

                // Agrega el código QR al PDF
                doc.addImage(curpQR, 'PNG', 10, 30, 50, 50);

                // Agrega los detalles del turno, titular, nivel, municipio y asunto al PDF
                doc.text(`ID de Turno: ${turnoData.id_turno}`, 10, 90);
                doc.text(`Estado: ${turnoData.estado}`, 10, 100);
                doc.text(`Titular: ${titularData.nombreTitular}`, 10, 110);
                doc.text(`CURP: ${titularData.curp}`, 10, 120);
                doc.text(`Nivel: ${nivelData.nombre}`, 10, 130);
                doc.text(`Municipio: ${municipioData.nombre}`, 10, 140);
                doc.text(`Asunto: ${asuntoData.nombre}`, 10, 150);

                // Guarda o muestra el PDF
                doc.save(`turno_${turnoData.id_turno}.pdf`);
            }
        } catch (error) {
            console.error('Error al obtener detalles del turno:', error);
        }
    };

    return (
        <div className={estilos.container}>
            <div className="row">
                <div className="col">
                    <Link to="/create" className="btn btn-primary mt-2 mb-2"><i className="fa-solid fa-plus"></i></Link>
                    <Link to="/" className="btn btn-primary mt-2 mb-2"><i className="fa-solid fa-right-from-bracket"></i></Link>
                    <div className="mb-3 input-group">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Buscar por Titular"
                            value={searchTitular}
                            onChange={(e) => setSearchTitular(e.target.value)}
                        />
                        <div className="input-group-append">
                            <button
                                className="btn btn-primary"
                                onClick={searchByTitular}
                            >
                                Buscar
                            </button>
                        </div>
                    </div>
                    <table className={estilos.table}>
                        <thead className={estilos.tablePrimary}>
                            <tr>
                                <th>Turno</th>
                                <th>Titular</th>
                                <th>CURP</th>
                                <th>Nombre</th>
                                <th>Apellido Paterno</th>
                                <th>Apellido Materno</th>
                                <th>Telefono</th>
                                <th>Celular</th>
                                <th>Correo</th>
                                <th>Nivel</th>
                                <th>Municipio</th>
                                <th>Asunto</th>
                                <th>Estado</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredTurnos.map((turno) => (
                                <tr key={turno.id_turno}>
                                    <td>{turno.id_turno}</td>
                                    <td>{turno.titular.nombreTitular}</td>
                                    <td>{turno.titular.curp}</td>
                                    <td>{turno.titular.nombre}</td>
                                    <td>{turno.titular.paterno}</td>
                                    <td>{turno.titular.materno}</td>
                                    <td>{turno.titular.telefono}</td>
                                    <td>{turno.titular.celular}</td>
                                    <td>{turno.titular.correo}</td>
                                    <td>{turno.nivel.nivel}</td>
                                    <td>{turno.municipio.nombre}</td>
                                    <td>{turno.asunto.asunto}</td>
                                    <td>{turno.estado}</td>
                                    <td>
                                        <Link to={`/edit/${turno.id_turno}`} className='btn btn-info'><i className="fa-solid fa-pen-to-square"></i></Link>
                                        <button onClick={() => deleteTurno(turno.id_turno)} className='btn btn-danger'><i className="fa-solid fa-trash-can"></i></button>
                                        <button onClick={() => markAsResolved(turno.id_turno)} className='btn btn-success'><i className="fa-solid fa-check"></i></button>
                                        <button onClick={() => exportToPDF(turno.id_turno)} className='btn btn-secondary'><i className="fa-solid fa-file-pdf"></i></button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default CompShowTurnosLogeado;
