//HEADER

let titulo = document.getElementById("titulo");
console.log(titulo);

titulo.className = "fondoceleste";

let subtitulo = document.getElementById("subtitulo");
console.log(subtitulo);
console.log(titulo.innerText);
titulo.innerText = "VENTA DE PRODUCTOS CONGELADOS - generado desde JS ";

let subth3 = document.getElementById("h3coninnerHtml");
subth3.innerHTML = "<h3 class='colorazul'>Vegetales verdes</h3>";

//MAIN


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
// //Declaramos un array de productos para almacenar objetos. Es un arreglo que esta vacio
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

function saludando() {

    let saludar = document.getElementById("nombre_usuario");
    console.log("<--------Bienvenidos a venta de productos congelados------->", saludar.value);
}


// console.log("bienvenidos a venta de productos congelados")
let cantProductos = 0;
let valor = "";
//while . ciclo para ir sumando productos. que se repite mientras el usuario ingrese si y se corta cuando el usuario ingrese no/ESC
while (cantProductos >= 0) {

    function ingresar() {
        saludar = document.getElementById("nombre_usuario");
        let ingreso_al_sistma = document.getElementById("ingresar_al_sistema");


        if (saludar.value != valor) {
            ingreso_al_sistma.innerHTML ="<p><--------Bienvenidos a venta de productos congelados-------></p>";
            console.log("agrega los productos que quieras")
        }
        else {
            ingreso_al_sistma.innerHTML ="<p>Para poder operar, tenes que ingresar un nombre</p>";
            console.log("tenes que ingresar un valor")
        }

    }
    break

}