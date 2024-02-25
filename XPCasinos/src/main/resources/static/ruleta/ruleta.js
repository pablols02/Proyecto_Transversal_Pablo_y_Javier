// funcion para mostrar la hora
function mostrarHora() {
    var elementoHora = document.getElementById("HoraAct");
    var fechaActual = new Date();
    var hora = fechaActual.getHours();
    var minutos = fechaActual.getMinutes();
    var segundos = fechaActual.getSeconds();

    // Agrega un cero delante si los minutos o segundos son menores que 10
    minutos = minutos < 10 ? "0" + minutos : minutos;
    segundos = segundos < 10 ? "0" + segundos : segundos;

    // Muestra la hora actual en el elemento con id "hora"
    elementoHora.textContent = hora + ":" + minutos + ":" + segundos;
}

setInterval(mostrarHora, 1000);

//declaracion de variables

class Apuesta {
    constructor(numero, color, cantidadApostada) {
        this.numero = numero;
        this.color = color;
        this.cantidadApostada = cantidadApostada;
    }
}

class ApuestaEsp {
    constructor(clase, cantidadApostada) {
        this.clase = clase;
        this.cantidadApostada = cantidadApostada;
    }
}

class Numero {
    constructor(num, cantidadVeces) {
        this.num = num;
        this.cantidadVeces = cantidadVeces;
    }
}

var fichaSeleccionada = 10;
var bolita = 0;
var Apuesta_tot = parseInt(document.getElementById("cant_apuesta_info").innerHTML);

var fichasTexto = document.getElementById("fichas_info").textContent;
var fichas = parseFloat(fichasTexto.replace(" €", ""));


var saldo = 0;
var ganancias = parseInt(document.getElementById("ganancias_info").innerHTML);
var apuestas = [];
var ApuestasEsp = [];
var resultados = [];
var btnAcep = false;

var Nrojos = [1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36];
var Nnegros = [2, 4, 6, 8, 10, 11, 13, 15, 17, 20, 22, 24, 26, 28, 29, 31, 33, 35];

var PrimeraD = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
var SegundaD = [13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];
var TerceraD = [25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36];

var PrimeraC = [1, 4, 7, 10, 13, 16, 19, 22, 25, 28, 31, 34];
var SegundaC = [2, 5, 8, 11, 14, 17, 20, 23, 26, 29, 32, 35];
var TerceraC = [3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36];

var Pares = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36];
var Impares = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35];

var al18 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
var al36 = [19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36];


//Modal ingresos y retiradas

function VistaModalPrin() {
    document.getElementById("myModalPrin").style.display = "block";
}

function cerrarModalPrin() {
    document.getElementById("myModalPrin").style.display = "none";
}

function mostrarModalIng() {
    document.getElementById("myModalIng").style.display = "block";
}

function mostrarModalRet() {
    document.getElementById("myModalRet").style.display = "block";
}

function cerrarModalIng() {
    document.getElementById("myModalIng").style.display = "none";
}

function cerrarModalRet() {
    document.getElementById("myModalRet").style.display = "none";
}




//Modal Calientes

function VistaModalCalientes() {
    document.getElementById("myModalCal").style.display = "block";
}

function cerrarModalCalientes() {
    document.getElementById("myModalCal").style.display = "none";
}

document.getElementById("btn_Calientes").addEventListener("click", VistaModalCalientes, false);
document.getElementById("close4").addEventListener("click", cerrarModalCalientes, false);

//Modal resultados

function VistaModalRes() {
    document.getElementById("myModalRes").style.display = "block";
}

function cerrarModalRes() {
    document.getElementById("myModalRes").style.display = "none";
}

document.getElementById("btn_resultadosnav").addEventListener("click", VistaModalRes, false);
document.getElementById("close5").addEventListener("click", cerrarModalRes, false);

//even listeners
document.getElementById("numR0").addEventListener("click", function () {
    agregarApuesta(0);
    mostrarFicha(0);
}, false);

document.getElementById("numR3").addEventListener("click", function () {
    agregarApuesta(3);
    mostrarFicha(3);
}, false);

