import Swal from 'sweetalert2';

const mensaje = (tipo, titulo, texto, liga) => {
    Swal.fire({
        icon: tipo,
        title: titulo,
        text: texto,
        footer: liga
    });
}

const getTextInputById = (id) => {
    const element = document.getElementById(id);
    return element ? element.value.trim() : "";
}

const validaLogin = () => {
    let user = getTextInputById("user").trim();
    let pass = getTextInputById("pass").trim();

    if (user === '') {
        mensaje('error', 'Usuario Vacío', 'El campo Usuario no puede ir vacío', 'Favor de llenar el campo solicitado');
        return false;
    } else if (pass === '') {
        mensaje('error', 'Contraseña Vacía', 'El campo Contraseña no puede ir vacío', 'Favor de llenar el campo solicitado');
        return false;
    }

    return true;
}

export default validaLogin;
