function saltarlinea(num){
  for(i=0; i<num; i++)
    document.write("<br>")
}

function imprimir (frase){
  document.write(frase);
  saltarlinea(2);
}

function verify_range (){

  if(parseInt(input.value) >= 0 && parseInt(input.value) < parseInt(max.value))
    verify_input();
  else {
      alert("Ingrese un numero dentro del intervalo, por favor");
      input.value="";
      input.focus();
  }
}

function verify_input (){

  if(parseInt(input.value) == secreto){
    alert("le diste pa");
    input.value = "";
    max.value = "";
    max.focus();
  }
  else{
    alert("no le diste pete");
    input.value = "";
    input.focus();
  }

}

function random(){
  secreto = Math.round(Math.random() * parseInt(max.value));
  if(parseInt(max.value) === 1){
    alert("Ingrese un numero mayor a 1 como el tope para la generacion de numeros aleatorios");
    max.value ="";
    max.focus();
  }else{
    input.focus();
  }
}

var secreto = 0;
var max = document.querySelector("#hasta");
var bmax = document.querySelector("#bhasta");

bmax.onclick = random;

var input = document.querySelector("#ingreso-user");
var binput = document.querySelector("#button-user");

binput.onclick = verify_range;


// var button = document.querySelector("#botonaso");
// input.focus();
//
//
// button.onclick = verificar; // cuando se clickea en el boton, se llama a ejecución la función de verificado