document.getElementById("numR6").addEventListener("click", function () {
    agregarApuesta(6);
    mostrarFicha(6);
}, false);

document.getElementById("numR9").addEventListener("click", function () {
    agregarApuesta(9);
    mostrarFicha(9);
}, false);

document.getElementById("numR12").addEventListener("click", function () {
    agregarApuesta(12);
    mostrarFicha(12);
}, false);

document.getElementById("numR15").addEventListener("click", function () {
    agregarApuesta(15);
    mostrarFicha(15);
}, false);

document.getElementById("numR18").addEventListener("click", function () {
    agregarApuesta(18);
    mostrarFicha(18);
}, false);

document.getElementById("numR21").addEventListener("click", function () {
    agregarApuesta(21);
    mostrarFicha(21);
}, false);

document.getElementById("numR24").addEventListener("click", function () {
    agregarApuesta(24);
    mostrarFicha(24);
}, false);

document.getElementById("numR27").addEventListener("click", function () {
    agregarApuesta(27);
    mostrarFicha(27);
}, false);

document.getElementById("numR30").addEventListener("click", function () {
    agregarApuesta(30);
    mostrarFicha(30);
}, false);

document.getElementById("numR33").addEventListener("click", function () {
    agregarApuesta(33);
    mostrarFicha(33);
}, false);

document.getElementById("numR36").addEventListener("click", function () {
    agregarApuesta(36);
    mostrarFicha(36);
}, false);

document.getElementById("numR2").addEventListener("click", function () {
    agregarApuesta(2);
    mostrarFicha(2);
}, false);

document.getElementById("numR5").addEventListener("click", function () {
    agregarApuesta(5);
    mostrarFicha(5);
}, false);
document.getElementById("numR8").addEventListener("click", function () {
    agregarApuesta(8);
    mostrarFicha(8);
}, false);

document.getElementById("numR11").addEventListener("click", function () {
    agregarApuesta(11);
    mostrarFicha(11);
}, false);

document.getElementById("numR14").addEventListener("click", function () {
    agregarApuesta(14);
    mostrarFicha(14);
}, false);

document.getElementById("numR17").addEventListener("click", function () {
    agregarApuesta(17);
    mostrarFicha(17);
}, false);

document.getElementById("numR20").addEventListener("click", function () {
    agregarApuesta(20);
    mostrarFicha(20);
}, false);

document.getElementById("numR23").addEventListener("click", function () {
    agregarApuesta(23);
    mostrarFicha(23);
}, false);

document.getElementById("numR26").addEventListener("click", function () {
    agregarApuesta(26);
    mostrarFicha(26);
}, false);

document.getElementById("numR29").addEventListener("click", function () {
    agregarApuesta(29);
    mostrarFicha(29);
}, false);

document.getElementById("numR32").addEventListener("click", function () {
    agregarApuesta(32);
    mostrarFicha(32);
}, false);

document.getElementById("numR35").addEventListener("click", function () {
    agregarApuesta(35);
    mostrarFicha(35);
}, false);

document.getElementById("numR1").addEventListener("click", function () {
    agregarApuesta(1);
    mostrarFicha(1);
}, false);

document.getElementById("numR4").addEventListener("click", function () {
    agregarApuesta(4);
    mostrarFicha(4);
}, false);

document.getElementById("numR7").addEventListener("click", function () {
    agregarApuesta(7);
    mostrarFicha(7);
}, false);

document.getElementById("numR10").addEventListener("click", function () {
    agregarApuesta(10);
    mostrarFicha(10);
}, false);

document.getElementById("numR13").addEventListener("click", function () {
    agregarApuesta(13);
    mostrarFicha(13);
}, false);

document.getElementById("numR16").addEventListener("click", function () {
    agregarApuesta(16);
    mostrarFicha(16);
}, false);

document.getElementById("numR19").addEventListener("click", function () {
    agregarApuesta(19);
    mostrarFicha(19);
}, false);

document.getElementById("numR22").addEventListener("click", function () {
    agregarApuesta(22);
    mostrarFicha(22);
}, false);

