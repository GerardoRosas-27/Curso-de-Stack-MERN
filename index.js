
$(document).ready(function () {
	getListarUsuarios();
});
async function getListarUsuarios() {
    const url = "http://localhost:3000/api/users";
    var response = await ajaxDataGet(url);
    console.log("response:", response);
    crearFilas(response.data);
}

function crearFilas(data){
    console.log('entro for: ', data);
    var html = "";
    data.forEach(element => {
       html = html + '<tr>' + '<td>'+ element.nombre + '</td> <td>'+ element.apellidoPaterno + '</td><td>'+ element.apellidoMaterno + '</td><td>'+ element.telefono + '</td><td>'+ element.correo + '</td><td>'+ element.matricula + '</td><td> <button onclick="onEliminar()" class="btn btn-success">Eliminar</button> </td></tr>';
    });
    console.log(html)
    $('#contentTR').html(html);
}


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
    getListarUsuarios();  
}

async function onEliminar(){
    console.log("id: ");
    var url= "http://localhost:3000/api/users/6079f40bf345662cf4e5a948";
    var response = await ajaxDataDelet(url);
    alert(response.mensaje);
}

async function ajaxData(url, data, tipo) {
	try {
		const response = await fetch(url, {
			method: tipo,
            headers: {'Content-Type': 'application/json'},
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
async function ajaxDataGet(url) {
	try {
		const response = await fetch(url, {
			method: 'GET',
            headers: {'Content-Type': 'application/json'},
		});
		const respuesta = JSON.parse(await response.text());
        //const respuesta = await response.text();
		return respuesta;

	} catch (err) {
		console.log('Error en el ajax:', err);
        alert(err);
	}
}
async function ajaxDataDelet(url) {
	try {
		const response = await fetch(url, {
			method: 'DELETE',
            headers: {'Content-Type': 'application/json'},
		});
		const respuesta = JSON.parse(await response.text());
        //const respuesta = await response.text();
		return respuesta;

	} catch (err) {
		console.log('Error en el ajax:', err);
        alert(err);
	}
}