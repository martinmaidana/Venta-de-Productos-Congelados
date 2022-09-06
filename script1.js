//EDITANDO DOM DESDE EL NAVEGADOR
//HEADER

//Accediendo al nodo a traves de get element by ID
let titulo = document.getElementById("titulo");
console.log(titulo);
//defini un atributo de clase en el h1. que tiene un background color para poner el fondo celeste
titulo.className = "fondoceleste";


//innerText de un nodo nos permite modificar su nodo de texto "pisando el html" En este caso cambie el texto del H1.
console.log(titulo.innerText);
titulo.innerText = "VENTA DE PRODUCTOS CONGELADOS - generado desde JS ";

//innerHTML permite definir el código html interno a traves de JS. En este caso agregue UN H3 debajo del h1 y h2.
let subth3 = document.getElementById("h3coninnerHtml");
subth3.innerHTML = "<h3 class='colorazul'>Listado de vegetales</h3>";

let subtitulo = document.getElementById("subtitulo");
console.log(subtitulo);
//mouseover/mouseout en el subtitulo vegetales. cambiando el color rojo al pasar el maouse y retorna a negro al sacar el maouse
subtitulo.addEventListener("mouseover", function () {
    this.style.color = '#ff0000';
});
subtitulo.addEventListener("mouseout", function () {
    this.style.color = '#000000';
});

//MAIN

//defini una variable con un valor vacio. para usarlo en una funcion
let valor = ("");
/*en la funcion interactuo con el html. si en el input ingresan su nombre, recibiran un saludo con el nombre ingresado al final. que tb se muestra en la consola. De lo contrario recibiran un mensaje que indica que tienen que ingresar su nombre.  ademas use Value para conectar el valor ingresado y volcarlo en el html*/
function saludando() {
    let nombre = document.getElementById("nombre_usuario");
    let ingreso_al_sistma = document.getElementById("ingresar_al_sistema");
    console.log("<--------Bienvenidos a venta de productos congelados------->", nombre.value);
    nombre.addEventListener("keydown", function (e) {
        if (e.key == "t") {
            console.log("escribiste t");
        }
    })


    if (nombre.value != valor) {
        ingreso_al_sistma.innerHTML = "<p><--------Bienvenidos a venta de productos congelados-------></p>" + nombre.value;
    }
    else {
        ingreso_al_sistma.innerHTML = "<p>Para poder operar, tenes que ingresar un nombre</p>";
        console.log("tenes que ingresar un valor")
    }

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
    { id: 1, nombre: "Brocoli", precio: 800, stock: 8, carro: 0, img: 'brocoli.jpg' },
    { id: 2, nombre: "Espinacas", precio: 900, stock: 2, carro: 0, img: 'espinaca.webp' },
    { id: 3, nombre: "Zanahorias", precio: 1000, stock: 1, carro: 0, img: 'zanahoria.jpg' },
    { id: 4, nombre: "Zapallo", precio: 1200, stock: 6, carro: 0, img: 'zapallo.jpg' },
    { id: 5, nombre: "Repollo", precio: 1100, stock: 0, carro: 0, img: 'repollo.webp' },
    { id: 6, nombre: "Esparragos", precio: 700, stock: 4, carro: 0, img: 'esparragos.jpg' },
];

const productos = productosTotales.filter((producto) => producto.stock >= 0);

