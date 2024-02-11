//Precio base de la cotización
var precio_base = 2000;

//Valores de los recargos
var edad_18 = 0.1; // 10%
var edad_25 = 0.2; // 20%
var edad_50 = 0.3; // 30%

var casado_18 = 0.1; // 10%
var casado_25 = 0.2; // 20%
var casado_50 = 0.3; // 30%

var hijos_recargo = 0.2; // 20%

var propiedades_recargo = 0.35; // 35%

var ingresos_recargo = 0.05; // 5%

var pregunta = "";

do{
  pregunta = prompt("¿Desea realizar una nueva cotización?", "continuar/salir");
  if (pregunta === "continuar"){
    //Recargo
    var recargo = 0;
    var recargo_total = 0;

    //Precio final
    var precio_final = 0;

    //Mensajes de alerta para ingresar datos
    var nombre = prompt('Ingrese su nombre, por favor');
    var edad = prompt('¿Cuantos años tiene? Ingrese solamente números');
    var ingresos = prompt('¿A cuánto ascienden sus ingresos mensuales? Ingrese solamente números');
    var propiedades = prompt('¿Cuantas propiedades tiene? Ingrese solamente números');

    //Convirtiendo las edad ingresada a números
    var edad_numero = parseInt(edad, 10);

    //Convirtiendo el ingreso a números
    var ingresos_numero = parseInt(ingresos, 10);

    //Convirtiendo las propiedades ingresadas a números
    var propiedades_numero = parseInt(propiedades, 10);

    //Validación de cónyuge
    var casado = prompt('¿Está casado actualmente?', 'si/no');

    //Comprobamos la edad del cónyuge, solamente si se está casado/a
    var edad_conyuge;
    if ('SI' === casado.toUpperCase()) {
      edad_conyuge = prompt(
        '¿Que edad tiene su esposo/a? Ingrese solamente números'
      );
    }
    //convirtiendo la edad del cónyuge si se está casado/a
    if ('SI' === casado.toUpperCase()) {
      edad_conyuge_numero = parseInt(edad_conyuge, 10);
    }

    //Validación de hijos
    var hijos = prompt('¿Tiene hijos o hijas?', 'si/no');
    //Comprobamos la cantidad de hijos solamente si los tienen
    var cantidad_hijos;
    if ('SI' === hijos.toUpperCase()) {
      cantidad_hijos = prompt('¿Cuántos hijos tiene? Ingrese solamente números');
    }
    //convirtiendo la cantidad de hijos ingresado a números
    var cantidad_hijos_numero = parseInt(cantidad_hijos, 10);

    //Cálculo de recargos en función de respuestas
    //-------------------------------------------//
    //Recargo por edad de asegurado
    if (edad_numero > 17) {
      if (edad_numero >= 18 && edad_numero < 25) {
        recargo = precio_base * edad_18;
        recargo_total = recargo_total + recargo;
      } else if (edad_numero >= 25 && edad_numero < 50) {
        recargo = precio_base * edad_25;
        recargo_total = recargo_total + recargo;
      } else {
        recargo = precio_base * edad_50;
        recargo_total = recargo_total + recargo;
      }
    }

    //Recargo por propiedades
    if (propiedades_numero > 0) {
      recargo = precio_base * propiedades_recargo;
      recargo_total = recargo_total + recargo;
    }

    //Recargo por ingresos
    if (ingresos_numero > 0) {
      recargo = precio_base * ingresos_recargo;
      recargo_total = recargo_total + recargo;
    }

    //Recargo por edad del cónyuge
    if ('SI' === casado.toUpperCase()) {
      if (edad_conyuge_numero >= 18 && edad_conyuge_numero < 25) {
        recargo = precio_base * casado_18;
        recargo_total = recargo_total + recargo;
      } else if (edad_conyuge_numero >= 25 && edad_conyuge_numero < 50) {
        recargo = precio_base * casado_25;
        recargo_total = recargo_total + recargo;
      } else {
        recargo = precio_base * casado_50;
        recargo_total = recargo_total + recargo;
      }
    }

    //Recargo por cantidad de hijos
    if ('SI' === hijos.toUpperCase()) {
      recargo = precio_base * hijos_recargo * cantidad_hijos_numero;
      recargo_total = recargo_total + recargo;
    }

    //Cálculo precio final
    precio_final = precio_base + recargo_total;

    //Resultados
    //-------------------------------------------//
    alert('Para el asegurado ' + nombre);
    alert('El recargo total sera de: ' + recargo_total);
    alert('El precio sera de: ' + precio_final);
  }
} while (pregunta === "continuar");