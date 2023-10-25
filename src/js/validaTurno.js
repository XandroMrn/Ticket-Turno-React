import Swal from 'sweetalert2';

const mensaje = (tipo, titulo, texto, liga) => {
    Swal.fire({
        icon: tipo,
        title: titulo,
        text: texto,
        footer: liga
    });
}

// Función para obtener el valor de un campo de entrada por ID
const getTextInputById = (id) => {
    const element = document.getElementById(id);
    return element ? element.value.trim() : "";
}

const validaRegistro = () => {
    let nombreTitular = getTextInputById("nombreTitular");
    let curp = getTextInputById("curp");
    let nombre = getTextInputById("nombre");
    let paterno = getTextInputById("paterno");
    let materno = getTextInputById("materno");
    let telefono = getTextInputById("telefono");
    let celular = getTextInputById("celular");
    let correo = getTextInputById("correo");
    let selectedNivel = getTextInputById("nivel");
    let selectedMunicipio = getTextInputById("municipio");
    let selectedAsunto = getTextInputById("asunto");

    if (!nombreTitular) {
        mensaje('error', 'Nombre Titular Error', 'El campo Nombre Completo no puede ir vacío', 'Favor de llenar el campo solicitado');
        return false;
    } else if (!curp) {
        mensaje('error', 'CURP Error', 'El campo CURP no puede ir vacío', 'Favor de llenar el campo solicitado');
        return false;
    } else if (!nombre) {
        mensaje('error', 'Nombre Error', 'El campo Nombre no puede ir vacío', 'Favor de llenar el campo solicitado');
        return false;
    } else if (!paterno) {
        mensaje('error', 'Apellido Paterno Error', 'El campo Apellido Paterno no puede ir vacío', 'Favor de llenar el campo solicitado');
        return false;
    } else if (!materno) {
        mensaje('error', 'Apellido Materno Error', 'El campo Apellido Materno no puede ir vacío', 'Favor de llenar el campo solicitado');
        return false;
    } else if (!telefono) {
        mensaje('error', 'Teléfono Error', 'El campo Teléfono no puede ir vacío', 'Favor de llenar el campo solicitado');
        return false;
    } else if (!celular) {
        mensaje('error', 'Celular Error', 'El campo Celular no puede ir vacío', 'Favor de llenar el campo solicitado');
        return false;
    } else if (!correo) {
        mensaje('error', 'Email Error', 'El campo Correo no puede ir vacío', 'Favor de llenar el campo solicitado');
        return false;
    } else if (!selectedNivel) {
        mensaje('error', 'Nivel Error', 'El campo Nivel no puede ir vacío', 'Favor de seleccionar su nivel');
        return false;
    } else if (!selectedMunicipio) {
        mensaje('error', 'Municipio Error', 'El campo Municipio no puede ir vacío', 'Favor de seleccionar su municipio');
        return false;
    } else if (!selectedAsunto) {
        mensaje('error', 'Asunto Error', 'El campo Asunto no puede ir vacío', 'Favor de seleccionar su asunto');
        return false;
    }

    // Si todas las validaciones pasan, se retorna 'true' para permitir el envío de datos.
    return true;
}

export default validaRegistro;
