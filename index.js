
$(document).ready(function () {
    getListarUsuarios();
});
//funcion para listar los usuarios al consultar la API
async function getListarUsuarios() {
    const url = "http://localhost:3000/api/users";
    var response = await ajaxDataGet(url);
    console.log("response:", response);
    crearFilas(response.data);
}
//funcion para crear filas de la tabla con los datos de todos los usuarioa
function crearFilas(data) {
    console.log('entro for: ', data);
    var html = "";
    data.forEach(element => {
        html = html + '<tr>' + '<td>' + element.nombre + '</td> <td>' + element.apellidoPaterno + '</td><td>' + element.apellidoMaterno + '</td><td>' + element.telefono + '</td><td>' + element.correo + '</td><td>' + element.matricula + '</td><td> <button onclick="onEliminar(this)" data-id="' + element._id + '" class="btn btn-danger">Eliminar</button> <button onclick="onEditar(this)" data-id="' + element._id + '" class="btn btn-success">Editar</button> </td></tr>';
    });
    console.log(html)
    $('#contentTR').html(html);
}
//funcion para guardar los datos del formulario, de un nuevo usuario
async function onGuardar() {
    const url = "http://localhost:3000/api/users";
    console.log("datos formularios");
    var data = {
        "nombre": $('#nombre').val(),
        "apellidoPaterno": $('#apellidoPaterno').val(),
        "apellidoMaterno": $('#apellidoMaterno').val(),
        "telefono": $('#telefono').val(),
        "correo": $('#correo').val(),
        "matricula": $('#matricula').val(),
    }
    console.log("enviar data:", data);
    var response = await ajaxData(url, data, "POST");
    console.log("response:", response);
    alert(response.mensaje);
    limpiar();
    getListarUsuarios();
}
// funcion para eliminar el usuario selecionado
async function onEliminar(element) {
    var id = $(element).data('id');
    console.log("id: ", id);
    var url = "http://localhost:3000/api/users/" + id;
    var response = await ajaxDataDelet(url);
    alert(response.mensaje);
    getListarUsuarios();
}
//funcion para cargar los datos del usario selecionado
async function onEditar(element) {
    var id = $(element).data('id');
    var url = "http://localhost:3000/api/users/" + id;
    var response = await ajaxDataGet(url);
    $('#nombre').val(response.data.nombre);
    $('#apellidoPaterno').val(response.data.apellidoPaterno);
    $('#apellidoMaterno').val(response.data.apellidoMaterno);
    $('#telefono').val(response.data.telefono);
    $('#correo').val(response.data.correo);
    $('#matricula').val(response.data.matricula);
    $('#contenActualizar').html('<button data-id="' + id + '" onclick="onActualizar(this)" class="btn btn-success">Actualizar</button>');
}
//funcion para mandar actualizar los datos
async function onActualizar(element) {
    var id = $(element).data('id');
    var url = "http://localhost:3000/api/users/" + id;

    var data = {
        "nombre": $('#nombre').val(),
        "apellidoPaterno": $('#apellidoPaterno').val(),
        "apellidoMaterno": $('#apellidoMaterno').val(),
        "telefono": $('#telefono').val(),
        "correo": $('#correo').val(),
        "matricula": $('#matricula').val(),
    }
    console.log("enviar data:", data);
    var response = await ajaxData(url, data, "PUT");
    console.log("response:", response);
    alert(response.mensaje);
    getListarUsuarios();
}
// funcion para limpiar el formulario
function limpiar() {
    $('#contenActualizar').html('');
    $('#nombre').val('');
    $('#apellidoPaterno').val('');
    $('#apellidoMaterno').val('');
    $('#telefono').val('');
    $('#correo').val('');
    $('#matricula').val('');
}
// funcion ajax para post y put
async function ajaxData(url, data, tipo) {
    try {
        const response = await fetch(url, {
            method: tipo,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });
        const respuesta = JSON.parse(await response.text());
        //const respuesta = await response.text();
        
        return respuesta;

    } catch (err) {
        console.log('Error en el ajax:', err);
        alert(err);
    }
}
//funcion ajax para get
async function ajaxDataGet(url) {
    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        });
        const respuesta = JSON.parse(await response.text());
        //const respuesta = await response.text();
        return respuesta;

    } catch (err) {
        console.log('Error en el ajax:', err);
        alert(err);
    }
}
//funcion ajax para delete
async function ajaxDataDelet(url) {
    try {
        const response = await fetch(url, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
        });
        const respuesta = JSON.parse(await response.text());
        //const respuesta = await response.text();
        return respuesta;

    } catch (err) {
        console.log('Error en el ajax:', err);
        alert(err);
    }
}