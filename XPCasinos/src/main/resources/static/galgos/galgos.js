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

class Galgo {
    constructor(dorsal, nombre, ritmo, experiencia) {
        this.dorsal = dorsal;
        this.nombre = nombre;
        this.ritmo = ritmo;
        this.experiencia = experiencia;
        this.cuota = 0;
        this.cantidadApostada = 0;
        this.distancia = 0;
        this.terminoCarrera = "";
        this.ganancia = 0;
    }
}

// Definir la lista de galgos fuera de $(document).ready()
var listaGalgos = [];

$(document).ready(function() {
    // Realizar la llamada AJAX para obtener la lista de galgos
    $.ajax({
        type: 'GET',
        url: '/galgos/obtener',
        success: function(listaGalgosDTO) {
            // Procesar los datos recibidos y crear instancias de Galgo
            listaGalgosDTO.forEach(function(GalgoDTO) {
                var galgo = new Galgo (
                    GalgoDTO.dorsal,
                    GalgoDTO.nombre,
                    GalgoDTO.ritmo,
                    GalgoDTO.experiencia
                );
                listaGalgos.push(galgo); // Agregar el galgo a la lista
            });
            console.log("Lista de galgos:", listaGalgos); // Solo para depuración
            
            // Ahora que la lista de galgos está completa, realizar las operaciones necesarias
            obtenerListaAleatoria();
            calcularCuotas(listaGalgosCarrera);
            mostrarGalgos(listaGalgosCarrera);
            mostrarCarrera(listaGalgosCarrera);
            mostrarPremios(listaGalgosCarrera);
        },
        error: function(error) {
            console.error("Error al obtener los galgos:", error);
        }
    });
});


function calcularCuotas(galgos) {
    for (let galgo of galgos) {
        let sumaRitmoExperiencia = galgo.ritmo + galgo.experiencia;

        if (sumaRitmoExperiencia < 150) {
            galgo.cuota = 40;
        } else if (sumaRitmoExperiencia >= 150 && sumaRitmoExperiencia < 160) {
            galgo.cuota = 30;
        } else if (sumaRitmoExperiencia >= 160 && sumaRitmoExperiencia < 170) {
            galgo.cuota = 20;
        } else if (sumaRitmoExperiencia >= 170 && sumaRitmoExperiencia < 180) {
            galgo.cuota = 10;
        } else if (sumaRitmoExperiencia >= 180 && sumaRitmoExperiencia < 190) {
            galgo.cuota = 2.8;
        } else {
            galgo.cuota = 1.9;
        }
    }
}

calcularCuotas(listaGalgos);

var listaGalgosCarrera = [];

// Función para obtener una lista aleatoria de galgos
function obtenerListaAleatoria() {
    // Copiar la lista original para no modificarla
    var galgos = listaGalgos.slice();

    // Mezclar aleatoriamente la lista de galgos
    for (let i = galgos.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
    [galgos[i], galgos[j]] = [galgos[j], galgos[i]];
    }

    // Tomar los primeros 'cantidad' elementos de la lista mezclada
    listaGalgosCarrera = galgos.slice(0, 8);
}

function mostrarGalgos(galgos) {
    var tabla = document.getElementById("tablaGalgos");

    for (var i = 0; i < galgos.length; i++) {
        var galgo = galgos[i];
        var fila = tabla.insertRow();

        var nombreCell = fila.insertCell(0);
        nombreCell.textContent = galgo.nombre;

        var dorsalCell = fila.insertCell(1);
        dorsalCell.textContent = galgo.dorsal;

        var cuotaCell = fila.insertCell(2);
        cuotaCell.textContent = "x"+galgo.cuota;

        var apostarCell = fila.insertCell(3);
        var botonApostar = document.createElement("button");
        botonApostar.textContent = "Apostar";
        botonApostar.addEventListener("click", crearApostarHandler(i));
        apostarCell.appendChild(botonApostar);
    }
}

function crearApostarHandler(index) {
    return function() {
        apostar(index);
    };
}

function mostrarCarrera(galgos) {
    var tabla = document.getElementById("tablaCarrera");

    for (var galgo of galgos) {
    var fila = tabla.insertRow();

    var dorsalCell = fila.insertCell(0);
    dorsalCell.textContent = galgo.dorsal;

    var progresoCell = fila.insertCell(1);
    progresoCell.innerHTML = `
    <div class="progress">
        <div class="progress-bar" role="progressbar" aria-valuenow="${galgo.distancia}" aria-valuemin="0" aria-valuemax="100" style="width: ${galgo.distancia}%;">
            ${galgo.distancia.toFixed(0)}%
        </div>
    </div>
    `

    var metaCell = fila.insertCell(2);
    metaCell.textContent = galgo.terminoCarrera;
    }
}

