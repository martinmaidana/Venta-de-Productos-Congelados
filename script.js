
let cantProductos = 0;
// Array
let producto = [0, 0, 0, 0]
let esparragos = producto[0]
let brocoli =  producto[1]
let espinacas = producto[2]
let zanahorias = producto[3]
let totalproductos = 0



//while . ciclo para ir sumando productos. que se repite mientras el usuario ingrese si y se corta cuando el usuario ingrese no/ESC
while (cantProductos >= 0) {
    if (prompt('Desea agregar productos \nsi \nno \nESC') == 'si'){
          producto = prompt("VENTA DE PRODUCTOS CONGELADOS:\n Ingrese el NUMERO del producto que desea. \n Ofrecemos: \n \t 1-ESPARRAGOS, \n \t 2-BROCOLI, \n \t 3-ESPINACAS, \n \t 4-ZANAHORIAS. \n Ingrese el NUMERO del producto que desea. Para finalizar, escriba ESC.");

        if (producto == 1){
            esparragos++

            cantProductos++
        };
        if (producto == 2){
            brocoli++

            cantProductos++

        };
        if (producto == 3){
            espinacas++

            cantProductos++

        };
        if (producto == 4){
            zanahorias++

            cantProductos++

        };

        if (producto == 'ESC'){
            break;
        }
    } else {
        break;
    }
}
//Muestra la cantidad de productos asquiridos en la consola
if(esparragos !=0){
    console.log('Has comprado: ' + esparragos + ' cantidad de esparragos.');
}
if(brocoli !=0){
    console.log('Has comprado: ' + brocoli + ' cantidad de brocolis.');
}
if(espinacas !=0){
    console.log('Has comprado: ' + espinacas + ' cantidad de espinacas.')
}
if(zanahorias != 0){
    console.log('Has comprado: ' + zanahorias + ' cantidad de zanahorias.');
}


console.log('En total has adquirido ' + cantProductos + ' cantidad de productos.')

totalproductos = ((esparragos * 700)+ (brocoli * 800) + (espinacas * 900) + (zanahorias * 1000));

//Funcion para calcular el pago en cuotas o en efectivo
function medios_de_pago(efectivo, cuotas){
    let pago;

        if (cantProductos > 0){
        pago = prompt("Ingrese 1. para abonar en EFECTIVO. \nIngrese 2. para abonar en CUOTAS");
        if (pago == 1){
        return "El total a abonar EN EFECTIVO, con el 10% de descuento realizado es: " + (totalproductos*0.9);
        }
        if (pago == 2) {
            pago = prompt("Elija la cantidad de cuotas 3 /6 / 9 / 12.")
            if(pago == 3){
            let pago_en_3_cuotas = totalproductos * 0.15;
            return "El precio final son 3 cuotas de $ " + pago_en_3_cuotas + " .Disfrute su compra."
            }
            if(pago == 6){
            let pago_en_6_cuotas = totalproductos * 0.20;
            return "El precio final son 6 cuotas de $ " + pago_en_6_cuotas + " .Disfrute su compra."
            }
            if(pago == 9){
            let pago_en_9_cuotas = totalproductos * 0.25;
            return "El precio final son 9 cuotas de $  " + pago_en_9_cuotas + " .Disfrute su compra."
            }
            if(pago == 12){
            let pago_en_12_cuotas = totalproductos * 0.30;
            return "El precio final son 12 cuotas de $  " + pago_en_12_cuotas + " .Disfrute su compra."
             }
        else{
            return "Debe ingresar una opcion validad (efectivo o numero de cuotas 3/6/9/12)"
        }
    }
}
}
console.log(medios_de_pago());