let i = 1;
// usando query selector .  ingrese las etiquetas div al html y con for of, recorri el array de objetos. con if . else if y else en funcion del stock y usando clases de css diferencie si el stock esta por agotarse o esta agotado.
let data = '';
let vstock = '';
const cards = document.querySelector('.listadovegetales');
console.log("Lista de productos");
for (let listado of productos) {
    if (listado.stock == '1' || listado.stock == '2' || listado.stock == '3') {
        vstock = `<span class="alerta">Stock ${listado.stock} - Quedan Pocas Unidades</span>`;
    } else if (listado.stock == 0) {
        vstock = `<span class="agotado">Stock ${listado.stock} - AGOTADO!</span>`;
    } else {
        vstock = 'Stock ' + listado.stock;
    }
    data += `<div class="card">
    <img class="imagen" src="./assets/${listado.img}" alt="${listado.nombre}">
    <p>$ ${listado.precio}</p>
    <p>${vstock}</p>
    <label for="number">${listado.nombre}</label>
    <br>
    <button class="addButton" type="submit" itemID="${listado.id}"">Añadir</button>
</div>`
    cards.innerHTML = data;
    i++
}

//Detectar la funcion Añadir al carrito
let addButton = document.getElementsByClassName("addButton");
var myFunction = function () {
    var attribute = this.getAttribute("itemID");
    productoSeleccionado = productos.find(obj => obj.id == attribute);
    productoSeleccionado.carro++
    updateCarrito()
};

for (var j = 0; j < addButton.length; j++) {
    addButton[j].addEventListener('click', myFunction, false);
}


function updateCarrito() {
    let i = 1;
    // usando query selector .  ingrese las etiquetas div al html y con for of, recorri el array de objetos. con if . else if y else en funcion del stock y usando clases de css diferencie si el stock esta por agotarse o esta agotado.
    let data = '';
    const cards = document.querySelector('.carro');
    for (let listado of productos) {
        data += `<article>
        <div class="imgContainer">
            <img src="./assets/${listado.img}" alt="${listado.name}" />
        </div>
        <p>Cantidad: ${listado.carro}</p>
    </article>`
        cards.innerHTML = data;
        i++
    }
    calcularPreciototal()
}

function calcularPreciototal() {
    const productosAdquiridos = productos.filter((producto) => producto.carro > 0);
    let costoTotal = 0;
    function operaciones() {
        costoTotal = productosAdquiridos.reduce((acumulador, elemento) => acumulador + (elemento.precio * elemento.carro), 0)
        document.getElementById("costoTotal").value = costoTotal;
        console.log(costoTotal);
    }
    operaciones();
}



// evento click al apretar boton izq del mouse. tirando un mensaje de alerta, dentro de una funcion anonima
let btn_continuar = document.getElementById("btn_continuarCompra");
btn_continuar.addEventListener("click", function () {
    alert("este boton , mas adelante, servira para volver a añadir cosas al carrito cuando estemos en un paso previo a finalizar la compra")
})


//evento mousedown al presionar. mouseup al levantar el boton y ademas cambia al color amarillo el propio boton
let btn_finalizar = document.getElementById("btn_finalizarCompra");
btn_finalizar.addEventListener("mousedown", function presion1() {
    console.log("pronto con este boton direccionaremos a un espacio donde puedas elegir los medios de pago");
    document.getElementById("btn_finalizarCompra").style.backgroundColor = '#ffff00';

});
//evento mouseup. al levantar la presion del btn izquierdo cambia a color rojo.
btn_finalizar.addEventListener("mouseup", function presion2() {
    document.getElementById("btn_finalizarCompra").style.backgroundColor = '#ff0000';
})


let form = document.getElementById("form");
form.addEventListener("submit", function (e) {
    e.preventDefault();
    let coment = document.getElementById("comentario");
        console.log(" El comentario es :", comentario.value);

})

//FOOTER


//use createElement para insertar un h4 y le agregue una clase, que determinaba un color al h4
let redessociales = document.createElement("h3");
redessociales.innerText = "Seguinos en redes sociales";
redessociales.className = "colorazul";
redesfooter.append(redessociales);
/*El método getElementsByTagName() sirve para acceder a un conjunto de elementos de la estructura HTML, utilizando su nombre de etiqueta como identificación. Utilice la etiqueta li  */
let li = document.getElementsByTagName("li");
console.log(li);

for (let elemento of li) {
    console.log(elemento);
}