document.getElementById("numR25").addEventListener("click", function () {
    agregarApuesta(25);
    mostrarFicha(25);
}, false);

document.getElementById("numR28").addEventListener("click", function () {
    agregarApuesta(28);
    mostrarFicha(28);
}, false);

document.getElementById("numR31").addEventListener("click", function () {
    agregarApuesta(31);
    mostrarFicha(31);
}, false);

document.getElementById("numR34").addEventListener("click", function () {
    agregarApuesta(34);
    mostrarFicha(34);
}, false);

document.getElementById("2to1").addEventListener("click", function () {
    agregarApuestaEspecial("2to1");
    mostrarFichaEsp("2to1", "claseEsp_1");
});
document.getElementById("2to2").addEventListener("click", function () {
    agregarApuestaEspecial("2to2");
    mostrarFichaEsp("2to2", "claseEsp_2");
});
document.getElementById("2to3").addEventListener("click", function () {
    agregarApuestaEspecial("2to3");
    mostrarFichaEsp("2to3", "claseEsp_3");
});
document.getElementById("1Doc").addEventListener("click", function () {
    agregarApuestaEspecial("Pdoc");
    mostrarFichaEsp("Pdoc", "claseEsp_4");
});
document.getElementById("2Doc").addEventListener("click", function () {
    agregarApuestaEspecial("Sdoc");
    mostrarFichaEsp("Sdoc", "claseEsp_5");
});
document.getElementById("3Doc").addEventListener("click", function () {
    agregarApuestaEspecial("Tdoc")
    mostrarFichaEsp("Tdoc", "claseEsp_6");
});
document.getElementById("1to18").addEventListener("click", function () {
    agregarApuestaEspecial("to18");
    mostrarFichaEsp("to18", "claseEsp_7");
});
document.getElementById("EVEN").addEventListener("click", function () {
    agregarApuestaEspecial("even");
    mostrarFichaEsp("even", "claseEsp_8");
});
document.getElementById("ColorR").addEventListener("click", function () {
    agregarApuestaEspecial("rojo");
    mostrarFichaEsp("rojo", "claseEsp_9");
});
document.getElementById("ColorN").addEventListener("click", function () {
    agregarApuestaEspecial("negro");
    mostrarFichaEsp("negro", "claseEsp_10");
});
document.getElementById("ODD").addEventListener("click", function () {
    agregarApuestaEspecial("odd");
    mostrarFichaEsp("odd", "claseEsp_11");
});
document.getElementById("19to36").addEventListener("click", function () {
    agregarApuestaEspecial("to36");
    mostrarFichaEsp("to36", "claseEsp_12");
});

//fichas

document.getElementById("Ficha10").addEventListener("click", function () {
    seleccionarFicha(10);
}, false);

document.getElementById("Ficha20").addEventListener("click", function () {
    seleccionarFicha(20);
}, false);

document.getElementById("Ficha50").addEventListener("click", function () {
    seleccionarFicha(50);
}, false);

document.getElementById("Ficha100").addEventListener("click", function () {
    seleccionarFicha(100);
}, false);

document.getElementById("Ficha200").addEventListener("click", function () {
    seleccionarFicha(200);
}, false);

//botones acep y borrar

document.getElementById("btn_borrar").addEventListener("click", function () {
    borrarApuestas();
}, false);

document.getElementById("Btn_aceptarApu").addEventListener("click", function () {
    FinalizarP();
}, false);
/*
document.getElementById("GoingIndex").addEventListener("click", function () {
    window.alert("yendo al index");
}, false);*/

//Funciones para las fichas

function seleccionarFicha(valor) {
    fichaSeleccionada = valor;
    actualizarFichaSeleccionadaEnInterfaz();
}

