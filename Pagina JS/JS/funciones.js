// console.log("hola mundo");

// alert("hola mundo")

let variableUno = "hola";
let variableDos = "mundo";
console.log(variableUno +" "+ variableDos);
// alert(variableUno +" "+ variableDos);

const constante = 10;

let numeroUno = 50;
let numeroDos = 30;

let result = numeroUno + numeroDos;

result += 100;

console.log("La suma de dos numeros es: " + result);

let color = "verde";

if(color = "rojo") {
    console.log("Es de color rojo");
}
else{
    console.log("No es de color rojo");
}

let var1 = 10;
let var2 = "10";

if(var1 !== var2) {
    console.log("Son iguales");
}
else{
    console.log("No son iguales");
}

if (var1 > var2 && var1 > 15) {
    console.log("Es mayor");
}
else{
    console.log("Es menor");
}

if (var1 < var2) {
    console.log("Es menor var1");
}
else if (var1 > 20) {
    console.log("Es mayor a 20");
}
else{
    console.log("No se cumplio");
}

function miFuncion(nomUser) {
    console.log("Mi primera funcion",nomUser);

}

miFuncion(10);

let condicional = true;

//1 = true
//0 = false

if (condicional == 1) {
    console.log("Es verdadera");
}
else{
    console.log("Es falso");
}

