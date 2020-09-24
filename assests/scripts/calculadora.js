/* Calculadora 29/09/20 BICTIA */

document.getElementById("campoletra").innerHTML = "0";
document.getElementById("edu").innerHTML = "0";

function setLetter(letter) {
  document.getElementById("campoletra").innerHTML =
    document.getElementById("campoletra").innerHTML + letter;
}

const arrayMemoria = [];

function memoria1() {
  if (isNaN(arrayMemoria[0])) {
    const memoria = 0;
  }
  const memoria = parseFloat(document.getElementById("campoletra").innerHTML);
  arrayMemoria.push(memoria);
  const teclaBorrar = document.getElementById("campoletra");
  teclaBorrar.innerHTML = "";
}

const arrayMemoria2 = [0];

function memoria2() {
  const inicial = parseFloat(document.getElementById("campoletra").innerHTML);
  arrayMemoria2.push(inicial);
  console.log(arrayMemoria2);
}

function teclaBorrar() {
  arrayMemoria.length = 0;
  arrayMemoria2.length = 0;

  const memoria2 = 0;
  arrayMemoria2.push(memoria2);
  const teclaBorrar = document.getElementById("campoletra");
  teclaBorrar.innerHTML = "";
  document.getElementById("edu").value = "";
}
function sumar() {
  memoria1();
  let sumatoria =
    arrayMemoria2[arrayMemoria2.length - 1] +
    arrayMemoria[arrayMemoria.length - 1];
  arrayMemoria2.push(sumatoria);
  console.log(arrayMemoria);
}

function setSuma() {
  let sumatoria2 =
    arrayMemoria2[arrayMemoria2.length - 2] +
    arrayMemoria2[arrayMemoria2.length - 1];
  document.getElementById("memoria").innerHTML =
    arrayMemoria2[arrayMemoria2.length - 1];
  console.log(arrayMemoria2);
}

function multiplicar() {
  memoria1();
  let sumatoria =
    arrayMemoria2[arrayMemoria2.length - 1] *
    arrayMemoria[arrayMemoria.length - 1];
  arrayMemoria2.push(sumatoria);
  console.log(arrayMemoria);
}

function setMultiplicar() {
  let sumatoria2 =
    arrayMemoria2[arrayMemoria2.length - 2] *
    arrayMemoria2[arrayMemoria2.length - 1];
  console.log(arrayMemoria2);
  document.getElementById("memoria").innerHTML =
    arrayMemoria2[arrayMemoria2.length - 1];
}

function restar() {
  memoria1();
  let sumatoria =
    arrayMemoria2[arrayMemoria2.length - 1] -
    arrayMemoria[arrayMemoria.length - 1];
  arrayMemoria2.push(sumatoria);
  console.log(arrayMemoria);
}

function setRestar() {
  let sumatoria2 =
    arrayMemoria2[arrayMemoria2.length - 2] -
    arrayMemoria2[arrayMemoria2.length - 1];
  console.log(arrayMemoria2);
  document.getElementById("memoria").innerHTML =
    arrayMemoria2[arrayMemoria2.length - 1];
}

function dividir() {
  memoria1();
  let sumatoria =
    arrayMemoria2[arrayMemoria2.length - 1] +
    arrayMemoria[arrayMemoria.length - 1];
  arrayMemoria2.push(sumatoria);
  console.log(arrayMemoria);
}

function setDividir() {
  let sumatoria2 =
    arrayMemoria2[arrayMemoria2.length - 2] +
    arrayMemoria2[arrayMemoria2.length - 1];
  document.getElementById("memoria").innerHTML =
    arrayMemoria2[arrayMemoria2.length - 1];
  console.log(arrayMemoria2);
}

//function for displaying values
function setNumber(val) {
  document.getElementById("edu").value += val;
}
//function for evaluation
function solve() {
  let x = document.getElementById("edu").value;
  let y = eval(x);
  document.getElementById("edu").value = y;
  document.getElementById("campoletra").innerHTML = y;
  memoria2();
}
//function for clearing the display
function clr() {
  document.getElementById("edu").value = "";
}