function actualizarFichaSeleccionadaEnInterfaz() {
    console.log("Ficha seleccionada: " + fichaSeleccionada);

    // Obtén una referencia a todos los elementos de ficha
    var fichas = document.getElementsByClassName("ficha");

    // Itera sobre todas las fichas y actualiza su estilo
    for (var i = 0; i < fichas.length; i++) {
        // Si la ficha es la seleccionada, aplica la clase "seleccionada"
        if (parseInt(fichas[i].innerText) === fichaSeleccionada) {
            console.log("Aplicando estilo a la ficha seleccionada");
            fichas[i].classList.add("seleccionada");
        } else {
            // Si no es la ficha seleccionada, quita la clase "seleccionada"
            console.log("Quitando estilo de la ficha no seleccionada");
            fichas[i].classList.remove("seleccionada");
        }
    }
}

//Celdas especiales

function agregarApuestaEspecial(claseEsp) {

    if (fichas >= fichaSeleccionada) {

        var apuestaEsp = new ApuestaEsp(claseEsp, fichaSeleccionada);
        ApuestasEsp.push(apuestaEsp);

        Apuesta_tot = Apuesta_tot + fichaSeleccionada;

        document.getElementById("fichas_info").innerHTML = `${fichas.toFixed(2)} €`;

        document.getElementById("cant_apuesta_info").innerHTML = `${Apuesta_tot.toFixed(2)} €`;

        console.log(apuestaEsp);

    } else {
        window.alert("Fichas insuficientes.")
    }
}

function validarApuestaEsp() {

    ganancias = 0;
    Apuesta_tot = 0;

    for (var j = 0; j < ApuestasEsp.length; j++) {

        console.log(ApuestasEsp[j]);

        if (ApuestasEsp[j].clase == "Pdoc") {
            for (var i = 0; i <= PrimeraD.length; i++) {
                if (bolita == PrimeraD[i]) {
                    ganancias = ganancias + (ApuestasEsp[j].cantidadApostada * 3);
                }
            }
        }

        if (ApuestasEsp[j].clase == "Sdoc") {
            for (var i = 0; i <= SegundaD.length; i++) {
                if (bolita == SegundaD[i]) {
                    ganancias = ganancias + (ApuestasEsp[j].cantidadApostada * 3);
                }
            }
        }

        if (ApuestasEsp[j].clase == "Tdoc") {
            for (var i = 0; i <= TerceraD.length; i++) {
                if (bolita == TerceraD[i]) {
                    ganancias = ganancias + (ApuestasEsp[j].cantidadApostada * 3);
                }
            }
        }

        if (ApuestasEsp[j].clase == "2to3") {
            for (var i = 0; i <= PrimeraC.length; i++) {
                if (bolita == PrimeraC[i]) {
                    ganancias = ganancias + (ApuestasEsp[j].cantidadApostada * 3);
                }
            }
        }

        if (ApuestasEsp[j].clase == "2to2") {
            for (var i = 0; i <= SegundaC.length; i++) {
                if (bolita == TerceraD[i]) {
                    ganancias = ganancias + (ApuestasEsp[j].cantidadApostada * 3);
                }
            }
        }

        if (ApuestasEsp[j].clase == "2to1") {
            for (var i = 0; i <= TerceraC.length; i++) {
                if (bolita == TerceraC[i]) {
                    ganancias = ganancias + (ApuestasEsp[j].cantidadApostada * 3);
                }
            }
        }

        if (ApuestasEsp[j].clase == "to18") {
            for (var i = 0; i <= al18.length; i++) {
                if (bolita == al18[i]) {
                    ganancias = ganancias + (ApuestasEsp[j].cantidadApostada * 2);
                }
            }
        }

        if (ApuestasEsp[j].clase == "to36") {
            for (var i = 0; i <= al36.length; i++) {
                if (bolita == al36[i]) {
                    ganancias = ganancias + (ApuestasEsp[j].cantidadApostada * 2);
                }
            }
        }

        if (ApuestasEsp[j].clase == "rojo") {
            for (var i = 0; i <= Nrojos.length; i++) {
                if (bolita == Nrojos[i]) {
                    ganancias = ganancias + (ApuestasEsp[j].cantidadApostada * 2);
                }
            }
        }

        if (ApuestasEsp[j].clase == "negro") {
            for (var i = 0; i <= Nnegros.length; i++) {
                if (bolita == Nnegros[i]) {
                    ganancias = ganancias + (ApuestasEsp[j].cantidadApostada * 2);
                }
            }
        }

        if (ApuestasEsp[j].clase == "even") {
            for (var i = 0; i <= Pares.length; i++) {
                if (bolita == Pares[i]) {
                    ganancias = ganancias + (ApuestasEsp[j].cantidadApostada * 2);
                }
            }
        }

        if (ApuestasEsp[j].clase == "odd") {
            for (var i = 0; i <= Impares.length; i++) {
                if (bolita == Nnegros[i]) {
                    ganancias = ganancias + (ApuestasEsp[j].cantidadApostada * 2);
                }
            }
        }
    }

    ApuestasEsp = [];

    fichas = fichas + ganancias;

    document.getElementById("ganancias_info").innerHTML = `${ganancias.toFixed(2)} €`;
    document.getElementById("fichas_info").innerHTML = `${fichas.toFixed(2)} €`;

    actualizarSaldoAjax(fichas);
}


