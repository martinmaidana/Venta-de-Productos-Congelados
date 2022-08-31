//EDITANDO DOM DESDE EL NAVEGADOR
//HEADER
//Accediendo al nodo a traves de get element by ID
let titulo = document.getElementById("titulo");
console.log(titulo);
//defini un atributo de clase en el h1. que tiene un background color para poner el fondo celeste
titulo.className = "fondoceleste";

let subtitulo = document.getElementById("subtitulo");
console.log(subtitulo);
//innerText de un nodo nos permite modificar su nodo de texto "pisando el html" En este caso cambie el texto del H1.
console.log(titulo.innerText);
titulo.innerText = "VENTA DE PRODUCTOS CONGELADOS - generado desde JS ";
//innerHTML permite definir el código html interno a traves de JS. En este caso agregue UN H3 debajo del h1 y h2.
let subth3 = document.getElementById("h3coninnerHtml");
subth3.innerHTML = "<h3 class='colorazul'>Vegetales verdes</h3>";

//MAIN

//defini una variable con un valor vacio. para usarlo en una funcion
let valor = [""];
/*en la funcion interactuo con el html. si en el input ingresan su nombre, recibiran un saludo con el nombre ingresado al final. que tb se muestra en la consola. De lo contrario recibiran un mensaje que indica que tienen que ingresar su nombre.  ademas use Value para conectar el valor ingresado y volcarlo en el html*/
function saludando() {
    let nombre = document.getElementById("nombre_usuario");
   let ingreso_al_sistma = document.getElementById("ingresar_al_sistema");
   console.log("<--------Bienvenidos a venta de productos congelados------->",nombre.value);


   if (nombre.value != valor) {
       ingreso_al_sistma.innerHTML ="<p><--------Bienvenidos a venta de productos congelados-------></p>"+nombre.value;
       console.log("agrega los productos que quieras")
   }
   else {
       ingreso_al_sistma.innerHTML ="<p>Para poder operar, tenes que ingresar un nombre</p>";
       console.log("tenes que ingresar un valor")
   }

}

let clases = document.getElementsByClassName("card");
console.log(clases);






//FOOTER
//use createElement para insertar un h4 y le agregue una clase, que determinaba un color al h4
let redessociales = document.createElement("h4");
redessociales.innerText = "Seguinos en redes sociales";
redessociales.className = "colorazul";
redesfooter.append(redessociales);
/*El método getElementsByTagName() sirve para acceder a un conjunto de elementos de la estructura HTML, utilizando su nombre de etiqueta como identificación. Utilice la etiqueta li  */
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

//while . ciclo para ir sumando productos. que se repite mientras el usuario ingrese si y se corta cuando el usuario ingrese no/ESC

//


