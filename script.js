//HEADER

// let titulo = document.getElementById("titulo");
// console.log(titulo);

// titulo.className = "fondoceleste";

let subtitulo = document.getElementById("subtitulo");
console.log(subtitulo);
// console.log(titulo.innerText);
// titulo.innerText = "VENTA DE PRODUCTOS CONGELADOS - generado desde JS ";

// let subth3 = document.getElementById("h3coninnerHtml");
// subth3.innerHTML = "<h3 class='colorazul'>Vegetales verdes</h3>";

//MAIN
function saludando(){

    let saludar = document.getElementById("nombre_usuario");
    console.log("<--------Bienvenidos a venta de productos congelados------->", saludar.value);
    }

let clases = document.getElementsByClassName("card");
console.log(clases);



//FOOTER
let redessociales = document.createElement("h4");
redessociales.innerText = "Seguinos en redes sociales";
redessociales.className = "colorazul";
redesfooter.append(redessociales);

let li = document.getElementsByTagName("li");
console.log(li);

for (let elemento of li) {
    console.log(elemento);
}

//cree un array de objetos. la clase Producto tiene las variables que voy a utilizar. nombre es reconocido como string y precio y stock son reconocidos como numeros. 

class Producto {
    constructor(nombre, precio, stock) {
        this.nombre = nombre;
        this.precio = parseFloat(precio);
        this.stock = parseInt(stock);
    }
}
// //Declaramos un array de productos para almacenar objetos. 
const productosTotales = [
    { nombre: "esparragos", precio: 700, stock: 4, carro: 0 },
    { nombre: "brocoli", precio: 800, stock: 3, carro: 0 },
    { nombre: "espinacas", precio: 900, stock: 2, carro: 0 },
    { nombre: "zanahorias", precio: 1000, stock: 0, carro: 0 },
]

const productos = productosTotales.filter((producto) => producto.stock > 0);

let i = 1;


console.log("Lista de productos");
for (let listado of productos) {
    console.log(i + '-> ' + listado.nombre + ' a $ ' + listado.precio);
    i++;
    // console.log("Precio producto ", listado.precio);
}

// console.log("bienvenidos a venta de productos congelados")
let cantProductos = 0;
let valor = "si";
//while . ciclo para ir sumando productos. que se repite mientras el usuario ingrese si y se corta cuando el usuario ingrese no/ESC
while (cantProductos >= 0) {
    
    function ingresar(){
            let agregar =  prompt("Desea agregar productos si/no/ESC");
            agregar = document.getElementById("agregar_productos");

    }

    if (agregar === "NO") {
        break
    } else if (agregar.value === "SI") {
        let mensaje = parseInt(prompt("VENTA DE PRODUCTOS CONGELADOS:\n Puede ver la lista de nuestros productos en la consola. \n Ingrese el NUMERO del producto que desea. Para finalizar, escriba ESC."));


        if (mensaje === 1) {
            productos[0].carro = productos[0].carro + 1;
            cantProductos++
        } else if (mensaje === 2) {
            productos[1].carro = productos[1].carro + 1;
            cantProductos++

        } else if (mensaje === 3) {
            productos[2].carro = productos[2].carro + 1;
            cantProductos++

        } else if (mensaje === 4) {
            productos[3].carro = productos[3].carro + 1;
            cantProductos++

        };


    } else {
        console.log("vamos a un corte")
        break
    }
}

// evalua si se compraron productos. si es diferente a 0 muestra la cantidad de productos comprados
for (let listado of productos) {
    if (listado.carro > 0) {
        console.log('Has comprado ' + listado.carro + ' cantidad de ' + listado.nombre)
    }
    // console.log("Precio producto ", listado.precio);
}

//Muestra EL TOTAL de productos asquiridos en la consola
console.log('En total has adquirido ' + cantProductos + ' productos.')


const productosAdquiridos = productos.filter((producto) => producto.carro > 0);
let costoTotal = 0;
function operaciones() {
    return costoTotal = productosAdquiridos.reduce((acumulador, elemento) => acumulador + elemento.precio, 0)
}
console.log('El costo total es $ ' + operaciones());

// console.log('Hola')


//Funcion para calcular el pago en cuotas o en efectivo

function medios_de_pago() {
    let tipo = parseInt(prompt("Ingrese 1. para abonar en EFECTIVO. \nIngrese 2. para abonar en CUOTAS"));
    if (tipo === 1) {
        console.log("El total a abonar EN EFECTIVO, con el 10% de descuento realizado es $: " + (operaciones() * 0.9));
    } else if (tipo === 2) {
        let pago = parseInt(prompt("Elija la cantidad de cuotas 3 /6 / 9 / 12."));
        if (pago === 3) {
            let pago_en_3_cuotas = (operaciones() * 1.15) / 3;
            console.log("El precio final es $ " + operaciones() + " en 3 cuotas de $ " + pago_en_3_cuotas + " .Disfrute su compra.")
        } else if (pago === 6) {
            let pago_en_6_cuotas = (operaciones() * 1.20) / 6;
            console.log("El precio final es $ " + operaciones() + " en 6 cuotas de $ " + pago_en_6_cuotas + " .Disfrute su compra.")
        } else if (pago === 9) {
            let pago_en_9_cuotas = (operaciones() * 1.25) / 9;
            console.log("El precio final es $ " + operaciones() + " en 9 cuotas de $ " + pago_en_9_cuotas + " .Disfrute su compra.")
        } else if (pago === 12) {
            let pago_en_12_cuotas = (operaciones() * 1.30) / 12;
            console.log("El precio final es $ " + operaciones() + " en 12 cuotas de $ " + pago_en_12_cuotas + " .Disfrute su compra.")
        } else {
            console.log("Debe ingresar una opcion valida (Efectivo o numero de cuotas 3/6/9/12)");
            medios_de_pago();
        }
    }
}
medios_de_pago();