function agregarApuesta(num) {
    var tipo;

    if (fichas >= fichaSeleccionada) {
        for (var i = 0; i < Nrojos.length; i++) {
            if (num === Nrojos[i]) {
                tipo = "rojo";
                break;
            }
        }

        for (var i = 0; i < Nnegros.length; i++) {
            if (num === Nnegros[i]) {
                tipo = "negro";
                break;
            }
        }

        if (num === 0) {
            tipo = "verde";
        }

        var apuesta = new Apuesta(num, tipo, fichaSeleccionada);
        apuestas.push(apuesta);
        console.log(apuesta);

        Apuesta_tot = Apuesta_tot + fichaSeleccionada;

        document.getElementById("fichas_info").innerHTML = `${fichas.toFixed(2)} €`;

        document.getElementById("cant_apuesta_info").innerHTML = `${Apuesta_tot.toFixed(2)} €`;

        console.log("Apuesta total = " + Apuesta_tot);

    } else {
        window.alert("Fichas insuficientes.")
    }
}

function validarNumeroGanador() {
    ganancias = 0;
    Apuesta_tot = 0;

    for (var i = 0; i < apuestas.length; i++) {
        if (bolita == apuestas[i].numero) {
            ganancias = ganancias + (apuestas[i].cantidadApostada * 36);
        }
    }
    fichas = fichas + ganancias;

    apuestas = [];

}

//ON/OFF de los botones con no va mas

function desactivarBotonesApuesta() {
    // Selecciona todos los botones de apuesta
    var botonesApuesta = document.querySelectorAll('.tapete-casino button');
    var BotonesFunc = document.querySelectorAll('.BotonesFunc button');

    // Desactiva cada botón de apuesta
    botonesApuesta.forEach(function (boton) {
        boton.disabled = true;
    });

    // Desactiva cada botón de funcionalidad
    BotonesFunc.forEach(function (boton) {
        boton.disabled = true;
    });
}

function activarBotonesApuesta() {
    // Selecciona todos los botones de apuesta
    var botonesApuesta = document.querySelectorAll('.tapete-casino button');
    var BotonesFunc = document.querySelectorAll('.BotonesFunc button');

    // Activa cada botón de apuesta
    botonesApuesta.forEach(function (boton) {
        boton.disabled = false;
    });

    // Activa cada botón de funcionalidad
    BotonesFunc.forEach(function (boton) {
        boton.disabled = false;
    });
}

