function ejercicio1() {
  var vr1 = prompt("Ingresa el primer numero");
  var vr2 = prompt("Ingresa el segundo numero");
  var suma = parseFloat(vr1) + parseFloat(vr2);
  alert("La suma es:  " + suma);
}

function ejercicio2() {
  var vr1 = prompt("Ingresa la primera nota");
  var vr2 = prompt("Ingresa la segunda nota");
  var vr3 = prompt("Ingresa la tercera nota");
  var vr4 = prompt("Ingresa la cuarta nota");
  var p =
    (parseFloat(vr1) + parseFloat(vr2) + parseFloat(vr3) + parseFloat(vr4)) / 4;
  alert("Su promedio es: " + p);
}

function ejercicio3() {
  var Base = prompt("Ingrese el valor de la Base del rectangulo", "");
  var Altura = prompt("Ingrese el valor de la Altura del rectangulo", "");
  var Area = parseFloat(Base) * parseFloat(Altura);
  alert("El area es: " + Area);
}

function ejercicio4() {
  var Base = prompt("Ingrese el valor de la Base del triangulo", "");
  var Altura = prompt("Ingrese el valor de la Altura del triangulo", "");
  Base = parseInt(Base);
  Altura = parseInt(Altura);
  Area = (parseFloat(Base) * parseFloat(Altura)) / 2;
  alert("El area es: " + Area);
}

function ejercicio5() {
  var radio = prompt("Ingrese el valor del radio de la circunferencia", "");
  var pi = Math.PI;
  var potencia = Math.pow(parseFloat(radio), 2);
  var area = pi * potencia;
  alert("El area es: " + area);
}

function ejercicio6() {
  var vr1 = prompt("Ingresa el salario");
  var vr2 = prompt("Ingresa las horas trabajadas en la semana");
  var p =
    (parseFloat(vr1) + parseFloat(vr2) / +parseFloat(vr3) + parseFloat(vr4)) /
    4;
  alert("Su promedio es: " + p);
}

function ejercicio7() {
  var metros = prompt("Ingresa la cantidad de tela en metros");
  var cantidad = parseFloat(metros) / 0.0254;
  alert("La cantidad de tela en pulgadas es " + cantidad);
}

function ejercicio8() {
  var dolares = prompt("Ingresa la cantidad de dinero en dolares");
  var cambio = parseFloat(dolares) * 3.38;
  alert("La cantidad de dinero en soles es " + cambio);
}

function ejercicio9Y10() {
  let personal = [
    { nombre: "homero", nacimiento: 1956 },
    { nombre: "lenny", nacimiento: 1950 },
    { nombre: "carl", nacimiento: 1940 }
  ];

  let personaMasJoven = {
    nombre: "default",
    nacimiento: 9999
  };

  for (i in personal) {
    if (personal[i].nacimiento < personaMasJoven.nacimiento) {
      personaMasJoven = personal[i];
    }
  }

  console.log(
    "La persona mas joven es " +
      personaMasJoven.nombre +
      " y tiene " +
      (2020 - personaMasJoven.nacimiento)
  );
}

function ejercicio11() {
  var años_trabajo = prompt("digite los años trabajados");
  if (años_trabajo == 1) {
    alert("recibirá un bono de $100");
  }
  if (años_trabajo == 2) {
    alert("recibirá un bono de $200");
  }
  if (años_trabajo == 3) {
    alert("recibirá un bono de $300");
  }
  if (años_trabajo == 4) {
    alert("recibirá un bono de $400");
  }
  if (años_trabajo == 5) {
    alert("recibirá un bono de $500");
  }
  if (años_trabajo > 5) {
    alert("recibirá un bono de $1000");
  }
}

function ejercicio12() {}

function ejercicio13() {
  var calificaciones = [12, 15, 18, 5, 3, 19, 7, 9, 10, 11, 14, 17, 12, 15];
  var cantAprobados = 0;

  for (i of calificaciones) {
    if (i > 10) {
      cantAprobados++;
    }
  }
  var cantReprobados = calificaciones.length - cantAprobados;
  console.log(
    "la cantidad de aprobados es " +
      cantAprobados +
      " y la cantidad de reprobados es " +
      cantReprobados
  );
}

function ejercicio14() {}

function ejercicio15() {
  var edad = prompt("Coloca tu edad");
  if (edad >= 18) {
    alert("Puedes votar");
  } else if (edad < 18) {
    alert("No puedes votar");
  }
}
