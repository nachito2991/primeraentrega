let remeras = 6000;
let pantalones = 9000;
let buzos = 13000;
let gorras = 8000;




//INGRESO DE PRODUCTOS y MUESTRA DE ARTICULOS SELECCIONADOS


let entrada = prompt("seleccione un producto de la siguiente lista \n 1)remeras \n 2)buzos \n 3)pantalones \n 4)gorros \n Para finalizar coloque terminado.");
let ingresados = '';

 const compra = (entrada) => {
 

    while (entrada != "terminado") {
        ingresados += entrada + "\n";
      
    
        switch (entrada ) {
            case "remeras":
                
                alert("Seleccionaste remeras, el precio es $6000");
                break;
                
            case "buzos":
                alert("Seleccionaste buzos, el precio es $13000");
                break;
            case "pantalones":
                alert("Seleccionaste pantalones $9000");
                break;
            case "gorras":
                alert("Seleccionaste gorras el precio es 8000");
                 break;
            default:
                alert("Ingreso mal el producto")
                break;
            }
        entrada = prompt("seleccione un producto de la siguiente lista \n 1)remeras \n 2)buzos \n 3)pantalones \n 4)gorros \n Para finalizar coloque terminado.");
        }
    alert (ingresados);
    
    }




 compra (entrada);



//Forma de pago

let formaPago = prompt( "ingrese metodo de pago 1) efectivo, 2) tarjeta");


const pago = (formaPago) => {
if (formaPago == 1) {
    alert("Tiene un 10% de descuento ");
    
} else if (formaPago == 2) {
    alert("Tiene 10% de recargo"); 

 } 
 else {
     alert("seleccione un metodo de pago");
}
}




pago(formaPago);