//mostrar numale
function mostrarBolita() {
    var bolitaElement = document.getElementById("bolitaNumero"); // Ajusta el ID según tu HTML

    if (bolitaElement) {

        for (var i = 0; i < Nrojos.length; i++) {
            if (bolita === Nrojos[i]) {
                tipo = "rojo";
                bolitaElement.style.backgroundColor = "#FF0000";
                break;
            }
        }

        for (var i = 0; i < Nnegros.length; i++) {
            if (bolita === Nnegros[i]) {
                tipo = "negro";
                bolitaElement.style.backgroundColor = "#000000";
                break;
            }
        }

        if (bolita === 0) {
            tipo = "verde";
            bolitaElement.style.backgroundColor = "#008000";
        }

        bolitaElement.innerHTML = bolita + " " + tipo;
        bolitaElement.style.display = "block"; // Mostrar el número de bolita

        validarNumeroGanador();
        validarApuestaEsp();

        // Ocultar el número después de 2 segundos (ajusta el tiempo según tus necesidades)
        setTimeout(function () {
            bolitaElement.style.display = "none";
            iniciarBarraProgreso(); // Llamar a iniciarBarraProgreso después de ocultar el número
        }, 2000);
    }
}

function mostrarAvisoEmergente() {
    var avisoEmergente = document.getElementById("avisoEmergente");

    if (avisoEmergente) {
        avisoEmergente.style.display = "block"; // Mostrar el aviso
        // Ocultar el aviso después de 2 segundos (ajusta el tiempo según tus necesidades)
        setTimeout(function () {
            avisoEmergente.style.display = "none";
        }, 2000);
    }
}


function mostrarFicha(num) {

    var apuestaTotxnum = 0;
    var figura = document.getElementById(num);

    if (fichas >= fichaSeleccionada) {
        if (figura) {
            figura.style.display = "block";

            for (var i = 0; i < apuestas.length; i++) {
                if (num == apuestas[i].numero) {
                    apuestaTotxnum += apuestas[i].cantidadApostada;
                    document.getElementById(num).innerHTML = apuestaTotxnum;
                }
            }

            if (apuestaTotxnum < 20) {
                figura.style.backgroundColor = "#0000FF";
            } else if (apuestaTotxnum < 50 && apuestaTotxnum >= 20) {
                figura.style.backgroundColor = "#c81e1e";
            } else if (apuestaTotxnum < 100 && apuestaTotxnum >= 50) {
                figura.style.backgroundColor = "#FFA500";
            } else if (apuestaTotxnum >= 100 && apuestaTotxnum < 200) {
                figura.style.backgroundColor = "#00FF00";
            } else if (apuestaTotxnum >= 200) {
                figura.style.backgroundColor = "#800080";
            }

        }

        fichas -= fichaSeleccionada;
        document.getElementById("fichas_info").innerHTML = `${fichas.toFixed(2)} €`;
        //se queda con el mismo valor
    }
}

function borrarFichas() {

    for (var i = 0; i < 37; i++) {
        var figura = document.getElementById(i);

        if (figura) {
            figura.style.display = "none";
        }
    }

    for (var i = 0; i < 13; i++) {
        var figuraEsp = document.getElementById("claseEsp_" + i);
        if (figuraEsp) {
            figuraEsp.style.display = "none";
        }
    }
}

function mostrarFichaEsp(claseApuesta, claseEspId) {
    var apuestaTotxEspecial = 0;
    var figuraEsp = document.getElementById(claseEspId);

    if (fichas >= fichaSeleccionada && figuraEsp) {
        figuraEsp.style.display = "block";
        apuestaTotxEspecial = 0;

        for (var i = 0; i < ApuestasEsp.length; i++) {
            if (claseApuesta === ApuestasEsp[i].clase) {
                apuestaTotxEspecial += ApuestasEsp[i].cantidadApostada;
            }
        }

        if (apuestaTotxEspecial < 20) {
            figuraEsp.style.backgroundColor = "#0000FF";
        } else if (apuestaTotxEspecial < 50 && apuestaTotxEspecial >= 20) {
            figuraEsp.style.backgroundColor = "#c81e1e";
        } else if (apuestaTotxEspecial < 100 && apuestaTotxEspecial >= 50) {
            figuraEsp.style.backgroundColor = "#FFA500";
        } else if (apuestaTotxEspecial >= 100 && apuestaTotxEspecial < 200) {
            figuraEsp.style.backgroundColor = "#00FF00";
        } else if (apuestaTotxEspecial >= 200) {
            figuraEsp.style.backgroundColor = "#800080";
        }

        figuraEsp.innerHTML = apuestaTotxEspecial;

        fichas -= fichaSeleccionada;
        document.getElementById("fichas_info").innerHTML = `${fichas.toFixed(2)} €`;
    }
}

