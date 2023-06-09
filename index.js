//Ejercicio numero 1
/*
let  persona = "homero";
let apellido= "simpsons";
let edad = 35;

console.log(persona);
console.log(apellido);
console.log(edad)

*/

//ejercicio numero 2
/*
const ciudad1 = "sprinfild";
const ciudad2 = "san martin de los andes";
const ciudad3 = "junin";
const ciudad4 = "lanus";
const ciudad5 ="pompeya";

console.log(ciudad1);
console.log(ciudad2);
console.log(ciudad3);
console.log(ciudad4);
console.log(ciudad5);
*/

//ejercicio numero 3
/*
let nombre ="Bart Simpsons";
let fechaNacimiento ="29/09/1991";
let direccion ="Avenida siempre viva 635";

let carnet= "Nombre:"+ nombre +" "+
        "FechaNacimiento:"+ fechaNacimiento +" "+
        "Direccion:"+ direccion;

            console.log(carnet);
*/


//Ejercicio numero 4
/*
let integrante1 = prompt('INGRESAR 1er INTREGANTE');
let integrante2 = prompt('INGRESAR 2do INTREGANTE');
let integrante3 = prompt('INGRESAR 3er INTREGANTE');
let integrante4 = prompt('INGRESAR 4to INTREGANTE');
let integrante5 = prompt('INGRESAR 5to INTREGANTE');
let familia =   "1)" +integrante1+" "+
                "2)" +integrante2+" "+
                "3)" +integrante3+" "+
                "4)" +integrante4+" "+
                "5)" +integrante5;
console.log(familia);
*/

//Ejercicio numero 5
/*
let precio = parseFloat(prompt("Ingrese precio"));
let descuento20 = precio - (precio * 0.2);
let descuento30= precio - (precio *0.3);

console.log(descuento20);

console.log(descuento30);
*/

//Ejercicio numero 6
/*
let entrada = prompt ("Ingrese nombre");
let nombre = "Bart";

if (entrada == nombre) {
    alert("FUI YO");
} else {
    alert("YO NO FUI");
}
*/

//Ejercicio numero 7 display 19
/*
let entrada = prompt("Presione una tecla cualquiera");
if ((entrada == "y") || (entrada == "Y")) {
    alert("Correcto");
} else {
    alert("ERROR");
}
*/

//Ejercicio numero 8
/*
let entrada =  prompt( "ingrese numero ");
if (entrada == "1") { alert ("elegiste a homero");
 } else if (entrada == "2") {alert ("elegiste a marge");
} else if (entrada == "3") { alert ("elegiste a bart");
} else if (entrada == "4") {alert("elegiste a lisa");}
 else if (entrada == "5") {alert("elegiste a maggie");
}else { alert("ERROR");
} 
*/


// ejercicio numero 9 (21)
/*
let entrada = prompt ("ingrese un presupuesto");
if (entrada < 1000) { alert ("el presupuesto es bajo");
    
}else if ((entrada >= 1001) || (entrada <= 3000)) { alert ("El presupuesto es medio");
}else if (entrada > 3000) {alert ("Elpresupuesto es alto");}

else { alert ("ERROR");}
*/

//Ejercicio numero 10 (22)
/*

let producto1 = prompt ("Ingrese un producto");

let producto2 = prompt ("Ingrese otro producto");

let producto3 = prompt ("Ingrese otro producto");

let producto4 = prompt ("Ingrese otro producto");


if ((producto1 != "") && (producto2 != "") && (producto3 != "") && (producto4 != "")) {
    let heladera = "1) " + producto1 + " " +
        "2) " + producto2 + " " +
        "3) " + producto3 + " " +
        "4) " + producto4;
    console.log(heladera);
} else {
    console.log("faltan productos");
}

*/
 //ejercicio  numero 11 (31)
 /*

 let cantidad = prompt('INGRESAR CANTIDAD DE REPETICIONES');
 let texto    = prompt('INGRESAR TEXTO A REPETIR');
 for (let index = 0; index < cantidad; index++) {
     alert(texto);
 }
 */

 //ejercicio numero 12