var ganancia = 0;
function mostrarPremios(galgos) {
    var tabla = document.getElementById("tablaPremios");

    for (var galgo of galgos) {
    var fila = tabla.insertRow();

    var dorsalCell = fila.insertCell(0);
    dorsalCell.textContent = galgo.dorsal;

    var cuotaCell = fila.insertCell(1);
    cuotaCell.textContent = galgo.cantidadApostada+"€";

    var apostarCell = fila.insertCell(2);
    apostarCell.textContent = galgo.ganancia+"€";
    }
}

function borrarContenidoTablaPremios() {
    var tabla = document.getElementById("tablaPremios");
    var filas = tabla.rows;

    // Elimina todas las filas, excepto la primera que es el encabezado
    while (filas.length > 2) {
        tabla.deleteRow(2);
    }
}

document.getElementById("botonBorrar").addEventListener("click", function() {
    listaGalgosCarrera.forEach(function(galgo) {
        galgo.cantidadApostada = 0;
    });

    cantidadTotalApostada = 0;
    document.getElementById("apuestaLabel").textContent = "Apuesta total: " + cantidadTotalApostada + "€";

    borrarContenidoTablaPremios();
    mostrarPremios(listaGalgosCarrera);
});

var cantidadTotalApostada = 0;
function apostar(index) {
    var cantidadApostada = parseFloat(document.getElementById("valorApuesta").value);

    if (isNaN(cantidadApostada) || cantidadApostada <= 0) {
        alert("Por favor, ingresa una cantidad válida para apostar.");
        return;
    }

    if (cantidadApostada > saldo) {
        alert("No tienes saldo suficiente para realizar esta apuesta.");
        return;
    }

    cantidadTotalApostada = cantidadTotalApostada + cantidadApostada;
    document.getElementById("apuestaLabel").textContent = "Apuesta total: " + cantidadTotalApostada + "€";

    saldo -= cantidadApostada; // Restar la cantidad apostada al saldo
    var galgo = listaGalgosCarrera[index];
    galgo.cantidadApostada += cantidadApostada;

    // Limpiar el valor del input de apuesta después de hacer la apuesta
    document.getElementById("valorApuesta").value = "";

    borrarContenidoTablaPremios();
    mostrarPremios(listaGalgosCarrera);
}

function borrarContenidoTabla() {
    var tabla = document.getElementById("tablaCarrera");
    var filas = tabla.rows;

    // Elimina todas las filas, excepto la primera que es el encabezado
    while (filas.length > 2) {
        tabla.deleteRow(2);
    }
}

document.getElementById("botonPlay").addEventListener("click", function() {
    simularCarrera();
});

var contador = 0;
function simularTurno() {
    for (var i = 0; i < listaGalgosCarrera.length; i++) {
        if (listaGalgosCarrera[i].terminoCarrera === "") {
            // Calcular la distancia para este turno
            var ritmo = listaGalgosCarrera[i].ritmo;
            var experiencia = listaGalgosCarrera[i].experiencia;
            var aleatorio = Math.floor(Math.random() * (20 - 12 + 1)) + 12;; // Número aleatorio entre 12 y 20
            
            var distanciaTurno = ((ritmo + experiencia) / aleatorio);
            
            // Actualizar la distancia recorrida
            if (listaGalgosCarrera[i].distancia < 100) {
                listaGalgosCarrera[i].distancia += distanciaTurno;
            }

            if (listaGalgosCarrera[i].distancia >= 100) {
                listaGalgosCarrera[i].distancia = 100;
                listaGalgosCarrera[i].terminoCarrera = "Meta";
                contador = contador + 1;
            }
        }
    }
    listaGalgosCarrera.sort((a, b) => b.distancia - a.distancia);
}


function simularCarrera() {
    var intervalId = setInterval(function () {
        simularTurno(listaGalgosCarrera);
        borrarContenidoTabla();
        mostrarCarrera(listaGalgosCarrera);

        if (contador == 8) {
            calcularPremios(listaGalgosCarrera);
            clearInterval(intervalId);
        }
    }, 1000);
}