var generarAle = () => Math.floor(Math.random() * 37);  //funcion flecha ejemplo

function borrarApuestas() {

    ApuestasEsp = [];
    apuestas = [];

    fichas = fichas + Apuesta_tot

    Apuesta_tot = 0;

    document.getElementById("fichas_info").innerHTML = `${fichas.toFixed(2)} €`;
    document.getElementById("cant_apuesta_info").innerHTML = "0€";

    borrarFichas();
}

function FinalizarP() {
    btnAcep = true;
}

//rellenar modal resultados

function RellenarResultados() {
    for (var i = 0; i <= 100; i++) { // Iterar hasta 99
        var numerosale = Math.floor(Math.random() * 37);
        var label = document.getElementById("n" + (i + 1)); // Obtener el label por su ID
        if (label) {
            resultados.push(numerosale);
            label.innerHTML = numerosale; // Establecer el contenido del label

            if (Nrojos.includes(resultados[i])) {
                label.style.background = "red";
            } else if (Nnegros.includes(resultados[i])) {
                label.style.background = "black";
            } else {
                label.style.background = "green";
            }
        }
    }

    obtenerFrecuenciaNumeros(resultados);
}

RellenarResultados();

function obtenerFrecuenciaNumeros(arr) {
    var count = {};

    for (var i = 0; i < arr.length; i++) {
        var num = arr[i];
        if (count[num] === undefined) {
            count[num] = 1;
        } else {
            count[num]++;
        }
    }

    var numeros = [];

    var keys = Object.keys(count); // sirver para contar la cantidad de veces de cada numero

    for (var i = 0; i < keys.length; i++) {
        var num = keys[i];
        var cantidadVeces = count[num];
        numeros.push(new Numero(parseInt(num), cantidadVeces));
    }

    numeros.sort((a, b) => b.cantidadVeces - a.cantidadVeces); // ordena los numeros por frecuencia de aparicion.

    var calientes = numeros.slice(0, 5);
    var frios = numeros.slice(-5);

    for (var i = 0; i < calientes.length; i++) {
        var calienteNum = calientes[i].num;
        var calienteElement = document.getElementById((i + 1) + 'Cal');

        if (calienteElement) {
            if (Nrojos.includes(calienteNum)) {
                calienteElement.textContent = calienteNum;
                calienteElement.style.backgroundColor = "red";
            } else if (Nnegros.includes(calienteNum)) {
                calienteElement.textContent = calienteNum;
                calienteElement.style.backgroundColor = "black";
            } else {
                calienteElement.textContent = calienteNum;
                calienteElement.style.backgroundColor = "green";
            }
        }
    }

    for (var i = 0; i < frios.length; i++) {
        var frioNum = frios[i].num;
        var frioElement = document.getElementById((i + 1) + 'Fri');

        if (frioElement) {
            if (Nrojos.includes(frioNum)) {
                frioElement.textContent = frioNum;
                frioElement.style.backgroundColor = "red";
            } else if (Nnegros.includes(frioNum)) {
                frioElement.textContent = frioNum;
                frioElement.style.backgroundColor = "black";
            } else {
                frioElement.textContent = frioNum;
                frioElement.style.backgroundColor = "green";
            }
        }
    }
}


function ponerNuevoRes(num) {
    resultados.splice(-1, 1);
    resultados.unshift(num);

    for (var i = 0; i < resultados.length; i++) { // Recorrer resultados, no hasta 100
        var label = document.getElementById("n" + (i + 1));
        if (label) {
            resultados.push(resultados[i]);
            label.innerHTML = resultados[i];

            if (Nrojos.includes(resultados[i])) {
                label.style.background = "red";
            } else if (Nnegros.includes(resultados[i])) {
                label.style.background = "black";
            } else {
                label.style.background = "green";
            }
        }
    }

    obtenerFrecuenciaNumeros(resultados);
}

// barra prog

