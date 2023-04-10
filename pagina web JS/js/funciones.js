console.log("Hola mundo");

//asdasdasd

let variableUno = 10;
let variableDos = "10";

console.log("Valor de la variable: ",variableUno, "dos ", variableDos);

const constante = 10;
    //constante = 20;
console.log(constante);


//alert("Bienvenidos");


if (variableUno == variableDos) {
    console.log("Son iguales");
}else{
    console.log("No son iguales");
}

if (variableUno !== variableDos) {
    console.log("Son distintos");
}else{
    console.log("No son distintos");
}


if (variableUno > 5 && variableDos == 7) {
    
}

if (variableUno < 5 || variableDos == 10) {
    
}



if ("50" > 40) {
    console.log("es mayor");
}

function miFuncion() {
    console.log("Mi primera funcion.");
}

miFuncion();


function sumar(n1,n2){
    let resultado = n1 + parseInt(n2);
    console.log("El resultado de la suma es: ", resultado);
}


sumar(50,50);

function obtenerValorinput() {
    let var1 = document.getElementById("txtNumero1").value;
    console.log("Valor input: ", var1);

    console.log("Valor variable uno", variableUno);

    console.log("Esta es el variable que esta en la funcion", miVariable);
}

document.getElementById("ocultar").style.display = "none"
function pass() {
    let input = document.getElementById("txtContrasena");
    
    if (input.type == "password") {
        input.type = "text"
    }
}