/*

 let lados = prompt('INGRESAR CANTIDAD DE LADOS');
for (let index = 0; index < lados; index++) {
    if (index > 3) {
        break;
    }
    alert("lado");
}
*/
//Actividad numero 13 pagina 39
/*

let alumnos = '';
for (let index = 0; index < 10; index++) {
    alumnos+= prompt ("ingresar alumnos") + "\n";
 

}
alert(alumnos) ;

*/

//ejercicio numero 14 40
/*
let entrada = prompt('ingresar nombre');
let ingresados = '';

while (entrada != 'voldemort') {
    ingresados += entrada + "\n";
    entrada = prompt('ingresar nombre');
    
}
alert (ingresados);
*/

//ejercicio numero 15 41
/*

let entrada = prompt('ingresar numero del 1 al 4');

while (entrada != "ESC") {
    switch (entrada) {
        case "1":
            alert("tomate");
            break;
        case "2":
            alert("chocolate");
            break;
        case "3":
            alert("vino");
            break;
        case "4":
            alert("carne");
        break;
default:
    alert ("error");
    break
    }
    entrada = prompt('ingresar numero del 1 al 4');
}
*/

// ejercicio youtube JOTACODE

/*

function avisoLluvia (estalloviendo) {
    if (estalloviendo) {
            alert("Esta lloviando");
        } else {
            alert("no esta lloviando");
        }
    
}

avisoLluvia(true);

*/

// ejercicio dos JOTA CODE
/*

function calcular (x, y, z) {
    let suma = x+y;
    let resultado= suma * z;

    return resultado;
    
}

console.log(calcular ( 2,3,2));
*/
/*

function entrada() {   
    return prompt ("ingrese valor");
}

function procesamiento(valor) {
    prompt ("la entrada es" + valor);
    
}

function salida(valor) {
    alert( "el precio es " + Salida);
    
}

entradas();
procesamiento();
salida();
*/

/*
//EJERCIIO JOTA CODE CALCULADORA
function calculadora (operacion, x ,y) {
    switch (operacion) {
        case "+":
            return x + y;
            break;
        case "-":
            return x - y;
            break;
        case "*":
            return x * y;
            break;
        case "/":
            return x / y;
            break;
        case "%":
            return x % y;
            break;
    }
}

console.log (calculadora ("+", 2,3));

*/
// ejercicio coderhouse impuesto
/*

function impuesto(precio, porcentaje){
    return precio + ((precio * porcentaje)/100)
}
for (let index = 0; index < 5; index++) {
    let resultado = impuesto(parseFloat(prompt("INGRESAR PRECIO"))
  ,parseFloat(prompt("INGRESAR %")));
    alert(resultado);
}
*/
 //ejercicio coderhouse dolar.
/*
 const COTIZACION_DOLAR = 150;
 const cotizarDolar = (pesos) => pesos / COTIZACION_DOLAR;
 const cotizarPesos = (dolar) => dolar * COTIZACION_DOLAR;
 let seleccion = prompt("SELECCIONAR COTIZACION \n 1 - DOLARES A PESOS \n 2 -  PESOS A DOLAR ");
 let valor = prompt("VALOR");
 switch (seleccion) {
     case "1":
         alert(cotizarPesos(valor));
         break;
     case "2":
         alert(cotizarDolar(valor));
         break;
     default:
         break;
 }
 */

 //pre entrega proyecto final

// Tienda virtual
/*

let remeras = 6000;
let pantalones = 9000;
let buzos = 13000;
let gorras = 8000;



let entrada = prompt("seleccione un producto del 1 al 4");
while (entrada != "terminado") {

    switch (entrada) {
        case "1":
            alert("Seleccionaste remeras, el precio es $6000");
            break;

        case "2":
            alert("Seleccionaste buzos, el precio es $13000");
            break;
    
        case "3":
            alert("Seleccionaste pantalones $9000");
            break;
    
        case "4":
            alert("Seleccionaste gorras el precio es 8000");
             break;

        default:
            alert("ERROR")
            break;
    }
    entrada = prompt("seleccione un producto del 1 al 4");
}

*/