function iniciarBarraProgreso() {
    activarBotonesApuesta();
    var container = document.getElementById("barraProgr");
    var Gifrule = document.getElementById("RuleGif");

    if (!container || !Gifrule) {
        console.error("No se encontró el elemento con ID 'barraProgr' o 'RuleGif'");
        return;
    }

    var interval = 50; // Intervalo de tiempo para actualizar la barra de progreso (en milisegundos)
    var tiempoTotal = 30 * 1000; // 30 segundos en milisegundos
    var incremento = (100 / (tiempoTotal / interval)); // Incremento en porcentaje

    var width = 0;

    Gifrule.style.display = 'none';

    var intervalID = setInterval(function () {
        if (width >= 100 || btnAcep == true) {

            if (btnAcep == true) {
                width = 100;
                container.style.width = width + '%';
            }

            clearInterval(intervalID);

            desactivarBotonesApuesta();

            bolita = generarAle();

            Gifrule.style.display = 'block';

            // Girar el GIF durante 5 segundos
            setTimeout(function () {

                Gifrule.style.display = 'none';

                mostrarBolita();
                ponerNuevoRes(bolita);
                document.getElementById("cant_apuesta_info").innerHTML = "0€";
                borrarFichas();
            }, 5000);

            console.log("Número aleatorio generado: " + bolita);

            mostrarAvisoEmergente();

            apuestas.splice(0, apuestas.length);

            btnAcep = false;
        } else {

            document.getElementById("ganancias_info").innerHTML = "0€";
            width += incremento;
            container.style.width = width + '%';
        }
    }, interval);

}

iniciarBarraProgreso();



document.getElementById("btnAbrirModalPrin").addEventListener("click", VistaModalPrin, false);
document.getElementById("MIng").addEventListener("click", mostrarModalIng, false);
document.getElementById("MRet").addEventListener("click", mostrarModalRet, false);

document.getElementById("close1").addEventListener("click", cerrarModalPrin, false);
document.getElementById("close2").addEventListener("click", cerrarModalIng, false);
document.getElementById("close3").addEventListener("click", cerrarModalRet, false);


// Evento al confirmar el depósito
document.getElementById("btnaceptarIngresar").addEventListener("click", function () {
    //Cantidad a añadir
    var inputDepositar = document.getElementById("ingresarCantidad");
    var cantidad = parseFloat(inputDepositar.value);

    //Cantidad existente
    var saldoTexto = document.getElementById("fichas_info").textContent;
    var saldo = parseFloat(saldoTexto.replace(" €", ""));

    if (!isNaN(cantidad) && cantidad > 0) {
        //Suma
        var saldoNuevo = saldo + cantidad;
        fichas = saldoNuevo;
        actualizarSaldoAjax(saldoNuevo);

        cerrarModalPrin();
        cerrarModalIng();
    }
    inputDepositar.value = ''; // Limpiar input después de depositar
}, false);


// Evento al confirmar el retiro
document.getElementById("btnaceptarRetirar").addEventListener("click", function () {
    //Cantidad a retirar
    var inputRetirar = document.getElementById("retirarCantidad");
    var cantidad = parseFloat(inputRetirar.value);

    //Cantidad existente
    var saldoTexto = document.getElementById("fichas_info").textContent;
    var saldo = parseFloat(saldoTexto.replace(" €", ""));

    if (!isNaN(cantidad) && cantidad > 0 && saldo >= cantidad) {
        //Resta
        var saldoNuevo = saldo - cantidad;
        fichas = saldoNuevo;
        actualizarSaldoAjax(saldoNuevo);

        cerrarModalPrin();
        cerrarModalRet();

    } else if (isNaN(cantidad)) {
        alert('Por favor, ingresa una cantidad válida');
    } else {
        alert('No tienes suficiente saldo para retirar esa cantidad');
    }

    inputRetirar.value = ''; // Limpiar input después de retirar
}, false);


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
            success: function (data) {
                document.getElementById("fichas_info").innerHTML = `${saldoNuevo.toFixed(2)} €`;
            }
        });
}