function calcularPremios(galgos) {
    galgos.sort((a, b) => b.distancia - a.distancia);
    var gananciaTotal = 0;
    for (let i = 0; i < Math.min(4, galgos.length); i++) {
        if (i === 0) {
            // 1º lugar: Multiplicar cantidadApostada por 2 y luego por la cuota
            galgos[i].ganancia = (galgos[i].cantidadApostada * 2 * galgos[i].cuota).toFixed(2);
        } else if (i === 1) {
            // 2º lugar: Multiplicar cantidadApostada por 1.5 y luego por la cuota
            galgos[i].ganancia = (galgos[i].cantidadApostada * 1.5 * galgos[i].cuota).toFixed(2);
        } else if (i === 2) {
            // 3º lugar: Multiplicar cantidadApostada por 1.3 y luego por la cuota
            galgos[i].ganancia = (galgos[i].cantidadApostada * 1.3 * galgos[i].cuota).toFixed(2);
        } else if (i === 3) {
            // 4º lugar: Multiplicar cantidadApostada por 1.2 y luego por la cuota
            galgos[i].ganancia = (galgos[i].cantidadApostada * 1.2 * galgos[i].cuota).toFixed(2);
        }
        gananciaTotal += parseFloat(galgos[i].ganancia);
    }
    saldo += gananciaTotal; // Sumar la ganancia total al saldo
    document.getElementById("ganancia").textContent = "Ganancia: " + gananciaTotal + "€";
    
    borrarContenidoTablaPremios();
    mostrarPremios(listaGalgosCarrera);
    cantidadTotalApostada = 0;
    document.getElementById("apuestaLabel").textContent = "Apuesta total: " + cantidadTotalApostada + "€";
    
    actualizarSaldoAjax(saldo);
    
    function actualizarPaginaDespuesDe3Segundos() {
        setTimeout(function() {
            location.reload(); // Actualizar la página
        }, 5000); // 5 segundos
    }

    // Llamar a la función para actualizar la página después de mostrar los premios
    actualizarPaginaDespuesDe3Segundos();
}




var fichaSeleccionada = null;
var apuestas = [];
var cantidadApostada = 0;
var saldoTexto = document.getElementById("saldo").innerHTML;
var saldo = parseFloat(saldoTexto.replace("Saldo: ", "").replace("€", ""));
var depositarBtn = document.querySelector('#depositarModal button.btn-success');
var retirarBtn = document.querySelector('#retirarModal button.btn-success');
var saldoElement = document.getElementById('saldo');
var saldoDatosElement = document.getElementById('saldoDatos');

function mostrarGanancia(ganancia) {
    var gananciaElement = document.getElementById('ganancia');
    gananciaElement.innerHTML = `Ganancia: ${ganancia.toFixed(2)}€`;
}



var depositarBtn = document.querySelector('#depositarModal button.btn-success');
var retirarBtn = document.querySelector('#retirarModal button.btn-success');

// Evento al confirmar el depósito
depositarBtn.addEventListener('click', function() {
	//Cantidad a añadir
    var inputDepositar = document.querySelector('#depositarModal input.inpuntModal');
    var cantidad = parseFloat(inputDepositar.value);
    
    //Cantidad existente
    var saldoTexto = document.getElementById("saldo").textContent;
    var saldo = parseFloat(saldoTexto.replace("Saldo: ", "").replace(" €", ""));
	
    if (!isNaN(cantidad) && cantidad > 0) {
		//Suma
    	var saldoNuevo = saldo + cantidad;
        actualizarSaldoAjax(saldoNuevo);
    }
    inputDepositar.value = ''; // Limpiar input después de depositar
});


// Evento al confirmar el retiro
retirarBtn.addEventListener('click', function() {
	//Cantidad a retirar
    var inputRetirar = document.querySelector('#retirarModal input.inpuntModal');
    var cantidad = parseFloat(inputRetirar.value);
    
    //Cantidad existente
    var saldoTexto = document.getElementById("saldo").textContent;
    var saldo = parseFloat(saldoTexto.replace("Saldo: ", "").replace(" €", ""));
    
    if (!isNaN(cantidad) && cantidad > 0 && saldo >= cantidad) {
		//Resta
		var saldoNuevo = saldo - cantidad;
        actualizarSaldoAjax(saldoNuevo);
        
    } else if (isNaN(cantidad)) {
        alert('Por favor, ingresa una cantidad válida');
    } else {
        alert('No tienes suficiente saldo para retirar esa cantidad');
    }

    inputRetirar.value = ''; // Limpiar input después de retirar
});



'use strict'

function actualizarSaldoAjax(saldoNuevo) {
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
	            document.getElementById("saldoDatos").innerHTML = `Saldo: ${saldoNuevo.toFixed(2)} €`;
        }
    });
}
