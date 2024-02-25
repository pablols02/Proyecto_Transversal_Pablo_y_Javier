function startTime() {
    var today = new Date();
    var hr = today.getHours();
    var min = today.getMinutes();
    var sec = today.getSeconds();
    //Add a zero in front of numbers<10
    min = checkTime(min);
    sec = checkTime(sec);
    document.getElementById("clock").innerHTML = hr + " : " + min + " : " + sec;
    var time = setTimeout(function(){ startTime() }, 500);
}
function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}


var depositarBtn = document.querySelector('#depositarModal button.btn-success');
var retirarBtn = document.querySelector('#retirarModal button.btn-success');

// Evento al confirmar el depósito
depositarBtn.addEventListener('click', function() {
    var inputDepositar = document.querySelector('#depositarModal input.inpuntModal');
    var cantidad = parseFloat(inputDepositar.value);
	
    if (!isNaN(cantidad) && cantidad > 0) {
		
        ingresarAjax(cantidad);
    }
    inputDepositar.value = ''; // Limpiar input después de depositar
});

// Evento al confirmar el retiro
retirarBtn.addEventListener('click', function() {
    var inputRetirar = document.querySelector('#retirarModal input.inpuntModal');
    var cantidad = parseFloat(inputRetirar.value);
    var saldoTexto = document.getElementById("saldo").innerHTML;
    var saldoNumerico = parseFloat(saldoTexto.replace("Saldo: ", "").replace("€", ""));

	
    if (!isNaN(cantidad) && cantidad > 0 && saldoNumerico >= cantidad) {
        retirarAjax(cantidad);
    } else if (isNaN(cantidad)) {
        alert('Por favor, ingresa una cantidad válida');
    } else {
        alert('No tienes suficiente saldo para retirar esa cantidad');
    }

    inputRetirar.value = ''; // Limpiar input después de retirar
});



'use strict'

function ingresarAjax(cantidad) {
    var saldoTexto = document.getElementById("saldo").textContent; // Obtener el texto completo del saldo
    var saldoNumerico = parseFloat(saldoTexto.replace("Saldo: ", "").replace(" €", "")); // Extraer el valor numérico del saldo

    var saldoNuevo = saldoNumerico + cantidad; // Sumar la cantidad ingresada al saldo existente
    var usuario = {
        idUsuario: document.getElementById("identificador").textContent,
        saldo: saldoNuevo
    };

    $.ajax(
		{
	        type: 'POST',
	        url: '/saldo/actualizar',
	        contentType: "application/json; charset=utf-8",
	        data: JSON.stringify(usuario),
	        success: function(data) {
	            document.getElementById("saldo").innerHTML = `Saldo: ${saldoNuevo.toFixed(2)} €`;
	            
        }
    });
}


function retirarAjax(cantidad) {
    var saldoTexto = document.getElementById("saldo").textContent; // Obtener el texto completo del saldo
    var saldoNumerico = parseFloat(saldoTexto.replace("Saldo: ", "").replace(" €", "")); // Extraer el valor numérico del saldo

    var saldoNuevo = saldoNumerico - cantidad; // Calcular el nuevo saldo

    var usuario = {
        idUsuario: document.getElementById("identificador").textContent, // Obtener el id del usuario
        saldo: saldoNuevo // Establecer el nuevo saldo
    };

    $.ajax({
        type: 'POST',
        url: '/saldo/actualizar',
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify(usuario),
        success: function(data) {
            document.getElementById("saldo").innerHTML = `Saldo: ${saldoNuevo.toFixed(2)} €`;
            
        }
    });
}
